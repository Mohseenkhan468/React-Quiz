import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import './home.css'
export default function Home(){
    return(
       <>
        <div className='home'>
            <h1 className='home-header'>Quizzical</h1>
            <p className='home-desc'>Some description if needed</p>
            <Link to="quiz" className='home-button'>Start quiz</Link>
        </div>
        <Outlet />
       </>
    )
}