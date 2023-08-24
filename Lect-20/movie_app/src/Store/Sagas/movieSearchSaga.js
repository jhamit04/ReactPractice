import { put, call, takeLatest } from "redux-saga/effects";
import { 
  fetchSearchMovies
} from "../Services/searchService";

import {
  fetchMovieDetailFailure,
  fetchMovieDetailSuccess,
} from "../Actions/searchActions";

import {FETCH_MOVIE_DETAIL_REQUEST} from "../../Constants/actionsConstants";


export function* fetchMovieSearchSaga(payload) {
  try {
    const response = yield call(fetchSearchMovies,payload);
    yield put(fetchMovieDetailSuccess(response));
    
  } catch (error) {
    yield put(fetchMovieDetailFailure(error));
  }
}

export function* watchMovieSearchSaga() {
  yield takeLatest(FETCH_MOVIE_DETAIL_REQUEST, fetchMovieSearchSaga)};