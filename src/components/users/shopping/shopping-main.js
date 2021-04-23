import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from "react-router-dom";
import {Col, Nav, Row, Tab, Tabs} from "react-bootstrap";
import ShoppingByDrink from "./shopping-by-drink";
import ShoppingCart from "./shopping-cart";
import userService from "../../../services/user-service";

const ShoppingMain = () => {
    const history = useHistory()
    const {idDrink} = useParams()
    const [key, setKey] = useState('drink');
    const [shoppingCartCache, setShoppingCartCache] = useState({items:[]})
    const [buyerId, setBuyerId] = useState("")

    useEffect(()=> {
        userService.profile()
            .catch(error => {
                alert("Not logged In!")
                history.push('/')
            })
            .then(profile => {
                if (profile) {
                    setBuyerId(profile._id)
                    // console.log(profile)
                    userService.findBuyerShoppingCart(profile._id)
                        .then(response => {
                            console.log(response)
                            setShoppingCartCache(response.shoppingCart)
                        })
                } else {
                    alert("Not logged In!")
                    history.push('/')
                }
            })
    }, [idDrink])

    const handleAddAProductToCart = (pair) => {
        const getProduct = pair.product
        const getQuantity = pair.quantity
        let currItems = shoppingCartCache.items
        const inShoppingCart = currItems.find((existing)=>{
            if (existing.product._id === getProduct._id) {
                return existing
            }
        })

        if (inShoppingCart) {
            // if the product is existing, then simply increment the quantity by 1
            pair.quantity = inShoppingCart.quantity + getQuantity
            updateShoppingCart(pair)
        } else {
            // if not, add it to shoppingCart
            let newItems = [...shoppingCartCache.items, pair]
            // need update totalPrice
            let addOnPrice = pair.product.price * pair.quantity
            let newPrice = shoppingCartCache.totalPrice + addOnPrice
            // newShoppingCart
            let newShoppingCart = {totalPrice: newPrice, items: newItems}
            userService.updateBuyerShoppingCart(buyerId, newShoppingCart)
                .then(status=> setShoppingCartCache(newShoppingCart))
        }
    }

    const deleteProductInCart = (pair) => {
        const getProduct = pair.product
        let priceOff = pair.product.price * pair.quantity
        // get rid of this product's total price
        let newPrice = shoppingCartCache.totalPrice - priceOff
        // copy shoppingCart
        let newItems = [...shoppingCartCache.items]
        const updatedItems = newItems.filter((existing) => {
            return existing.product._id !== getProduct._id
        })
        // this will be new shopping cart
        let newShoppingCart = {totalPrice: newPrice, items: updatedItems}
        userService.updateBuyerShoppingCart(buyerId, newShoppingCart)
            .then(()=> {
                setShoppingCartCache(newShoppingCart)
            })
    }


    const updateShoppingCart = (pair) => {
        const getProduct = pair.product
        const getQuantity = pair.quantity
        // console.log(shoppingCartCache)

        // copy the shopping cart, so that we don't directly
        // work on cached shopping cart
        let newItems = [...shoppingCartCache.items]
        const inShoppingCart = newItems.find((existing)=>{
            if (existing.product._id === getProduct._id) {
                return existing
            }
        })

        // calculate the new total price
        let newPrice = shoppingCartCache.totalPrice
        if (getQuantity > inShoppingCart.quantity) {
            // get more quantity, we need add
            newPrice += pair.product.price * (pair.quantity - inShoppingCart.quantity)
        } else {
            // get less quantity, we need reduce
            newPrice -= pair.product.price * (inShoppingCart.quantity - pair.quantity)
        }

        inShoppingCart.quantity = getQuantity
        let newShoppingCart = {totalPrice: newPrice, items: newItems}
        userService.updateBuyerShoppingCart(buyerId, newShoppingCart)
            .then(status=> setShoppingCartCache(newShoppingCart))
    }

    return (
        <div>
            <Tab.Container defaultActiveKey={key}>
                <Row>
                    <Col sm={8}>
                        <h1>Shopping Page</h1>
                        <Nav className='ml-1 flex-row' variant='tabs'>
                            <Nav.Item>
                                <Nav.Link eventKey="drink">Shop by Drinks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="store">Store</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="products">Products</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="drink">
                                <br/>
                                <br/>
                                <ShoppingByDrink
                                    handleAddAProductToCart={handleAddAProductToCart}
                                    idDrink={idDrink}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="store">
                                {/*<Sonnet/>*/}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col sm={4}>
                        <ShoppingCart
                            deleteProductInCart={deleteProductInCart}
                            updateShoppingCart={updateShoppingCart}
                            shoppingCartCache={shoppingCartCache}/>
                            <br/>
                            <button className='float-right btn btn-success'>Pay</button>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default ShoppingMain