import React, {useState} from 'react'
import './shopping-cart.css'
import EditableCart from "./editable-cart";

const ShoppingCart = ({shoppingCartCache}) => {
    return (
        <>
            <h1>Shopping Cart</h1>
            {
                shoppingCartCache.items.length === 0 &&
                <div>
                    Empty shopping cart!
                </div>
            }
            <ul className='list-group'>
                {
                    shoppingCartCache.items.map((pair, index) =>
                                                    <EditableCart
                                                    key={index}
                                                    pair={pair}/>)
                }
                {shoppingCartCache.items.length !== 0 &&
                 <div className='float-right'>
                     total: {shoppingCartCache.totalPrice}
                 </div>
                }
            </ul>

        </>
    )
}

export default ShoppingCart