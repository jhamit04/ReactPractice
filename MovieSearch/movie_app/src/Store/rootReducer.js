import { combineReducers } from "redux";
import {searchMovieReducer} from "../Store/Reducers/searchMovieReducer";
import {getMovieByIdReducer} from "../Store/Reducers/getMovieByIdReducer"

const rootReducer = combineReducers({
  searchMovie:searchMovieReducer,
  selectedMovieForDetail:getMovieByIdReducer
});
export default rootReducer;