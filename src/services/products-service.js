const PRODUCT_URL = process.env.REACT_APP_API_URL
const findAllProducts = () =>
    fetch(`${PRODUCT_URL}/products`, {
        method: 'GET'
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const findProductsForSeller = (sellerId) =>
    fetch(`${PRODUCT_URL}/products/${sellerId}`, {
        method: 'GET'
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const createProduct = (product) =>
    fetch(`${PRODUCT_URL}/products`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => response.json())

const updateProduct = (productId, product) =>
    fetch(`${PRODUCT_URL}/products/${productId}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => response.json())

const deleteProduct = (productId) =>
    fetch(`${PRODUCT_URL}/products/${productId}`, {
        method: 'DELETE'
    }).then(response => response.json())

const findProductsByDrink = (idDrink) =>
    fetch(`${PRODUCT_URL}/drink/${idDrink}/products`, {
        method: 'GET'
    }).then((response => response.json()))


const productService = {
    findAllProducts,
    findProductsForSeller,
    createProduct,
    updateProduct,
    deleteProduct,
    findProductsByDrink
}

export default productService