import React from 'react'
import EditableProduct from "../editable-product/editable-product";

const ProductList = ({productList, updateProduct, deleteProduct}) => {
    return (
        <ul className='list-group'>
            {
                productList.map((product) => {
                    const drink = product.drink
                    return (
                        <li key={drink._id}
                            className='list-group-item'>
                            <EditableProduct
                                drink={drink}
                                updateProduct={updateProduct}
                                deleteProduct={deleteProduct}
                                product={product}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ProductList