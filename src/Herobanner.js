import React from 'react'
import {Box, Typography,Button} from '@mui/material'
import Herobannerimg from './assets/images/fitu.jpg'
function Herobanner() {
  return (
    <Box sx={{
       mt:{lg:'212px',xs:'70px'},
       ml:{sm:'50px'}
    }} position='relative' p='20px'>
    <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
       Lambton's Fitness Club
    </Typography>

    <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mb='23px' mt='30px'>
       Sweat, Smile, <br/> and Repeat
    </Typography>

    <Typography fontSize='22px' lineHeight='35px' mb={4}>
      Checkout the most effective exercises
    </Typography>
    <Button sx={{backgroundColor:'#ff2625',padding:'10px'}} href='#exercises' variant='contained' color='error'>Explore Exercises</Button>
    <Typography fontSize='200px' fontWeight={600} color='#ff2625' sx={{opacity:0.1,display:{lg:'block',xs:'none'}}}>Fitness</Typography>
<img src={Herobannerimg} alt='banner' className='hero-banner-img'/>    
</Box>
  )
}

export default Herobanner