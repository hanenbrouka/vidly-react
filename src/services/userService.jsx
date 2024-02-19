import http from './httpService';
//import { apiUrl } from "../config.json";

const apiUrl="http://localhost:3900/api"

const apiEndpoint = apiUrl + '/users'

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name
    })
}