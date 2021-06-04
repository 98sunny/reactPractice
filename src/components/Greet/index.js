import React from 'react'
import {useParams} from 'react-router-dom'
// import {Link} from 'react-router-dom'
export default function Greet() {
    const params=useParams()
    console.log(params);
    return(               
            <h1>Greetings for {params.name}</h1>
    )
    
}