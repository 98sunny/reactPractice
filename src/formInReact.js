import React, {useState} from 'react'

function HelloForms(){
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    
    return(
        <div>
            <input type="text" value={name} onChange={updatextField}/> 
            <input type="password" value={password} onChange={updatePasswordField}/>  
            <button onClick={submitForm}>Submit form</button>          
        </div>
        
    )
    function submitForm(){
        console.log(name,password);
    }
    function updatePasswordField(event) {
        setPassword(event.target.value)
    }
    function updatextField(event){
        setName(event.target.value)
    }
   
}
export default HelloForms