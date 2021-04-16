import React from 'react'

const ProductList = ({productList}) => {
    return (
        <ul className='list-group'>
            {
                productList.map((product) => {
                    const drink = product.drink
                    return (
                        <li className='list-group-item'
                            key={drink.idDrink}>
                            <div className='row'>
                                <h4>Product name:</h4>
                                <h4 className='ml-3'>{drink.nameDrink}</h4>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <img width={200}
                                         height={200}
                                         src={drink.imageURL}
                                         alt={drink.nameDrink}/>
                                </div>
                                <div className='col-2'>
                                    Quantity: {product.quantity}
                                </div>
                                <div className='col-2'>
                                    Price: {product.price}
                                </div>
                                <div className='col-2'>
                                    <i className='float-right fa fa-cog edit-button fa-2x'/>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ProductList