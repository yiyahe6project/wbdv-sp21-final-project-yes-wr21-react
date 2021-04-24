import React, {useState, useEffect} from 'react'
import userService from "../../../services/user-service";


const ProductItem = (
    {
        product,
        deleteProduct,
        updateProduct,
    }) => {
    const [productCache, setProductCache] = useState(product)
    const [editing, setEditing] = useState(false)

    return (
            <tr>
                <td colSpan="2">
                    {product.seller.username}
                </td>
                <td>
                    { !editing &&
                    <>
                        {product.quantity}
                    </>
                    }
                    {
                        editing &&
                        <>
                            <input value={productCache.quantity}
                                   type='number'
                                   min="0"
                                   onChange={(e) => {
                                       setProductCache({
                                           ...productCache,
                                           quantity: e.target.value
                                       })
                                   }}
                                   className="form-control"/>
                        </>
                    }
                </td>
                <td>
                    { !editing &&
                        <>
                            {product.price}
                        </>
                    }
                    {
                        editing &&
                        <input value={productCache.price}
                               type='number'
                               min="0"
                               onChange={(e) => {
                                   setProductCache({
                                       ...productCache,
                                       price: e.target.value
                                   })
                               }}
                               className="form-control"/>
                    }
                </td>
                <td>
                    <div className="float-right">
                        {editing &&
                            <i onClick={() => {
                                setEditing(false)
                                updateProduct(productCache)
                                }}
                               className="fas fa-check color-green fa-2x"
                               style={{color: "green"}}></i>
                        }
                        {editing &&
                            <i onClick={() => {
                                setEditing(false)
                                deleteProduct(productCache)}}
                               className="fas fa-times fa-2x"
                               style={{color: "red"}}></i>
                        }
                        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x" style={{color: "blue"}}></i>}
                    </div>
                </td>


            </tr>
    )
}

export default ProductItem;