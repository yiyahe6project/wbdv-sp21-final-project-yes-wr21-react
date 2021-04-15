const COCKTAIL_SEARCH = "https://www.thecocktaildb.com/api/json/v1/1/search.php"
const COCKTAIL_LOOKUP = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php"


const findCocktailByName = (name) => {
    return fetch(`${COCKTAIL_SEARCH}?s=${name}`)
        .then(response => response.json())
}

const findCocktailById = (id) => {
    return fetch(`${COCKTAIL_LOOKUP}?i=${id}`)
        .then(response => response.json())

}

const cocktailService = {
    findCocktailByName, findCocktailById
}

export default cocktailService