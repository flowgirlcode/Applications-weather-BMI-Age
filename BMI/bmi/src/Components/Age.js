import React, { useState } from 'react'
import {moment} from 'moment'
import { Link } from 'react-router-dom';
const Age = () => {
    const [dob,setDob]=useState(2024);
    const presentDate=new Date();
    const [year,setYear]=useState();
    const presentYr=presentDate.getFullYear();
    const birthYr=new Date(dob).getFullYear();
 

    const calculateAge=(e)=>{
        e.preventDefault()
        const calAge=presentYr-birthYr;
        setYear(calAge);
       
    }
    const handleDob =(e)=>{
        e.preventDefault()
        setDob(e.target.value)

    }
  return (
    <>
        <h1>Age Calculator</h1>
        <form onSubmit={calculateAge}> 
            <input type="Date" onChange={handleDob}/>
            <button>Calculate Age</button>
            <p>You are <strong>{year}</strong> years old </p>
        </form>
        <Link to='/bmi'>What's your BMI?check here</Link>

    </>
  )
}

export default Age