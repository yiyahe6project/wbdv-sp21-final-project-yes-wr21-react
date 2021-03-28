
const findCocktailByName = (name) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(response => response.json())
}

const findCocktailById = (id) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
}

export default {
    findCocktailByName, findCocktailById
}