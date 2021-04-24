import React, {useState} from 'react'
import {alignPropType} from "react-bootstrap/DropdownMenu";

const EditableProduct = ({drink, product, updateProduct, deleteProduct}) => {
    const [productCache, setProductCache] = useState(product)
    const [editing, setEditing] = useState(false)
    return (
        <>
            <div className='row'>
                <h4>Product name:</h4>
                <h4 className='ml-3'>{drink.nameDrink}</h4>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <img width={200}
                         height={200}
                         src={drink.imageURL}
                         alt={drink.nameDrink}/>
                </div>
                { !editing &&
                  <>
                    <div className='col-3'>
                        Quantity: {product.quantity}
                    </div>
                    <div className='col-3'>
                    Price: ${product.price}
                    </div>
                    <div className='col-2'>
                    <i className='float-right fa fa-cog edit-button fa-2x'
                       onClick={() => {
                           setEditing(true)
                       }}/>
                    </div>
                  </>
                }
                {
                    editing &&
                    <>
                        <div className='col-3'>
                            <label>
                            Quantity:
                            <input value={productCache.quantity}
                                   type='number'
                                   min="0"
                                   onChange={(e)=>
                                   {
                                       if (e.target.value < 0) {
                                           alert("Cannot set quantity to negative or undefined!")
                                           setEditing(false)
                                       } else {
                                           setProductCache({...productCache,
                                                               quantity: e.target.value})
                                       }
                                   }}
                                   className="form-control mb-3"/>
                            </label>
                        </div>
                        <div className='col-3'>
                            <label>
                            Price:
                            <input value={productCache.price}
                                   type='number'
                                   min="0"
                                   onChange={(e)=>
                                   {
                                       if (e.target.value < 0) {
                                           alert("Cannot set price to negative")
                                           setEditing(false)
                                       } else {
                                           setProductCache({...productCache,
                                                               price: e.target.value})
                                       }
                                   }}
                                   className="form-control mb-3"/>
                            </label>
                        </div>
                        <div className='col-2 up-del-buttons'>
                            <i onClick={() => {
                                setEditing(false)
                                updateProduct(productCache)
                            }}
                               className="float-right fa fa-2x fa-check"/>
                            <i
                                onClick={() => {
                                    deleteProduct(productCache)
                                }}
                               className="float-right fa fa-2x fa-trash mr-1"/>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default EditableProduct