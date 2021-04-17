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

const userService = {
    register,
    profile,
    logout,
    login
}

export default userService