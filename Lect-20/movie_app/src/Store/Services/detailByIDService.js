import {getMovieDetailWithID} from "../../urls"

export const fetchGetMovieDetailWithID = (payload) => {
    const movieID = payload.payload;
    return fetch(getMovieDetailWithID+movieID)
      .then(response => {
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
};