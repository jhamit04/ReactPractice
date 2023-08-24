import {
    FETCH_MOVIE_ID_REQUEST,
    FETCH_MOVIE_ID_SUCCESS,
    FETCH_MOVIE_ID_FAILURE
} from "../../Constants/actionsConstants";

  const initialState = {
      movie: {
        
      }
  };
  
  export function getMovieByIdReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_MOVIE_ID_REQUEST:
        return {
            movie: {
                fetchingMovies: true,
                moviesFetched: false,
                fetchingMoviesFailed: false,
                movieData:{}
            }
        }
      case FETCH_MOVIE_ID_SUCCESS:
        return {
            movie: {
                fetchingMovies: false,
                moviesFetched: true,
                fetchingMoviesFailed: false,
                movieData:action.response
            }
        };
      case FETCH_MOVIE_ID_FAILURE:
        return {
            movie: {
                fetchingMovies: false,
                moviesFetched: true,
                fetchingMoviesFailed: true,
                movieData:{}
            }
        };
      default:
        return state;
    }
  }
  