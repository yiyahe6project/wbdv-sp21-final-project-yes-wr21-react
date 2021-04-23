import React, {useEffect, useState} from 'react'
import productService from "../../../services/products-service";

const ShoppingByDrink = ({idDrink, handleAddAProductToCart}) => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        productService.findProductsByDrink(idDrink)
            .then((products) => {
                console.log(products)
                setProducts(products)
            })
    }, [idDrink])

    return (
        <ul className='list-group'>
            {
                products.map((product) => {
                    return (
                        <li key={product._id}
                        className='list-group-item'>
                            <div className='row'>
                                <h4>{product.seller.storeName}</h4>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    Drink Name: {product.drink.nameDrink}
                                    <div className='col-4'>
                                        <img width={100}
                                             height={100}
                                             src={product.drink.imageURL}
                                             alt={product.drink.nameDrink}/>
                                    </div>
                                </div>
                                <div className='col-3'>Quantity: {product.quantity}</div>
                                <div className='col-3'>Price: {product.price}</div>
                                <div className='col-2'>
                                    {
                                        product.quantity === 0 &&
                                        <i className="unavailable-warning
                                         float-right fas fa-exclamation-triangle">Unavailable</i>
                                    }
                                    <button
                                        disabled={product.quantity === 0}
                                        title={product.quantity === 0? 'Currently unavailable!': ""}
                                        onClick={()=> handleAddAProductToCart({product: product, quantity: 1})}
                                        className='float-right btn btn-primary'>
                                        Add
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ShoppingByDrink