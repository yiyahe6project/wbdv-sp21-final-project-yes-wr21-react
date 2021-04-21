const DRINK_URL = process.env.REACT_APP_API_URL

const findDrinksCategories = () =>
    fetch(`${DRINK_URL}/drinks/categories`, {
        method: 'GET'
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const findDrinksByCate = (cate) =>
    fetch(`${DRINK_URL}/drinks/category`, {
        method: 'POST',
        body: JSON.stringify(cate),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const drinkService = {
    findDrinksCategories,
    findDrinksByCate
}

export default drinkService