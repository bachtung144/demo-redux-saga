import {call,all} from 'redux-saga/effects';
import {watchFetchMovies} from './movie/movieSaga'

export default function *rootSaga() {
    yield all([
        call(watchFetchMovies)
    ])
}


