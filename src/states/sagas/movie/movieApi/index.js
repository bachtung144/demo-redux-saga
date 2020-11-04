import axios from "axios";

const urlGetMovies = 'https://reactnative.dev/movies.json'

function* getMoviesFromApi() {
    const response = yield axios(urlGetMovies,{
        method: 'GET'
    })
    return yield response.status === 200 ? response.data.movies : []
}

export const Index = {
    getMoviesFromApi
}
