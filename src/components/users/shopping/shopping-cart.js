import React, {useState} from 'react'

const ShoppingCart = ({shoppingCartCache}) => {
    return (
        <>
            <h1 className="text-primary">Shopping Cart</h1>
                {
                    shoppingCartCache.items.length === 0 &&
                    <div>
                        Empty shopping cart!
                    </div>
                }
                <ul className='list-group'>
                    {
                        shoppingCartCache.items.map((pair, index) => {
                            return (
                                <li className='list-group-item'
                                    key={index}>
                                    {pair.product.drink.nameDrink} by {pair.product.seller.storeName} : {pair.quantity}
                                </li>
                            )

                        })
                    }
                    {
                        shoppingCartCache.items.length !== 0 &&
                        <div className='float-right'>
                            total: {shoppingCartCache.totalPrice}
                        </div>
                    }
                </ul>

        </>
    )
}

export default ShoppingCart