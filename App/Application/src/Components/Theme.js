import React, { useState } from 'react'

const Theme = () => {
    const [isDark,setDark]=useState(false);
   
    const handleTheme =()=>{
        setDark((isDark) =>!isDark)
    }
const ThemeStyle={
    color:isDark?'white':'black',
    background:isDark?'black':'white'
}
      return (
   <>
   <div style={{background:'pink'}}> 
   <h1>Theme Changing</h1>
    <p style={ThemeStyle}>Hello</p>
    <button onClick={handleTheme}>change theme</button>
  
   </div>
   </>

  )
}

export default Theme