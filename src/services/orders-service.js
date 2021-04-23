const ORDER_URL = process.env.REACT_APP_API_URL

const findOrdersForBuyer = (buyerId) =>
    fetch(`${ORDER_URL}/orders/${buyerId}`, {
        method: 'GET'
    }).then(response => response.json())
        .catch((error) => console.log(error))

const finishCurrentOrder = (buyerId) =>
    fetch(`${ORDER_URL}/orders/finishOrder`, {
        method: 'POST',
        body: JSON.stringify(buyerId),
        headers: {
            'content-type' : 'application/json'
        }
    }).then((response) => response.json())

const orderService = {
    finishCurrentOrder,
    findOrdersForBuyer
}

export default orderService