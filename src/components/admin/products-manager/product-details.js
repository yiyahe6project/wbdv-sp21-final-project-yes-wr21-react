import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import productsService from "../../../services/products-service"
import drinkService from "../../../services/drink-service";
import ProductItem from "./product-item";
import productService from "../../../services/products-service";

const ProductDetails = () => {
    const {drinkName} = useParams()
    const history = useHistory()

    const [productList, setProductList] = useState([])

    useEffect(() => {
        drinkService.findDrinkByName(drinkName)
            .then(drink => {
                productsService.findProductsByDrink(drink[0].idDrink)
                    .then(products => {
                        setProductList(products)
                    })
            })
    }, [])

    const updateProduct = (updatedProduct) => {
        productService.updateProduct(updatedProduct._id, updatedProduct)
            .then((res) => {
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
        <div>
            <button className="btn btn-primary m-3" onClick={()=>{history.goBack()}}>Back</button>

            <h2>{drinkName} Details</h2>
            <Table className="product-details">
                <thead>
                <tr>
                    <th className="h3" colSpan="2">Seller</th>
                    <th className="h3 d-none d-sm-table-cell">Quantity</th>
                    <th className="h3 d-none d-sm-table-cell">Price</th>
                    <th className="h3 d-none d-sm-table-cell"></th>

                </tr>
                </thead>
                <tbody>

                {
                    productList.map(product =>
                        <ProductItem product={product} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
                    )

                }

                </tbody>

            </Table>
        </div>
    )
}

export default ProductDetails;