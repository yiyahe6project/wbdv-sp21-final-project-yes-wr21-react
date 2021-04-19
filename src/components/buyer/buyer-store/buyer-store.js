import React, {useEffect, useState} from 'react';

import {Link, useParams} from "react-router-dom";
import productService from "../../../services/products-service";
import userService from "../../../services/user-service";
import ProductList from "../product-list/product-list";
import profile from "../../users/profile/profile";

const BuyerStore = ({}) => {

    const {buyerId} = useParams()
    const [productList, setProductList] = useState([])

    const [buyerInfo, setBuyerInfo] = useState({
         storeName: ''
     })

    useEffect(() => {
        if (buyerId !== "undefined" && typeof buyerId !== "undefined") {
            userService.profile().then(profile => {
                setBuyerInfo(profile)
                productService.findAllProducts().then(products => {
                    setProductList(products)
                })
            })
            // userService.profile().catch(error => {
            //     alert("Buyer is not logged in!!")
            //     this.props.history.push('/')
            // }).then(profile => {
            //     setBuyerInfo(profile)
            //     productService.findAllProducts()
            //         .then(products => {
            //             setProductList(products)
            //         })
            // })
        }
    })
    return (
        <>
            <br/>
            <div>
                <h1>Welcome Buyer !! {buyerId}</h1>
                <div className="row">
                    <h2 className="col-6"> Your Total Cost: </h2>
                </div>
                <br/>

                <div>
                    <ProductList
                        productList={productList}/>
                </div>

            </div>
        </>
    )
}

export default BuyerStore
