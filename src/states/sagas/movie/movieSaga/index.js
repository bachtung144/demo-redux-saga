import {put,takeLatest,call} from 'redux-saga/effects';
import {Index} from '../movieApi'
import {FETCH_FAILED, FETCH_MOVIES, FETCH_SUCCEEDED} from "../../../actions/movie/types";


function * fetchMovies() {
    try {
        const data = yield call(Index.getMoviesFromApi)
        yield put ({type: FETCH_SUCCEEDED,payload : data})
    }
    catch (error) {
        yield put({type: FETCH_FAILED,error})
    }
}

export function * watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES,fetchMovies)
}

