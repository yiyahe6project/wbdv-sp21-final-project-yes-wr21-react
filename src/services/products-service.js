const PRODUCT_URL = process.env.REACT_APP_LOCAL_API

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

const productService = {
    findProductsForSeller,
    createProduct
}

export default productService