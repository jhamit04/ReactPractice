
import {searchWithQuery} from "../../urls"

export const fetchSearchMovies = (payload) => {
    return fetch(searchWithQuery+payload.payload)
      .then(response => {
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
};