import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./jobDetails.css"

const JobDetails = () => {
    const navigate = useNavigate()
  const { id } = useParams();
  const [allJobs, setAllJobs] = useState({
    by: "XXXX",
    id: 0,
    score: 1,
    time: 0,
    title: "XXXXX",
    type: "XXXXXXX",
  });
  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((res) => res.json())
      .then((jsonRes) => {
        setAllJobs(jsonRes);
      }).catch((e)=>{
        navigate("fallback")
    })
  }, [id]);
  return (
    <div className="job-details-container">
    <h1>{allJobs.by}</h1>
    <h2>{allJobs.title}</h2>
    <p>{allJobs.type}</p>
    <p>{allJobs.time}</p>
    </div>
  )
};
export default JobDetails;
