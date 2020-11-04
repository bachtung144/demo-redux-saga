import {FETCH_FAILED, FETCH_SUCCEEDED} from "../../actions/movie/types";

const initialState = {
    movies:[]
};

export default (state = initialState, {type,payload}) => {
    switch (type) {
        case FETCH_SUCCEEDED :
            return {
                ...state,
                movies: payload
            }
        case FETCH_FAILED :
            return []
        default : return state
    }
}
