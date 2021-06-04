import React from 'react'
import {useRef} from 'react'
import {Link} from 'react-router-dom'
export default function Home(){
    const h1Ref=useRef();
    console.log(h1Ref);
    setTimeout(() => {
        console.log(h1Ref.current.innerText)
    }, 10);
    return <h1 ref={h1Ref}>This is home page. Nw go to <Link to="/about">
    About page
</Link></h1>
}