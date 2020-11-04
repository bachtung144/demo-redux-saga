import {FETCH_FAILED, FETCH_MOVIES, FETCH_SUCCEEDED} from './types'

export const fetchMoviesAction = (sort) => {
    return {
        type : FETCH_MOVIES,
        sort
    }
}

export const fetchSuccessAction = (payload) => {
    return {
        type : FETCH_SUCCEEDED,
        payload
    }
}

export const fetchFailedAction = (payload) => {
    return {
        type : FETCH_FAILED,
        payload
    }
}



