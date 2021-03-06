const DRINK_URL = process.env.REACT_APP_API_URL

const findDrinksCategories = () =>
    fetch(`${DRINK_URL}/drinks/categories`, {
        method: 'GET'
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const findDrinksByCate = (cate) =>
    fetch(`${DRINK_URL}/drinks/categories/${cate}`, {
        method: 'GET'
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const findDrinksByCateForSeller = (cate) =>
    fetch(`${DRINK_URL}/drinks/categories/${cate}/Seller`, {
        method: 'GET'
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const findDrinkByName = (drinkName) => {
    return fetch(`${DRINK_URL}/drink/${drinkName}`)
        .then(response => response.json())
}

const drinkService = {
    findDrinksCategories,
    findDrinksByCate,
    findDrinkByName,
    findDrinksByCateForSeller
}

export default drinkService