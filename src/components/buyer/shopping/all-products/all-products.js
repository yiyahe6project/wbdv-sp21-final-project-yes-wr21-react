import React, {useEffect, useState} from 'react'
import productService from "../../../../services/products-service"
import ProductCellBuyer from "../product-cell-buyer";

const ShoppingByAllProducts = ({handleAddAProductToCart}) => {
    const [productsCache, setProductsCache] = useState([])
    useEffect(() => {
        productService.findAllProducts().then((products => {
            setProductsCache(products)
        }))
    }, [])

    return (
        <>
            <br/>
            <h3> All products in our web! Enjoy!</h3>
            <br/>
            {
                productsCache.length === 0 &&
                <h3>No products yet.</h3>
            }
            {
                productsCache.length !== 0 &&
                productsCache.map((product) =>
                                      <ProductCellBuyer
                                          key={product._id}
                                          product={product}
                                          handleAddAProductToCart={handleAddAProductToCart}/>)
            }
        </>
    )
}

export default ShoppingByAllProducts