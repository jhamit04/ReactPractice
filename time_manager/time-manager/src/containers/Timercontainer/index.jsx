import {MdOutlineEditNote,MdDeleteForever} from "react-icons/md";
import "./timerContainer.css"
import useTimer from "../../components/hooks";
export default function TimerContainer(
    {timerIndex,
    timerName,
    timerDuration,
    onEditTimer,
    onDeleteTimer}){
    const timer = useTimer(timerDuration)
    return (
        <div className="timer_container">
            <h1>{timer===0 ?"Oops Times Up...":timer}</h1>
            <h1>{timerName}</h1>
            <div className="edit" onClick={()=>onEditTimer(timerIndex)} ><MdOutlineEditNote/></div>
            <div className="delete" onClick={()=>onDeleteTimer(timerIndex)}><MdDeleteForever/></div>
        </div>
    )
}