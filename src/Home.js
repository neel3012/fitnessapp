import { Box } from '@mui/material'
import React,{useState} from 'react'
import Exercises from './Exercises'
import Herobanner from './Herobanner'
import SearchExercises from './SearchExercises'
function Home() {
  const [bodyPart,setBodyPart]=useState('all');
  console.log(bodyPart);
  const [exercises,setexercises]=useState([]);
  return (
   <Box>
    <Herobanner/>
    
    <SearchExercises setexercises={setexercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises exercises={exercises} setexercises={setexercises} bodyPart={bodyPart}/>
   </Box>
  )
}

export default Home