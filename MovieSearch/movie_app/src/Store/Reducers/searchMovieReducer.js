import {
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_FAILURE
} from "../../Constants/actionsConstants";

  const initialState = {
      movies: {
        
      }
  };
  
  export function searchMovieReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_MOVIE_DETAIL_REQUEST:
        return {
            movies: {
                fetchingMovies: true,
                moviesFetched: false,
                fetchingMoviesFailed: false,
                moviesData:{}
            }
        }
      case FETCH_MOVIE_DETAIL_SUCCESS:
        return {
            movies: {
                fetchingMovies: false,
                moviesFetched: true,
                fetchingMoviesFailed: false,
                moviesData:action.response
            }
        };
      case FETCH_MOVIE_DETAIL_FAILURE:
        return {
            movies: {
                fetchingMovies: false,
                moviesFetched: true,
                fetchingMoviesFailed: true,
                moviesData:{}
            }
        };
      default:
        return state;
    }
  }
  