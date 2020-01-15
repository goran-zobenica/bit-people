import { http } from './HttpServices'

export const createUser = (data) => {
    const requestUrl = "http://crud-api.hypetech.xyz/v1/auth/register"
    return http.post(requestUrl, data)
}


export const loginUser = (data) => {
    const requestUrl = "http://crud-api.hypetech.xyz/v1/auth/login"
    return http.post(requestUrl, data)
}


export const searchUser = (id) => {
    const requestUrl = "http://crud-api.hypetech.xyz/v1/users/" + id
    return http.get(requestUrl)
        .then(result => {
            if (result.firstName) {
                return result.firstName
            }
            return result.name.first
        })
}

export const fetchUsers = () => {
    const requestUrl = "http://crud-api.hypetech.xyz/v1/users"
    return http.get(requestUrl)
}