import {createPortal} from "react-dom"
import "./timeForm.css";
import { useState } from "react";
export default function TimerForm(
    {showForm,
    closeForm,
    onCreateHandler,
    onUpdateHandler,
    editData,
    editedIndex}){
    const[name,setName] = useState("");
    const[duration,setDuration] = useState("");
    const[showError,setShowError] = useState(false);
    const[errorType,setErrorType] = useState("");
    const nameHandler = (event)=>{
        setName(event.target.value);
    }
    const durationHandler =(event)=>{
        setDuration(event.target.value);
    }
    const validateAndSubmit = ()=>{
        if(name===""){
            setShowError(true);
            setErrorType("Invalid Timer Name");
            return;
        }
        if(duration===""||!/^\d+$/.test(duration)){
            setShowError(true);
            setErrorType("Invalid Duration TIme");
            return;
        }
        if(editData){
            onUpdateHandler(name,duration,editedIndex)
            console.log("editedData")
            console.log("duration",duration)
        }else{
            onCreateHandler(name, duration);
        }
        setName("");
        setDuration("");
        closeForm();
    
    }
    return showForm && createPortal(
        <div className="container">
            <input 
            placeholder="Timer Name" 
            type="text"
            className="timer_input" 
            onChange={nameHandler}/>
            <input 
            placeholder="Timer Duration" 
            type="text"
            className="timer_input" 
            onChange={durationHandler}/>
            <button className="form_btn" onClick={()=>{validateAndSubmit()}}>{editData?"EditTimer":"CreateTimer"}</button>
            <button className="form_btn" onClick={closeForm}>Close</button>
            {showError ? (
            <h3 className="error-msg">{errorType}</h3>
             ) : (
            <h3 className="error-msg"></h3>
        )}

        </div>,document.body
    )
}