import './App.css';
import LandingPage from './LandingPage';
import Contact from './Contact';
import ThemeContext from './Context/ThemeContext';
import { AvailabilityProvider } from './Context/availability-context';
function App() {
  const prop = {
    name:"amit",
    phone:"+918149792118"
  }
  return (
    <>
    <AvailabilityProvider>
    <ThemeContext.Provider value={prop}>
        <Contact/>
        <LandingPage/>
    </ThemeContext.Provider>
    </AvailabilityProvider>

   
    </>
  );
}

export default App;
