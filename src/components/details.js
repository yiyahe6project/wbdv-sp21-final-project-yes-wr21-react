import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import cocktailService from '../services/cocktail-service'

const Details = () => {
    const {id} = useParams()
    const history = useHistory()
    const [drink, setDrink] = useState({})
    useEffect(() => {
        if (id) {
            findCocktailById()
        }
    }, [id])
    const findCocktailById = () => {
        cocktailService.findCocktailById(id)
            .then((result) => {
                let drink = result && result.drinks[0]
                setDrink(drink)
            })
    }

    // get top 10 ingredients if not null
    const getIngredients = (drink) => {
        let ingredients = []
        for (let i = 0; i < 10; i++) {
            let s = `strIngredient${i+1}`
            let m = `strMeasure${i+1}`
            let ingredient = drink[s]
            let measure = drink[m]
            if (ingredient && measure) {
                ingredients.push(`${ingredient} ${measure}`)
            }
        }
        // console.log(ingredients)
        return ingredients;
    }

    return(
        <>
            {/*<button onClick={()=>{history.goBack()}}>Back</button>*/}
            <div className="row mt-3">
                <h2 className="col-md-9">{drink.strDrink}</h2>
                <span className="col-md-3 pull-right">
                    <a className=" btn btn-primary" href={`/products/${drink.strDrink}/details`}>
                       Check stock
                    </a>
                </span>
            </div>
            <div>
                <img className="float-right"
                     alt={drink.strDrink}
                     src={drink.strDrinkThumb}
                     width={700}
                     height={700}/><br/>
                <p>
                    <b>Category: </b>
                    {drink.strCategory}
                </p>
                <p>
                    <b>Instructions: </b>
                    {drink.strInstructions}
                </p>
                <p>
                    <b>Ingredients: </b>
                </p>
                <ul className="list-group">
                    {
                        getIngredients(drink).map((ingredient, i) => {
                            return(
                                <li className="list-group-item" key={i}>
                                    {ingredient}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>


    )
}

export default Details