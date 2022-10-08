import React from 'react'
import {Box} from '@mui/material'
import Home from './Home'
import ExerciseDetails from './ExerciseDetails';
import Navbar from './Navbar';
import {
  
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css'
import Footer from './Footer'
function App() {
  return (

      <Box width='400px' sx={{width:{x1:'1488px'}}} m='auto'>
      
           <Navbar/>
           <Routes>
             <Route path='/' exact element={<Home/>}/>
             <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
           </Routes>
    <Footer/>
      </Box>
    
  )
}

export default App