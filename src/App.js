import React,{useState} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import HelloForms from './formInReact'
import Home from './components/Home'
import About from './components/About'
import Greet from './components/Greet'

const arr=[1,2,3,4,5];
const counter=0;
const arr2=[
  {
    name: "Humber",
    id:1,
    task1:"task1",
    task2:"task2",
    task3:"task3"
  },
  {
    name: "MERN",
    id:2,
    task1:"Lab",
    task2:"Project",
    task3:"Quiz"
  },
  {
    name: "Java",
    id:3,
    task1:"GD",
    task2:"Exam",
    task3:"Assignment"
  },
]

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
function GreetNameComponent(props){
  console.log(props)
  return <div>
    <h1>Hello {props.name}</h1>
  {props.children}
  </div>
}


function App(){
  let [counter,setCounter]=useState(6);//-->[0, fn]
  function buttonWasClicked(){
    setCounter(counter+1)
  }



  return(
    <>
    <Router>
      <Switch>
      {/* the respective component is called when we route the same */}
        <Route path="/" exact component={Home}/>
        {/* //exact is  used or else all the child routes will be matched */}
        <Route path="/about" exact component={About}/>
        <Route path="/greet/:name" exact component={Greet}/>
      </Switch>
    </Router>
    <div>
      {
        arr2.map(elem=>
        (<ul>
        {elem.name}
        <li>{elem.task1}</li>
        <li>{elem.task2}</li>
        <li>{elem.task3}</li>
        </ul>))
        }
    </div>
    <button onClick={buttonWasClicked}>Button</button>
    {/* <button onClick={displayCounterValue}>Click to increment value</button> */}
    <h2>{counter}</h2>
    
        {/* <DisplayCounterValue/> */}
        <GreetNameComponent name="Sunny is doing this">
          <p>This is a childeren props element</p>
        </GreetNameComponent>
        <Creator/>
        <Car/>
        <Bike/>
        <SquareArray/>
        <HelloForms/>
        
    </>
   
    
  )
}
export default App