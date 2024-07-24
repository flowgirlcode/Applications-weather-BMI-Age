import React, { useEffect, useState} from 'react'
import './Weather.css'
import sun from '../Images/sun.webp';
import rain from '../Images/rain_with_cloud.webp';
import Tor from '../Images/Tornado.webp';
import { Link } from 'react-router-dom';

const moment =require('moment')

const Weather = () => {
    const date = moment().format('MMMM,DD,yyyy');

    const [place,setPlace]=useState('Coimbatore');
    const[WeatherData,setWeatherData]=useState();
    const [error,setError]=useState();
    const API_KEY="9c565e2e1968ecd1c2d91c32df0abee2";
const fetchWeatherData=async()=>{
    try{
        const response=await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}&units=metric`);
        const data= await response.json();
        console.log(data);
        if(response.ok){
            setWeatherData(data);
            setError(null);


        }else{
            setError(data.message)
            setWeatherData(null);
        }
    }catch(err){
        console.log(err);
    }

}
const handleGet =(e)=>{
    e.preventDefault();
    fetchWeatherData();
}
const getUrl=(main)=>{
    switch(main){
        case 'Clear':
            return sun;
        case 'Clouds':
            return rain;
        case 'Snow':
            return Tor;
        case 'Haze':
            return sun;
        case 'Drizzle':
            return rain;
        default:
            return sun;
    }
}
useEffect(()=>{
    fetchWeatherData();
},[])
  return (
   
<>
<section>
    <h1>WEATHER</h1>
   <div>
        <h3>{date}</h3> 
       {WeatherData ?
       <>
        <h2>{WeatherData.name} </h2>
        <img src={getUrl(WeatherData.weather[0].main)} alt="weather" />
        <h2>{WeatherData.main.temp}</h2>
        <h2>{WeatherData.weather[0].main}</h2>
       </>
       
       :<h2>{error} </h2>} 
       


       
</div>
<div>
    <input type="text"
    placeholder='Enter city here'
     onChange={(e)=>setPlace(e.target.value)
    } />
    <button onClick={handleGet}>Get</button>
</div>

</section><br />
<Link to='/age'>Need to calculate your Age?</Link></> 
 )
}

export default Weather