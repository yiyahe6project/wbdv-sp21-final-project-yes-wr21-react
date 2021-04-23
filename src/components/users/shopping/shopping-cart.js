import React, {useState} from 'react'

const ShoppingCart = ({shoppingCartCache=[]}) => {
    return (
        <>
            <h1>Shopping Cart</h1>

            {JSON.stringify(shoppingCartCache)}

            {
                shoppingCartCache && shoppingCartCache.length === 0 &&
                <div>
                    Empty shopping cart!
                </div>
            }
            <ul className='list-group'>
                {
                    shoppingCartCache && shoppingCartCache.map && shoppingCartCache.map((pair, index) => {
                        return (
                            <li className='list-group-item'
                                key={index}>
                                {pair.product.drink.nameDrink} by {pair.product.seller.storeName} : {pair.quantity}
                            </li>
                        )

                    })
                }
            </ul>
            {
                shoppingCartCache && shoppingCartCache.length !== 0 &&
                <div className='float-right'>
                    total: {shoppingCartCache.totalPrice}
                </div>
            }
        </>
    )
}

export default ShoppingCart