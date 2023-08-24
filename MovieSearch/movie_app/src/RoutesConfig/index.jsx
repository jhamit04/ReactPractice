
import { Routes, Route } from 'react-router-dom';
import MovieSearch from '../Pages/MovieSearch'
import Details from '../Pages/Details';
import Review from '../Pages/Review';
import { NoMatch } from '../Pages/NoMatch';
const RoutesConfig = () => {
    return(
        <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/review/:id" element={<Review/>} />
        <Route path="*" element={<NoMatch />} />
       </Routes>
    );
}

export default RoutesConfig;
