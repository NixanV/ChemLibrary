const baseUrl = 'http://localhost:3030/users'


export const login = (userData) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
}