import { useNavigate } from 'react-router-dom';
import "./home.css";
 const Home = ()=>{
    const navigate = useNavigate()
    return (
        <>
        <h1>Job Finder App</h1>
        <p>We help students to search for active job</p>
        <p>Click on search button to search for active jobs</p>
        <button onClick={()=>navigate("search-job")}>Search Job</button>
        <button onClick={()=>navigate("contact")}>Contact</button>
        <button onClick={()=>navigate("/")}>Home</button>
        </>
    )
}
export default Home