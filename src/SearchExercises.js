import { Box,Button,Stack,Typography,TextField } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { exerciseOptions, fetchData } from './utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar'
function SearchExercises({setexercises,bodyPart,setBodyPart}) {
       const [search,setsearch]=useState('');
       
    
       const [bodypartdata,setbodypartdata]=useState([]);
        useEffect(()=>{
              const fetchexedata=async()=>{
                     const body=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,exerciseOptions);
                     setbodypartdata(['all',...body]);
                     // console.log(['all',...body])
              }
              fetchexedata();
        },[])
       const submitbtn=async(e)=>{
                     e.preventDefault();
                     // console.log(search) 
                     if(search){
                            const exercisedata=await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions);
                           console.log(exercisedata)
                            const searchedExercises=exercisedata.filter((exercise)=>exercise.name.toLowerCase().includes(search) ||
                            exercise.bodyPart.toLowerCase().includes(search) ||
                            exercise.equipment.toLowerCase().includes(search) ||
                            exercise.target.toLowerCase().includes(search)
                            ); 
                            setsearch('');
                              setexercises(searchedExercises)
                             
                     }         
                     
                    
       }
       
       
  return (
   <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
       <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'},textAlign:'center'}} mb='50px'>
              Awesome Exercises You<br/> Should Know
       </Typography>
       <Box position='relative' mb='72px'>
              <TextField sx={{input:{outline:'none',fontWeight:'700px',border:'none',background:'#fff',borderRadius:'40px'},
              borderRadius:'4px',width:{lg:'800px',xs:'350px'}}} 
              height='76px' value={search} onChange={(e)=>setsearch(e.target.value.toLowerCase())} placeholder='Search Exercises' type='text'/>

              <Button className='search-btn'
                  sx={{
                     bgcolor:'#ff2625',
                     color:'#fff',
                     textTransform:'none',
                     width:{lg:'175px',xs:'80px'},
                     fontSize:{lg:'20px',xs:'14px'},
                     height:'56px',
                     position:'absolute',
                     right:'0'

                  }}
                  type='submit'
                  onClick={submitbtn}
              >
              Search

              </Button>


      
       </Box>

       
              <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                  <HorizontalScrollbar data={bodypartdata} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
              </Box>
       


   </Stack>
  )
}

export default SearchExercises