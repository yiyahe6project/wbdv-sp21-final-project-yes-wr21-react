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
    const isAdmin = window.location.href.includes('admin')

    return (
            <tr>
                <td colSpan="2">
                    <a href={`/profile/${product.seller._id}`}>{product.seller.username}</a>
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
                                       if (e.target.value < 0) {
                                           alert("Cannot set quantity to negative or undefined!")
                                           setEditing(false)
                                       } else {
                                       setProductCache({
                                           ...productCache,
                                           quantity: e.target.value
                                       })
                                       }
                                   }}
                                   className="form-control"
                                   placeholder="please input product quantity"/>
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
                               min='0'
                               onChange={(e) =>
                               {
                                   if (e.target.value < 0) {
                                       alert("Cannot set price to negative or undefined!")
                                       setEditing(false)
                                   } else {
                                       setProductCache({
                                           ...productCache,
                                           price: e.target.value
                                       })
                                   }
                               }}
                               className="form-control"
                               placeholder="please determine product price "/>
                    }
                </td>
                <td>
                    {isAdmin &&
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
                                deleteProduct(productCache)
                            }}
                               className="fas fa-times fa-2x"
                               style={{color: "red"}}></i>
                            }
                            {!editing &&
                            <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x" style={{color: "blue"}}></i>}
                        </div>
                    }
                </td>


            </tr>
    )
}

export default ProductItem;