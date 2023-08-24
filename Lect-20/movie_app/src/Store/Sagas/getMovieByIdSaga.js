import { put, call, takeLatest } from "redux-saga/effects";
import { 
  fetchGetMovieDetailWithID
} from "../Services/detailByIDService";

import {
  fetchMovieIDSuccess,
  fetchMovieIDFailure
} from "../Actions/movieDeatilActions";

import {FETCH_MOVIE_ID_REQUEST} from "../../Constants/actionsConstants";


export function* fetchGetMovieByIDSaga(payload) {
  try {
    const response = yield call(fetchGetMovieDetailWithID,payload);
    yield put(fetchMovieIDSuccess(response));
    
  } catch (error) {
    yield put(fetchMovieIDFailure(error));
  }
}

export function* watchGetMovieByIDSaga() {
  yield takeLatest(FETCH_MOVIE_ID_REQUEST, fetchGetMovieByIDSaga)};