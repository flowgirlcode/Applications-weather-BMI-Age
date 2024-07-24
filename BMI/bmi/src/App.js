import './App.css';
import Age from './Components/Age';
import Bmi from './Components/Bmi';
import Theme from './Components/Theme';
import Weather from './Components/Weather';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/age' element={<Age/>}/>
    <Route path='/bmi' element={<Bmi/>}/>
    <Route path='/weather' element={<Weather/>}/>

    </Routes>

    </Router>
    
    

    </>
  );
}

export default App;
