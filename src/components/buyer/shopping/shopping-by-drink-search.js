import React, {useEffect, useState} from 'react'
import productService from "../../../services/products-service";
import cocktailService from "../../../services/cocktail-service";
import {useHistory} from "react-router-dom";

const ShoppingByDrinkSearch = ({idDrink, handleAddAProductToCart}) => {
    const history = useHistory()
    const [drinkInfo, setDrinkInfo] = useState({})
    const [products, setProducts] = useState([])

    useEffect(()=> {
        cocktailService.findCocktailById(idDrink).then((drink) =>{
            console.log(drink.drinks[0])
            setDrinkInfo(drink.drinks[0])
                                                       }
        )
        productService.findProductsByDrink(idDrink)
            .then((products) => {
                console.log(products)
                setProducts(products)
            })
    }, [idDrink])

    return (
        <>
            <button
            onClick={()=> history.push(`/search/${drinkInfo.strDrink}`)}
                className='btn btn-primary'> <i className='fa fa-search'/> Search again</button>
            <h4>Search result for : {drinkInfo.strDrink}</h4>
            {
                products.length === 0 &&
                <h4>Currently Unavailable!
                </h4>
            }
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
        </>
    )
}

export default ShoppingByDrinkSearch