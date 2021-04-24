const USER_URL = process.env.REACT_APP_API_URL

const register = (user) =>
    fetch(`${USER_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
        .catch((error) => {console.log(error)})

const profile = () =>
    fetch(`${USER_URL}/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => {
        return response.json()
    })

const updateUserInfo = (userProfile) =>
    fetch(`${USER_URL}/profile`, {
        method: 'PUT',
        credentials: "include",
        body: JSON.stringify(userProfile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        return response.json()
    })

const logout = () =>
    fetch(`${USER_URL}/logout`, {
        method: 'POST',
        credentials: "include"
    })

const login = (user) =>
    fetch(`${USER_URL}/login`,{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => {
        return response.json()
    })

// For buyer
const updateBuyerShoppingCart = (buyerId, shoppingCart) =>
    fetch(`${USER_URL}/buyer/${buyerId}/shoppingCart`, {
        method: 'POST',
        body: JSON.stringify(shoppingCart),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const findBuyerShoppingCart = (buyerId) =>
    fetch(`${USER_URL}/buyer/${buyerId}/shoppingCart`)
        .then(response => response.json())

// For admin
const findUsersByRole = (role) =>
    fetch(`${USER_URL}/users/role/${role}`)
        .then(response => response.json())

const findUserById = (userId) =>
    fetch(`${USER_URL}/users/${userId}`)
        .then(response => response.json())

const userService = {
    register,
    profile,
    logout,
    login,
    updateBuyerShoppingCart,
    findBuyerShoppingCart,
    findUserById,
    findUsersByRole,
    updateUserInfo
}

export default userService