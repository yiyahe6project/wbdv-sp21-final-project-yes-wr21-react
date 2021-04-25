import React from 'react'

const OrderCell = ({order, num}) => {
    return (
        <li className='list-group-item bg-warning'>
            Order {num}
            {
                order.products.map((product, index) => {
                    let getProduct = product.product
                    console.log(getProduct)
                    const parseDate = new Date(order.finishDate).toDateString()
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-sm highlight-font">
                                    {getProduct.drink.nameDrink} from {getProduct.seller.storeName}
                                    <img
                                        height={100}
                                        width={100}
                                        src={getProduct.drink.imageURL} alt={getProduct.drink.nameDrink}/>
                                </div>
                                <div className="col-sm">
                                    Quantity: {product.quantity}
                                </div>
                                <div className="col-sm">
                                    Price: ${getProduct.price}
                                </div>
                                <div className="col-sm highlight-font">
                                    Date: {parseDate}
                                </div>
                            </div>
                            <br/>
                        </div>
                        // <div
                        //     className="bg-info"
                        //     key={index}>
                        //     <div className='row'>
                        //         <div className='col-4 highlight-font'>{getProduct.drink.nameDrink} from {getProduct.seller.storeName}</div>
                        //         <div className='col-2'>Quantity: {product.quantity}</div>
                        //         <div className='col-2'>Price: ${getProduct.price}</div>
                        //         <div className='col-2 highlight-font'>Date: {parseDate}</div>
                        //     </div>
                        // </div>
                    )
                })
            }
            <div className='highlight-font'> Total Price: ${order.totalPrice}</div>
        </li>
    )
}

export default OrderCell