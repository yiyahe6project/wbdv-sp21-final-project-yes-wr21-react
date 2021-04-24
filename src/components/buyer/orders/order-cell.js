import React from 'react'

const OrderCell = ({order, num}) => {
    return (
        <li className='list-group-item'>
            Order {num}
            {
                order.products.map((product, index) => {
                    let getProduct = product.product
                    const parseDate = new Date(order.finishDate).toDateString()
                    return (
                        <div>
                            <div key={index} className='row'>
                                <div className='col-4 highlight-font'>{getProduct.drink.nameDrink} from {getProduct.seller.storeName}</div>
                                <div className='col-2'>Quantity: {product.quantity}</div>
                                <div className='col-2'>Price: {getProduct.price}</div>
                                <div className='col-2 highlight-font'>Date: {parseDate}</div>
                            </div>
                        </div>
                    )
                })
            }
            <div className='highlight-font'> Total Price: {order.totalPrice}</div>
        </li>
    )
}

export default OrderCell