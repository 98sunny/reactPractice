import React, {useState} from 'react'


function HelloForms(){
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    let message='';
    if (name==='admin' && password==='admin') {
        message='Hello admin'        
    }else{
        message='Who are you'
    }


    return(
        <div>
        
            <input type="text" value={name} onChange={updatextField}/> 
            <input type="password" value={password} onChange={updatePasswordField}/>  
            <button onClick={submitForm}>Submit form</button>  
            <div>{message}</div> 
          
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