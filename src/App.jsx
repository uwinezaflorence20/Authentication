import { BrowserRouter as Router ,Route ,Routes, Link, Outlet } from 'react-router-dom';
import React from 'react';
import './App.css'
import Home from './components/Home'
import Head from './components/Head'
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Login from './components/Login'
import Register from './components/Register'
import Homepage from './components/Homepage';


function App() {
  

  return (
    <div>

   <Router>
            <Routes>
            <Route path="/" element= {<Outlet/>}>
            <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            </Route>
             <Route path="/" element= {<Homepage/>}>
             <Route path="/Home" element={<Home/>}/>
            <Route path="/Aboutme" element={<Aboutme/>}/>
            <Route path="/Contactme" element={<Contactme/>}/>
            </Route> 
        </Routes>
    </Router>  
  

    </div>
  )
}

export default App
