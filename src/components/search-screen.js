import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import cocktailService from "../services/cocktail-service"

const SearchScreen = () => {
    const history = useHistory()
    const {name} = useParams()
    const [searchName, setSearchName] = useState(name)
    const [results, setResults] = useState({drinks: []})
    useEffect(() => {
        setSearchName(name)
        findCocktailByName(name)
    }, [])
    const findCocktailByName = (name) => {
        history.push(name)
        cocktailService.findCocktailByName(name)
            .then((results) => {
                setResults(results)
            })
    }
    return(
        <div>
            <h2>Search Screen</h2>
            <div className="row">
                <div className="col-9">
                    <input value={searchName}
                           onChange={(event) => {
                               setSearchName(event.target.value)
                           }}
                           className="form-control"/>
                </div>
                <div className="col-3">
                    <button
                        onClick={() => {
                            findCocktailByName(searchName)
                        }}
                        className="btn btn-primary btn-block">
                        Search
                    </button>
                </div>
            </div>
            <br/>
            <ul className="list-group">
                {
                    // results && results.drinks && results.drinks.map((drink) => {
                    //     return(
                    //         <li className="list-group-item">
                    //             <Link to={`/details/${drink.idDrink}`}>
                    //                 {drink}
                    //             </Link>
                    //         </li>
                    //     )
                    // })
                    JSON.stringify(results)
                }
            </ul>
        </div>
    )
}

export default SearchScreen