import React, {useState} from 'react'
import './shopping-cart.css'
import EditableCart from "./editable-cart";

const ShoppingCart = ({shoppingCartCache, updateShoppingCart,
                          deleteProductInCart}) => {
    return (
        <>
            <h1>Shopping Cart</h1>
            {
                shoppingCartCache.items.length === 0 &&
                <div>
                    Empty shopping cart!
                </div>
            }
            {
                shoppingCartCache.items.length !== 0 &&
                <div className='row'>
                    <div className='col-6'>
                        product:
                    </div>
                    <div className='col-3'>
                        Quantity:
                    </div>
                </div>
            }
            <ul className='list-group'>
                {
                    shoppingCartCache.items.map((pair) =>
                                                    <EditableCart
                                                        deleteProductInCart={deleteProductInCart}
                                                        updateShoppingCart={updateShoppingCart}
                                                        key={pair.product._id}
                                                        pair={pair}/>)
                }
                {shoppingCartCache.items.length !== 0 &&
                 <div className='float-right'>
                     total: ${shoppingCartCache.totalPrice}
                 </div>
                }
            </ul>

        </>
    )
}

export default ShoppingCart