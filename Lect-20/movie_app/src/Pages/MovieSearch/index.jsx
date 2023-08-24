
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {CgSearchLoading} from "react-icons/cg";
import {fetchMovieDetailRequest} from '../../Store/Actions/searchActions'
import "./movieSearch.css";

const MovieSearch = () => {
  const [userQuery, setUserQuery] = useState("");
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const searchMovies = useSelector(state => state.searchMovie);

  const onInputChangeHandler = (event) => {
    setUserQuery(event.target.value);
  };

  const onSearchHandler = () => {
    if(userQuery === ""){//api fails on empty query.
      return;
    }
    dispatch(fetchMovieDetailRequest(userQuery));
  };

  const onSelectionOfMovie = (id) => {
    nevigate(`/details/${id}`);
  };

  const getMovieList = () => {
    if (searchMovies?.movies?.moviesData && searchMovies.movies.moviesData.length) {
      return searchMovies.movies.moviesData.map((movie,index) => {
        const { id, image, title, type, year, imdb } = movie;
        return (
          <div key={id} className={`movie-item ${index%2!==0 ? 'ml':''}`} onClick={()=>{onSelectionOfMovie(id)}}>
            <h2>{`${title} (${type})`}</h2>
            <h2>{`${year}`}</h2>
            <div><a href={imdb} target="_blank">IMDB</a></div>
            <img src={image} className="image-style" alt={`${title} Poster`} />
          </div>
        );
      });
    }
  };

  return (
    <div className="movie-search-page-wrapper">
      <h1>Search Movies or Series</h1>
      <div className="search-container">
        <input
          placeholder="search here..."
          className="input-search"
          onChange={onInputChangeHandler}
          value={userQuery}
        />
        <FcSearch className="search-icon" onClick={onSearchHandler} />
      </div>
      <div className="movie-container">
        {getMovieList()}
      </div>
    </div>
  );
};

export default MovieSearch;
