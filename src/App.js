import React from 'react'
function Car() {
  return <h2>Hi, I am also a Car!</h2>;
}
function Creator(){
  return <h2>This is made by Sunny</h2>;
  
}
function App(){
  return(
    <div>
        <Creator/>
        <Car/>
    </div>
   
    
  )
}
export default App