import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchJob = ()=>{
    const navigate = useNavigate()
    const[allJobs,setAllJobs] = useState([]);
    const[isLoading,setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
        .then(res=>res.json())
        .then((jsonRes)=>{
            setAllJobs(jsonRes)
            setLoading(false)
        }).catch((e)=>{
            navigate("fallback")
        })
    },[])
    const onClickOfJob = (job)=>{
        navigate(`/detail/${job}`);
    }
    return(
       <>
       <h1>Search Job</h1>
       {isLoading?<h1>loading...</h1>:allJobs.map((job,index)=>{
        return <p key={index} className="job-id" onClick={()=>{onClickOfJob(job)}}>{job}</p>
       })}
       </>
    )
}
export default SearchJob;