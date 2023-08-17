// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoMatch from './pages/Nomatch';
import SearchJob from './pages/Searchjob';
import JobDetails from './pages/JobDetails';
import "./App.css"


const App = () => {
 return (
    <div className='push-right'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
          <Route path='/detail/:id' element={<JobDetails/>}></Route>
          <Route path="search-job" element={<SearchJob />} />
      </Routes>
    </div>
 );
};

export default App;
