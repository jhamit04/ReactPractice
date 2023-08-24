import { 
  FETCH_MOVIE_DETAIL_REQUEST, 
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_FAILURE 
} from "../../Constants/actionsConstants";

export const fetchMovieDetailRequest = payload => {
return {
  type: FETCH_MOVIE_DETAIL_REQUEST,
  payload:payload
};
};

export const fetchMovieDetailSuccess = response => {
return {
  type: FETCH_MOVIE_DETAIL_SUCCESS,
  response : response.results
};
};


export const fetchMovieDetailFailure = error => {
return {
  type: FETCH_MOVIE_DETAIL_FAILURE,
  error
};
};