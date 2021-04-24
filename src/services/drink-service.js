const DRINK_URL = process.env.REACT_APP_API_URL

const findDrinksCategories = () =>
    fetch(`${DRINK_URL}/drinks/categories`, {
        method: 'GET'
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const findDrinksByCate = (cate) =>
    fetch(`${DRINK_URL}/drinks/category`, {
        method: 'GET',
        body: JSON.stringify(cate),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const findDrinkByName = (drinkName) => {
    return fetch(`${DRINK_URL}/drink/${drinkName}`)
        .then(response => response.json())
}

const drinkService = {
    findDrinksCategories,
    findDrinksByCate,
    findDrinkByName
}

export default drinkService