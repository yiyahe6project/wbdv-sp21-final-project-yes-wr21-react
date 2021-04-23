const PRODUCT_URL = process.env.REACT_APP_API_URL

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

const findAllProducts = () =>
    fetch(`${PRODUCT_URL}/products`, {
        method: 'GET'
    }).then(response => response.json()).catch((error) => {console.log(error)})

const productService = {
    findProductsForSeller,
    createProduct,
    findAllProducts
}

export default productService
