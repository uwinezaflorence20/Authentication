import { BrowserRouter as Router ,Route ,Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css'
import Home from './components/Home'
import Head from './components/Head'
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';



function App() {
  

  return (
    <>
    <Router>
      <header className=''>
       
          <nav >
            <div className='bg-red-200  h-[92vh] flex flex-col rounded-lg border-2 border-blue-400 ' >
          <Head/>
          <div className='flex flex-row w-full '>
            <div className='w-[30%]  '>
            <ul className='flex flex-col font-bold gap-3  ml-8 pt-10 text-xl'>
              <li className='mb-5 text-blue-700 hover:text-pink-400'>
                <Link to="/">Home </Link>
              </li>
            
              <li className='mb-5  text-blue-700 hover:text-pink-400'>
                <Link to="/about">About Me</Link>
              </li>
              <li className='mb-5 text-blue-700  hover:text-pink-400' >
                <Link to="/contact">Contact Me</Link>
              </li>
              
            </ul>
            </div>
            
            
            <div className='w-full flex rounded-lg border-2 border-blue-400 mr-3 '>
            <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<Aboutme />} />
          <Route path='/contact' element={<Contactme/>}/>
        </Routes>
        </div>
        </div>
        </div>
          </nav>
         
      
      </header>
    </Router>
  

    </>
  )
}

export default App
