import { 
    FETCH_MOVIE_ID_REQUEST, 
    FETCH_MOVIE_ID_SUCCESS,
    FETCH_MOVIE_ID_FAILURE 
} from "../../Constants/actionsConstants";

export const fetchMovieIDRequest = payload => {
  return {
    type: FETCH_MOVIE_ID_REQUEST,
    payload:payload
  };
};

export const fetchMovieIDSuccess = response => {
  return {
    type: FETCH_MOVIE_ID_SUCCESS,
    response : response
  };
};


export const fetchMovieIDFailure = error => {
  return {
    type: FETCH_MOVIE_ID_FAILURE,
    error
  };
};