import React, {useState} from 'react'

const EditableCart = ({pair, updateShoppingCart, deleteProductInCart}) => {
    const [editing, setEditing] = useState(false)
    const [pairCache, setPairCache] = useState(pair)

    return (<>
            <li className='list-group-item'>
                <div className='row cart-body'>
                    <div className='col-7'>
                        {pairCache.product.drink.nameDrink} by {pairCache.product.seller.storeName}:
                    </div>
                    {
                        editing &&
                        <>
                            <input className='col-2 cart-editor-typing'
                                   type='Number'
                                   onChange={(e) =>
                                       setPairCache({...pairCache, quantity: e.target.value})}
                                   value={pairCache.quantity}/>
                            <div className='col-3 cart-editor-button'>
                                <i onClick={() => {
                                    setEditing(false)
                                    updateShoppingCart(pairCache)
                                }}
                                   className="float-right edit-button fa fa-check"/>
                                <i
                                    onClick={() => {
                                        deleteProductInCart(pairCache)
                                    }}
                                    className="float-right edit-button fa fa-trash mr-1"/>
                            </div>
                        </>
                    }
                    {!editing &&
                     <>
                         <div className='cart-editor col-2'>
                             {pair.quantity}
                         </div>
                         <div className='cart-editor-button col-3'>
                             <i className='float-right fa fa-cog edit-button'
                                onClick={() => {
                                    setEditing(true)
                                }}/>
                         </div>
                     </>
                    }
                </div>
            </li>
        </>
    )
}

export default EditableCart