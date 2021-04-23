const COCKTAIL_SEARCH = "https://www.thecocktaildb.com/api/json/v1/1/search.php"
const COCKTAIL_LOOKUP = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php"
const USER_URL = process.env.REACT_APP_LOCAL_API

const findCocktailByName = (name) => {
    return fetch(`${COCKTAIL_SEARCH}?s=${name}`)
        .then(response => response.json())
}

const findCocktailById = (id) => {
    return fetch(`${COCKTAIL_LOOKUP}?i=${id}`)
        .then(response => response.json())

}

const retrieveCocktailfromDB = () => {
    return fetch(`${USER_URL}/drinks/categories`)
        .then(response => response.json())
}

const cocktailService = {
    findCocktailByName, findCocktailById, retrieveCocktailfromDB
}



export default cocktailService