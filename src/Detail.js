import React, { useEffect } from 'react'
import BodyPartImage from './assets/icons/body-part.png'
import TargetImage from './assets/icons/target.png'
import EquipmentImage from './assets/icons/equipment.png'
import { Button, Stack,Typography } from '@mui/material';
function Detail({exercisedetail}) {
       const {bodyPart,gifUrl,name,target,equipment}=exercisedetail;
       const extradetail=[
              {
              icon:BodyPartImage,
              name:bodyPart
              },
              {
                     icon:TargetImage,
                     name:target
              },
              {
                     icon:EquipmentImage,
                     name:equipment
              }
              
]
useEffect(()=>{
       window.scrollTo(0,0)
},[])
       
  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
       <img src={gifUrl} loading='lazy' alt={name} className='detail-image'/>
       <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
              <Typography variant='h3'>
                     {name}
              </Typography>
              <Typography variant='v6'>
                     Exercises keep you strong. {name} but is one od the best exercise to target your abs.
                     it will help you improve your mood and gain energy.
              </Typography> 
              {extradetail.map((item)=>(
                     <Stack key={item.id} direction='row' gap='24px' alignItems='center'>
                            <Button sx={{background:'#fff2db',borderRadius:'50%',width:'100px',height:'100px'}}>
                                   <img src={item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}}></img>
                                   
                            </Button>
                            <Typography textTransform='capitalize' variant='h5'>{item.name}</Typography>

                     </Stack>
              ))}
       </Stack>
    </Stack>
  )
}

export default Detail