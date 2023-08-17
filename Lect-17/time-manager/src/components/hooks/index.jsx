import { useEffect } from "react";
import { useState } from "react";
export default function useTimer(startingTime){
    const[time,setTime] = useState(startingTime);
    let timeRef = null;
    useEffect(()=>{
        timeRef = setInterval(()=>{
            setTime((prevTime)=>prevTime===0?prevTime:prevTime-1)
        },1000);

        return ()=>{
            clearInterval(timeRef)
        }
    },[]);
    return time;
}