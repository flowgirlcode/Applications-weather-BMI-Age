import React from 'react'
import Age from './Components/Age';
import Bmi from './Components/Bmi';
import Theme from './Components/Theme';
import Weather from './Components/Weather';
import { Link } from 'react-router-dom';
import bmi from './Images/bmi.jpeg';
import age from './Images/age.jpeg'
import weather from  './Images/w.jpeg'
import './Layout.css'

const Layout = () => {
  return (
    <>
    <article>
        <h2>Applications</h2>
    </article>
    <article className='apps'>
    <div>
        
        <h1><Link to="/bmi"><img src={bmi} alt="BMI" /></Link></h1> 
 
     </div>
     <div>
         
    <h1><Link to="/Age"><img src={age} alt="Age" /></Link></h1>
     </div>
     <div>
     <h1><Link to="/weather"><img src={weather} alt="BMI" />
     </Link></h1>
     
     </div>
     </article>
     </>
   
   
   
  )
}

export default Layout