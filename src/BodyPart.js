import { Stack,Typography } from '@mui/material'
import React from 'react'
import Icon from './assets/icons/gym.png'
const BodyPart=({item,bodyPart,setBodyPart})=> {
       const clickedbt=()=>{
              setBodyPart(item)
              window.scrollTo({top:1800,left:100,behavior:'smooth'})
       }
  return (
   <Stack type='button' onClick={clickedbt} alignItems='center' justifyContent='center' className='bodyPart-card'
        sx={bodyPart===item ? {borderTop:'4px solid #ff2625',backgroundColor:'#fff',
        borderBottomLeftRadius:'20px',width:'270px',height:'280px',cursor:'pointer',gap:'47px'}:{
              background:'#fff', borderBottomLeftRadius:'20px',width:'270px',height:'280px',cursor:'pointer',gap:'47px'
              
        }}>
       <img src={Icon} alt='img' style={{width:'40px',height:'40px'}}></img>
       <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
   </Stack>
  )
}

export default BodyPart;