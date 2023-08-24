import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieIDRequest } from "../../Store/Actions/movieDeatilActions";

const styles = {
    moviePage: {
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '5px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: '24px',
      color: '#333',
    },
    image: {
      maxWidth: '200px',
    },
    details: {
      marginTop: '20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    },
    section: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    sectionHeader: {
      fontSize: '18px',
      marginBottom: '10px',
      color: 'skyblue',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
      color: '#666',
    },
    listItem: {
      marginBottom: '5px',
    },
    rating: {
      fontWeight: 'bold',
      color: '#333',
    },
};

const Details = () =>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const {selectedMovieForDetail} = useSelector(state=>state);
    const getMovieDetailJSX = () => {
        if(selectedMovieForDetail.movie.moviesFetched){
            const {
                title,
                image,
                plot,
                rating,
                genre,
                runtime,
                actors,
                directors,
              } = selectedMovieForDetail.movie.movieData;
            return(<div style={styles.moviePage}>
                <div style={styles.header}>
                  <h1 style={styles.title}>{title}</h1>
                  <img src={image} alt={title} style={styles.image} />
                </div>
                <div style={styles.details}>
                  <div style={styles.section}>
                    <h2 style={styles.sectionHeader}>Plot</h2>
                    <p>{plot}</p>
                  </div>
                  <div style={styles.section}>
                    <h2 style={styles.sectionHeader}>Rating</h2>
                    <p style={styles.rating}>{rating.star} / 10</p>
                    <p>{rating.count} reviews</p>
                  </div>
                  <div style={styles.section}>
                    <h2 style={styles.sectionHeader}>Genre</h2>
                    <ul style={styles.list}>
                      {genre.map((genre, index) => (
                        <li key={index} style={styles.listItem}>
                          {genre}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={styles.section}>
                    <h2 style={styles.sectionHeader}>Duration</h2>
                    <p style={styles.rating}>{runtime}</p>
                  </div>
                  <div style={styles.section}>
                    <h2 style={styles.sectionHeader}>Actors</h2>
                    <ul style={styles.list}>
                      {actors.map((actor, index) => (
                        <li key={index} style={styles.listItem}>
                          {actor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={styles.section}>
                    <h2 style={styles.sectionHeader}>Directors</h2>
                    <ul style={styles.list}>
                      {directors.map((director, index) => (
                        <li key={index} style={styles.listItem}>
                          {director}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </div>);
        }else if(selectedMovieForDetail.movie.fetchingMovies){
            return <h1>Loading Details.....</h1>
        }else if(selectedMovieForDetail.movie.fetchingMoviesFailed){
            return<h1>Unable to get details.</h1>
        }
        
    }
    useEffect(()=>{
        dispatch(fetchMovieIDRequest(id));
    },[]);
    return (
        <div>
            {getMovieDetailJSX()}
        </div>
    );
}

export default Details;
