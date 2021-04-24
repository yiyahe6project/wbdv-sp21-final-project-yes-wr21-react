import React, {useEffect, useState} from 'react'
import productService from "../../../../services/products-service";
import cocktailService from "../../../../services/cocktail-service";
import {useHistory} from "react-router-dom";
import ProductCellBuyer from "../product-cell-buyer";

const ShoppingByDrinkSearch = ({idDrink, handleAddAProductToCart}) => {
    const history = useHistory()
    const [drinkInfo, setDrinkInfo] = useState({})
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (idDrink !== '' && idDrink !== undefined) {
            cocktailService.findCocktailById(idDrink).then((drink) => {
                                                               // console.log(drink.drinks[0])
                                                               setDrinkInfo(drink.drinks[0])
                                                           }
            )
            productService.findProductsByDrink(idDrink)
                .then((products) => {
                    // console.log(products)
                    setProducts(products)
                })
        }
    }, [idDrink])

    return (
        <>
            <button
                onClick={() => history.push(`/search/${drinkInfo.strDrink}`)}
                className='btn btn-primary'><i className='fa fa-search'/> Search again
            </button>
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
                            <ProductCellBuyer
                                key={product._id}
                                product={product}
                                handleAddAProductToCart={handleAddAProductToCart}/>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ShoppingByDrinkSearch