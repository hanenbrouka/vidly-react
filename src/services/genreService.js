import http from './httpService';
//import {apiUrl} from '../config.json';
 
const apiUrl="http://localhost:3900/api"
export function getGenres() {
    return http.get(apiUrl + '/genres');
}