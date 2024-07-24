import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Bmi.css'
const Bmi = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();
    const [bmiClass, setBmiClass] = useState();
    const [error, setError] = useState();

    function handleSubmit(e) {
        e.preventDefault()
        if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
            setError("Invalid input");
        } else if (height === '' || weight === '') {
            setError("All feilds are required");
        }
        else {
            setError();
            const calci = weight / (height * height);
            setBmi(calci.toFixed(1));
            if (calci < 18.5) {
                setBmiClass("Underweight")
            } else if (calci >= 18.5 && calci <= 24.9) {
                setBmiClass("Normal");
            } else if (calci >= 25 && calci <= 29.9) {
                setBmiClass("Overweight")
            } else if (calci > 30) {
                setBmiClass("Obesity")
            }
        }
    }
    return (
        <>
            <div><h1>BMI CALCULATOR</h1></div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="weight">WEIGHT</label>
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    <label >HEIGHT(in meters)</label>
                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button > Submit</button>
                    <button onClick={() => window.location.reload()}>Reload</button>
               
                <h4>Your BMI:{bmi}</h4>
                {bmiClass &&  <p style={{color:'purple'}}>{bmiClass}</p>
            }
                </form>
            </div><br />

            <Link to='/weather'>Want to Know the Weather ?</Link>
        </>
    )
}

export default Bmi