import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export const Dummy = ()=>{
  return <h1> i am dummy</h1>
}
function App({myName,address}) {
  const[count,setCount] = useState(0);
  const[name,setName] = useState(myName)
  const onClickHandler = ()=>{
    setCount(count+1)
    setName(name+address)
  }
  return (  
    <>
    <h1>{count}</h1>
    <h1>{name}</h1>
    <button onClick={onClickHandler}>click</button>
    <Dummy/>
    </>
    
    
  );
}

export default App;
