import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {fetchMoviesAction} from "../../states/actions/movie";

export const Home = () => {
    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)

    const test = () => {
        dispatch(fetchMoviesAction('asc'))
    }
    return(
        <div>
            <button onClick={() => test()}>
                fetch
            </button>
            <div>
                {movies?.map(item => <div key={item.id}>{item.title}</div>)}
            </div>
        </div>
    )
}
