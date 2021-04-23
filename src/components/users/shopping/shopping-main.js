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
                setBuyerId(profile._id)
                // console.log(profile)
                userService.findBuyerShoppingCart(profile._id)
                    .then(response => {
                        console.log(response)
                        setShoppingCartCache(response.shoppingCart)
                    })
            })
    }, [idDrink])

    const updateShoppingCart = (pair) => {
        const getProduct = pair.product
        const getQuantity = pair.quantity
        console.log(shoppingCartCache)
        let addOnPrice = pair.product.price * pair.quantity
        let newPrice = shoppingCartCache.totalPrice + addOnPrice
        let currItems = shoppingCartCache.items
        const inShoppingCart = currItems.find((existing)=>{
            if (
                existing.product._id === getProduct._id) {
                return existing
            }
        })
        if (inShoppingCart) {
            inShoppingCart.quantity += getQuantity
            let newShoppingCart = {totalPrice: newPrice, items: currItems}
            // console.log(newShoppingCart)
            userService.updateBuyerShoppingCart(buyerId, newShoppingCart)
                .then(status=> setShoppingCartCache(newShoppingCart))
        } else {
            let newItems = [...shoppingCartCache.items, pair]
            let newShoppingCart = {totalPrice: newPrice, items: newItems}
            userService.updateBuyerShoppingCart(buyerId, newShoppingCart)
                .then(status=> setShoppingCartCache(newShoppingCart))
        }
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
                                    updateShoppingCart={updateShoppingCart}
                                    idDrink={idDrink}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="store">
                                {/*<Sonnet/>*/}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col sm={4}>
                        <ShoppingCart
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

