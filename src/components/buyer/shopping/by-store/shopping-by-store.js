import React, {useEffect, useState} from 'react'
import productService from "../../../../services/products-service";
import ProductCellBuyer from "../product-cell-buyer";

const ShoppingByStore = ({selectedStoreName, selectedStore, handleAddAProductToCart}) => {
    const [productsCache, setProductsCache] = useState([])
    useEffect(()=> {
        if (selectedStore !== '') {
            productService.findProductsForSeller(selectedStore)
                .then((products) => {
                    setProductsCache(products)
                })
        }
    }, [selectedStore])
    return (
        <>
            <h3>{selectedStoreName}</h3>
            <br/>
            {
                productsCache.length === 0 &&
                <h3>No products yet.</h3>
            }
            {
                productsCache.length !== 0 &&
                productsCache.map((product)=>
                <ProductCellBuyer
                    key={product._id}
                product={product}
                handleAddAProductToCart={handleAddAProductToCart}/>)
            }
        </>
    )
}

export default ShoppingByStore