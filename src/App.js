import React,{useState} from 'react'
import HelloForms from './formInReact'
const arr=[1,2,3,4,5];
const counter=0;


const DisplayTasks=(props)=>{
  <div>
    <header>Total tasks: {props.taskGroup.length()}</header>
  </div>
}




function Car() {
  return (<div>
    <h2>Hi, I am also a Car!</h2>
    <h2>hello</h2>
    const 
  </div>);
}

function Bike() {
  return <h2>Hi, I am also a {2+2} Bike!</h2>;
}
function Creator(){
  return <h2>This is made by Sunny</h2>;
}
function SquareArray(){

  return <h4>{arr.map(val=> <div>{val**2}</div>)}</h4>
}
function buttonWasClicked() {
  alert("I was clicked");
  
}


function App(){
  let [counter,setCounter]=useState(6);//-->[0, fn]
  function buttonWasClicked(){
    setCounter(counter+1)
  }

  return(
    <>
    <button onClick={buttonWasClicked}>Button</button>
    {/* <button onClick={displayCounterValue}>Click to increment value</button> */}
    <h2>{counter}</h2>
    
        {/* <DisplayCounterValue/> */}
        <Creator/>
        <Car/>
        <Bike/>
        <SquareArray/>
        <HelloForms/>
        
    </>
   
    
  )
}
export default App