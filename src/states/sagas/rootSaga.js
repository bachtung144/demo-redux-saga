import {call} from 'redux-saga/effects';
import {watchFetchMovies} from './movie/movieSaga'

export default function *rootSaga() {
    yield call(watchFetchMovies)
}


