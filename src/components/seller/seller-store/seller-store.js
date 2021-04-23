import React, {useEffect, useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import userService from "../../../services/user-service";
import productService from "../../../services/products-service";
import drinkService from "../../../services/drink-service";
import ProductList from "../product-list/product-list";
import "./seller-store.css"

const SellerStore = ({}) => {
    let history = useHistory()
    const {sellerId} = useParams()
    const [sellerInfo, setSellerInfo] = useState({
        storeName: ''
    })
    const [drinksCategories, setDrinksCategories] = useState([])
    const [drinksByCate, setDrinksByCate] = useState([])
    const [productList, setProductList] = useState([])
    const [selectedCate, setSelectedCate] = useState("")
    const [selectedDrink, setSelectedDrink] = useState("")

    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    useEffect(()=> {
        if (sellerId !== "undefined" && typeof sellerId !== "undefined") {
            userService.profile()
                .catch(error => {
                    alert("Not logged in as a Seller!")
                    history.push('/')
                })
                .then(profile => {
                    setSellerInfo(profile)
                    // console.log(profile.storeName)
                    productService.findProductsForSeller(sellerId)
                        .then(products => {
                            setProductList(products)
                        })
                })
        } else {

        }

        drinkService.findDrinksCategories()
            .then((categories) => {
                setDrinksCategories(categories)
                if (selectedCate !== '') {
                    drinkService.findDrinksByCateForSeller(encodeURIComponent(selectedCate))
                        .then(drinks => {
                            console.log(drinksByCate)
                            setDrinksByCate(drinks)
                        })
                }
            })
    },[sellerId, selectedCate])

    const handleAddADrink = () => {
        const repeated = productList.find((product) => {
            if (product.drink === selectedDrink) {
                return product
            }
        })
        if (selectedDrink !== "") {
            if (quantity === 0 || price === 0) {
                alert("You sure about price and quantity are correct?")
                return
            }
            if (repeated) {
                alert("Cannot add to product, since you have one the same product existing!")
            } else {
                const newProduct = {
                    drink: selectedDrink,
                    quantity: quantity.toString(),
                    price: price.toString(),
                    seller: sellerId
                }
                console.log(newProduct)
                productService.createProduct(newProduct)
                    .then((createdProduct) => {
                        setProductList([...productList, createdProduct])
                    })
            }
        } else {
            alert("You have to select a drink to add a product!")
        }
    }

    const updateProduct = (updatedProduct) => {
        productService.updateProduct(updatedProduct._id, updatedProduct)
            .then((res) => {
                // console.log(actualProduct)
                let updatedProducts = productList.map(product => {
                    if (product._id === updatedProduct._id) {
                        return updatedProduct
                    } else {
                        return product
                    }
                })
                setProductList(updatedProducts)
            })
    }

    const deleteProduct = (deletedProduct) => {
        productService.deleteProduct(deletedProduct._id)
            .then((res) => {
                let updatedProducts = productList.filter(product => {
                    return product._id !== deletedProduct._id
                })
                setProductList(updatedProducts)
            })
    }

    return (
        <>
            <div>
                <h1>{sellerInfo.storeName}</h1>

                {/*<div className='row'>*/}
                {/*    <h2 className='col-6'> Total Revenue: </h2>*/}
                {/*</div>*/}
                <br/>

                <div className='row'>
                    <h2 className='col-10'> Add a new product:</h2>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-4'>
                        <select
                            onChange={(e) => {
                                console.log(e.target.value)
                                setSelectedCate(e.target.value)
                            }}
                            defaultValue={'none'}
                            className="form-control">
                            <option value="none" disabled>
                                Select a type
                            </option>
                            {
                                drinksCategories.map((cate, index) => {
                                    return (<option
                                        key={index}
                                        value={cate}>{cate}</option>)
                                })
                            }
                        </select>
                    </div>

                    <div className='col-4'>
                        <select
                            // defaultChecked={"Please select the drink"}
                            onChange={(e) => {
                                setSelectedDrink(e.target.value)
                            }}
                            disabled={selectedCate === ""}
                            title={"Please select a drink type first!"}
                            defaultValue={'none'}
                            className="form-control">
                            <option value="none" disabled>
                                Select a drink
                            </option>
                            {
                                drinksByCate.map((drink, index) => {
                                    return (<option
                                        key={index}
                                        value={drink._id}>{drink.nameDrink}</option>)
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-4'>
                        <label htmlFor="quantity"> Quantity: </label>
                        <input type="number"
                               id="quantity"
                               min='0'
                               value = {quantity}
                               onChange={(e) => setQuantity(e.target.value)}
                               className='form-control'
                               name="quantity"/>
                    </div>
                    <div className='col-4'>
                        <label htmlFor="quantity"> Price: </label>
                        <input type="number"
                               className='form-control'
                               id="price"
                               min='0'
                               value = {price}
                               onChange={(e) => setPrice(e.target.value)}
                               name="price"/>
                    </div>
                    <div className='col-4'>
                        <button
                            onClick={handleAddADrink}
                            className="btn btn-success btn-block">
                            Add a product
                        </button>
                    </div>
                </div>

                <div className='row'>
                    <h2 className='col-10'> My products:</h2>
                </div>

                <div>
                    <ProductList
                        updateProduct={updateProduct}
                        deleteProduct={deleteProduct}
                        productList={productList}/>
                </div>

            </div>
        </>
    )
}

export default SellerStore