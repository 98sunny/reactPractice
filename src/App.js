import React from 'react'
function Car() {
  return <h2>Hi, I am also a Car!</h2>;
}
function Bike() {
  return <h2>Hi, I am also a Bike!</h2>;
}
function Creator(){
  return <h2>This is made by Sunny</h2>;
}
function App(){
  return(
    <div>
        <Creator/>
        <Car/>
        <Bike/>
    </div>
   
    
  )
}
export default App