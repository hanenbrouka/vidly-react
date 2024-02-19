import http from "./httpService";
//import { apiUrl } from "../config.json";
const apiUrl="http://localhost:3900/api";
const apiEndpoint = apiUrl + "/movies";


export function getMovieUrl(id) {
    return '${apiEndpoint}/${id}' ;
}
 
export function getMovies() {
  return http.get(apiEndpoint);
}
export function getMovie(movieId) {
  return http.get(movieId);
}
export function saveMovies(movie) {
  if (movie._id) {
    const body = {...movie};
    delete body._id;
    http.put((movie._id), body)
  }
  http.post(apiEndpoint , movie);
}

export function deleteMovie(movieId) {
  http.delete(movieId);
}
