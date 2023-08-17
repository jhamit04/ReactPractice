
import { useState } from "react";
import AddWidget from "./components/addWidget";
import TimerForm from "./components/CreateTimerForms";
import TimerContainer from "./containers/Timercontainer";
function App() {
  const[openForm,setOpenForm] = useState(false);
  const[timerList,setTimerList] = useState([]);
  const[isEditMode,setIsEditMode] = useState(false);
  const[editedIndex,setEditedIndex] = useState(-1);

  
  const addTimer = (timerName,timerDuration)=>{
    const timerObj = {
      name:timerName,
      duration:timerDuration
    }
    setTimerList((prevList)=>[...prevList,timerObj])
  }
  const onDeleteTimer = (index)=>{
    console.log(index);
    setTimerList((prevList)=>prevList.filter((timer,i)=>i!==index));
  }
  const onEditTimer = (index)=>{
    setIsEditMode(true);
    setEditedIndex(index);
    setOpenForm(true);
  }
  const onUpdateHandler = (name,duration,index) => {
    const timerObj = {
      name:name,
      duration:duration
    };
    const timerListCopy = [...timerList];
    timerListCopy[index]=timerObj;
    setTimerList(timerListCopy);
}

  return (
    <>
    <AddWidget addWidgetHandler={()=>setOpenForm(!openForm)}/>
    <TimerForm showForm={openForm} closeForm={()=>setOpenForm(false)} onCreateHandler={addTimer} />
    {timerList.map((timer,index)=>{
      return(
        <TimerContainer
        timerIndex={index}
        timerName={timer.name}
        timerDuration={timer.duration}
        onDeleteTimer={onDeleteTimer}
        onEditTimer={onEditTimer}/>
      )
      
    })}
    {isEditMode? <TimerForm
      showForm={openForm} 
      closeForm={()=>{setOpenForm(false);setIsEditMode(false);setEditedIndex(-1)}}
      onUpdateHandler = {onUpdateHandler}
      editData={timerList[editedIndex]}
      editedIndex={editedIndex}
      />:<></>}

    </>
  );
}

export default App;


