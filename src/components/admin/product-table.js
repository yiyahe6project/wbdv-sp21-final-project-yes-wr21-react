import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import productService from "../../services/products-service";
// import cocktailService from "../services/cocktail-service"

const ProductTable = () => {

    const [sortedProducts, setSortedProducts] = React.useState([]);
    const sortedField = "nameDrink";

    const sortByName = () => {
        if (sortedField) {
            sortedProducts.sort((a, b) => {
                if (a[sortedField] < b[sortedField]) {
                    return -1;
                }
                if (a[sortedField] > b[sortedField]) {
                    return 1;
                }
                return 0;
            });
        }
    }

    const getAllProducts = () => {

        productService.findAllProducts().then((products) => {
            setSortedProducts(products);
        })
    }

    useEffect(() => {
        getAllProducts()
        sortByName()
    }, [])

    return (
        <div>
            <h2>Products</h2>
            <br/>

            <ul className="list-group">
                {
                    sortedProducts.map((product, index) => {
                        return(
                            <>
                                <li
                                    className="list-group-item"
                                    key={product._id}>
                                    <div className="row">
                                        <h4>Product name: </h4>
                                        <p>{product.drink.nameDrink}</p>
                                    </div>
                                    <div className="row">
                                        <h4>Category: </h4>
                                        <p>{product.drink.category}</p>
                                    </div>
                                    <div className="row">
                                        <img src={product.drink.imageURL}
                                             alt={product.drink.nameDrink}
                                             width={170}
                                             height={180}/>
                                        <h5>Quantity: {product.quantity}</h5>

                                        <h5>Price: {product.price}</h5>

                                    </div>

                                    <br/>
                                    <br/>
                                    <br/>
                                </li>
                            </>
                        )
                    })
                }
            </ul>

            {/*<ul>*/}
            {/*    {*/}
            {/*        sortedProducts.map((product, index) =>*/}

            {/*            <div>*/}
            {/*                <div className="row">*/}
            {/*                    <h4>Product name: </h4>*/}
            {/*                    <p>{product.drink.nameDrink}</p>*/}
            {/*                </div>*/}
            {/*                <div className="row">*/}
            {/*                    <h4>Category: </h4>*/}
            {/*                    <p>{product.drink.category}</p>*/}
            {/*                </div>*/}
            {/*                <img*/}
            {/*                    src={product.drink.imageURL}*/}
            {/*                    alt={product.drink.nameDrink}*/}
            {/*                    width={100}*/}
            {/*                    height={100}*/}
            {/*                />*/}

            {/*                /!*{JSON.stringify(product)}*!/*/}

            {/*                /!*{product.drink.nameDrink}*!/*/}
            {/*                /!*{product.quantity}*!/*/}
            {/*                <br/>*/}
            {/*                <br/>*/}
            {/*                <br/>*/}
            {/*            </div>*/}

            {/*        )*/}
            {/*    }*/}
            {/*</ul>*/}

        </div>

    )

}

export default ProductTable;

