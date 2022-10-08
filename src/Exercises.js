import React,{useState,useEffect} from 'react'
import {Box, Pagination, Stack, Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from './utils/fetchData';
function Exercises({exercises,setexercises,bodyPart}) {
  const [currentPage,setCurrentPage]=useState(1);
  const exerciseperpage=9;
console.log(exercises)
  const indexoflastexercise=currentPage*exerciseperpage;
    const indexoffirstexercise=indexoflastexercise-exerciseperpage;
    const currentexercises=exercises.slice(indexoffirstexercise,indexoflastexercise)
    console.log(currentexercises)
  const paginate=(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800,behavior:'smooth'});
    
  }
 
  useEffect(()=>{
     const fetchexercisedata=async ()=>{
      let exercisesData=[];
      if(bodyPart==='all'){
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      }
      else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/${bodyPart}`,exerciseOptions);
      }
      setexercises(exercisesData)
     }
     fetchexercisedata();
  },[bodyPart])
  return (
    <Box id='exercises'
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px'>
        <Typography variant='h3' mb='46px'>
        Showing Results
        <br/><small style={{fontSize:'20px'}}>Click on card to view more...</small>

        </Typography>
        <Stack direction='row' sx={{gap:{lg:'100px',xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
          {currentexercises.map((exercise,index)=>(
            <ExerciseCard key={index} exercise={exercise}/>
          ))} 
           
        </Stack>
       <Stack mt='100px' alignItems='center'>
        {exercises.length>9 && (
          <Pagination color='standard' shape='rounded' count={Math.ceil(exercises.length / exerciseperpage)}
            page={currentPage} onChange={paginate} size='large'
          />
        )}
       </Stack>
    </Box>
  )
}

export default Exercises