import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [toggleText, settoggleText] = useState('Enable dark mode');
  const toggle =()=>{
      if(mode === 'light')
      {
        setmode('dark');
        settoggleText('Enable light mode');
        document.body.style.backgroundColor = '#00293c';
      }
      else{
        setmode('light');
        settoggleText('Enable dark mode');
        document.body.style.backgroundColor = 'white';
      }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggle={toggle} toggleText={toggleText}/>
      
      <div className='container my-3'>
        <Routes>
            <Route exact path="/about" element={<About  mode={mode} />}> 
            </Route>
            <Route exact path="/" element={ <TextForm heading = "Enter the text to analyze" mode={mode} />}>
           
            </Route>
          </Routes>
      </div>
      </BrowserRouter>
     
    </>
    
  );
}

export default App;
