import React, {useEffect, useState} from 'react';

import {Link, useParams} from "react-router-dom";
import productService from "../../../services/products-service";
import userService from "../../../services/user-service";
import ProductList from "../product-list/product-list";
import profile from "../../users/profile/profile";

const BuyerStore = ({}) => {

    const {buyerId} = useParams()
    const [productList, setProductList] = useState([])
    // const [selectedCate, setSelectedCate] = useState("")
    const [buyerInfo, setBuyerInfo] = useState({
         storeName: ''
     })
    const quantities = []
    if (productList.length > 0) {
        for (let i = 0; i < productList.length; i++) {
            quantities.push(0);
        }
    }

    useEffect(() => {
        if (buyerId !== "undefined" && typeof buyerId !== "undefined") {
            userService.profile().catch(error => {
                alert("Buyer is not logged in!!")
                this.props.history.push('/')
            }).then(profile => {
                setBuyerInfo(profile)
                productService.findAllProducts()
                    .then(products => {
                        setProductList(products)
                    })
            })
        }
    }, [buyerId])
    return (
        <>
            <br/>
            <div>
                <h1>Welcome Buyer !!</h1>
                <div className="row">
                    <h2 className="col-6"> Your Total Cost: </h2>
                </div>
                <br/>

                <div>
                    <ProductList
                        productList={productList}
                        quantities={quantities}/>
                </div>

            </div>
        </>
    )
}

export default BuyerStore
