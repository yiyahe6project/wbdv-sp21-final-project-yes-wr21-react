import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
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

            <h2>{drink.strDrink}</h2>
            <img className="float-right"
                 alt={drink.strRink}
                 src={drink.strDrinkThumb}/><br/>
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
            {/*{JSON.stringify(drink)}*/}
            </>

    )
}

export default Details