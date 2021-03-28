import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import cocktailService from '../services/cocktail-service'

const DetailsScreen = () => {
    const {id} = useParams()
    const history = useHistory()
    const [cocktail, setCocktail] = useState({drinks: []})
    useEffect(() => {
        findCocktailById()
    }, [])
    const findCocktailById = () => {
        cocktailService.findCocktailById(id)
            .then((data) => {
                setCocktail(data)
            })
    }
    return(
        <div>
            <button onClick={()=>{history.goBack()}}>Back</button>
            <h2>{cocktail}</h2>
            {/*<p>*/}
            {/*    <img src={movie.Poster} width={100} style={{float: "right"}}/>*/}
            {/*    {movie.Plot}*/}
            {/*</p>*/}
            {/*<div>*/}
            {/*    {movie.Actors}*/}
            {/*    <ul>*/}
            {/*        {*/}
            {/*            movie.Actors && movie.Actors.split(",")*/}
            {/*                .map((actor)=>{*/}
            {/*                    return(*/}
            {/*                        <li>{actor}</li>*/}
            {/*                    )*/}
            {/*                })*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {JSON.stringify(cocktail)}
        </div>
    )
}

export default DetailsScreen