import { http } from './HttpServices'

//to register a new user we are sending user data and user registration endpoint to the post method function in Httpservices.js
export const createUser = (data) => {
    const requestUrl = "http://crud-api.hypetech.xyz/v1/auth/register"
    return http.post(requestUrl, data)
}


//sending login information and login endpoint to our post method function
export const loginUser = (data) => {
    const requestUrl = "http://crud-api.hypetech.xyz/v1/auth/login"
    return http.post(requestUrl, data)
}

//getting the user name by ID provided as parameter; 
//server holds user name in object with property firstName or in property name.first therefore we had to cover both responses with IF statement
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

//sending endpoint to our get method
export const fetchUsers = () => {
    const requestUrl = "http://crud-api.hypetech.xyz/v1/users"
    return http.get(requestUrl)
}