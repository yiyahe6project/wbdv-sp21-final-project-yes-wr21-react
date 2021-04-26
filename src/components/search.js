import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import cocktailService from "../services/cocktail-service"
import userService from "../services/user-service";

const Search = () => {
    const history = useHistory()
    const {name} = useParams()
    const [searchName, setSearchName] = useState("")
    const [results, setResults] = useState({drinks: []})
    const [buyerLoggedIn, setBuyerLoggedIn] = useState(false)
    const [userName, setUsername] = useState("")
    useEffect(() => {
        setSearchName(name)
        if (name) {
            findCocktailByName(name)
        }
        userService.profile()
            .then((user) => {
                if (user.role === "Buyer") {
                    setBuyerLoggedIn(true)
                    setUsername(user.username)
                }

            })
    }, [name])
    const findCocktailByName = (name) => {
        cocktailService.findCocktailByName(name)
            .then((results) => {
                setResults(results)
            })
    }
    return(
        <div className="mt-3">
            <div className="row">
                <div className="col-9">
                    <input value={searchName}
                           onChange={(event) => {
                               setSearchName(event.target.value)
                           }}
                           className="form-control"
                    placeholder="please search cocktail name"/>
                </div>
                <div className="col-3">
                    <button
                        onClick={() => {
                            if (results && results.drinks) {
                                history.push(`/search/${searchName}`)
                            } else {
                                history.push(`/search`)
                                alert("Currently Unavailable!")
                            }
                        }}
                        className="btn btn-primary btn-block">
                        Search
                    </button>
                </div>
            </div>
            <br/>
            <ul className="list-group">
                {
                    results && results.drinks && results.drinks.map((drink) => {
                        return(
                            <li className="list-group-item" key={drink.idDrink}>
                                <Link to={`/details/${drink.idDrink}`}>
                                    {drink.strDrink}
                                </Link>

                                {
                                    buyerLoggedIn &&
                                    <button
                                        onClick={()=> history.push(`/shopping/search/${drink.idDrink}`)}
                                        className='float-right btn btn-primary'>Order</button>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Search