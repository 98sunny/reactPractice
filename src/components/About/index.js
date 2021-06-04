import React from 'react'
import {Link} from 'react-router-dom'
import {useRef,useEffect,useState} from 'react'
// link allows us to link different pages
//sometimes whenever there is change in component
//react re renders the component which brings some change in the props/state which is
//coming from and some will not change
//with useEffect, we can track when we want to change and when
// we dont want to bring in change
export default function About(){
    const h1Ref=useRef();
    const[counter,setCounter]=useState(0)
    const[counter2,setCounter2]=useState(0)
    //componentdidmount
    useEffect(() => {
        //fetching course info=>when url changes
        console.log(h1Ref)
    },[counter2])
    setTimeout(() => {
        console.log(h1Ref.current.innerText)
    }, 10);
    return(
        
        <div ref={h1Ref}>
        {/* onClick={()=>
        setCounter(counter=>counter+1)}>
        This is about page{counter}. Nw go to <Link to="/home">
        Home page
       </Link></div> */}
       <h1>{counter}</h1>
       <h1>{counter2}</h1>
       <button onClick={()=>setCounter(counter=>counter+1)}>Counter1</button>
       <button onClick={()=>setCounter2(counter=>counter+1)}>Counter2</button>
       </div>
    )

   
}