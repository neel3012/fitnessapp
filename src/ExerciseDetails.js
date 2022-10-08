import { Box } from '@mui/system';
import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import Detail from './Detail';
import Exercisevideos from './Exercisevideos'
import Similarexercises from './Similarexercises';
import { exerciseOptions, fetchData, ytoptions } from './utils/fetchData';
function ExerciseDetails() {
  const [exercisedetail,setexercisedetail]=useState({});
  console.log(exercisedetail)
  const [ytdetail,setytdetail]=useState([]);
  const [targeted,settargeted]=useState([]);
  const [equip,setequip]=useState([]);

  const {id}=useParams();
  const url=`https://exercisedb.p.rapidapi.com`;
  const youtubesearch=`https://youtube-search-and-download.p.rapidapi.com`;
  useEffect(()=>{
     window.scrollTo({top:0,behavior:'smooth'});
      const fetchexercisedata=async ()=>{
       
        const exercisedetaildata=await fetchData(`${url}/exercises/exercise/${id}`,exerciseOptions);
        setexercisedetail(exercisedetaildata);
        console.log(exercisedetail)
        //set yt after static data
        
         
          const getytdata=await fetchData(`${youtubesearch}/search?query=${exercisedetaildata.name}`,ytoptions);
          setytdetail(getytdata.contents);
          const targetmuscles=await fetchData(`${url}/exercises/target/${exercisedetaildata.target}`,exerciseOptions);
          const euipmentdata=await fetchData(`${url}/exercises/equipment/${exercisedetaildata.equipment}`,exerciseOptions);
          settargeted(targetmuscles)
          setequip(euipmentdata)
        
      }
      fetchexercisedata();
      

  },[id])



  return (
    <Box>
      <Detail exercisedetail={exercisedetail}/>
      <Exercisevideos ytdetail={ytdetail} name={exercisedetail.name}/>
      <Similarexercises targeted={targeted} equip={equip}/>
    </Box>    
  )
}

export default ExerciseDetails