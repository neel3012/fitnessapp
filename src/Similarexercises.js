import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ExerciseCard from './ExerciseCard'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
// import Loader from './Loader'
function Similarexercises({targeted,equip}) {
  console.log(targeted)
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'},p:'20px'}} >
<Typography variant='h3' mb='33px'>
  Exercise that target the same muscle group.
</Typography>
<Stack direction='row' sx={{p:'2',position:'relative'}}>
  {/* {targeted.lenght ? targeted.map((item)=>(
      <ExerciseCard key={item.id} exercise={item}/>
    )): (<Loader/>)} */}
   {targeted.slice(0,3).map((item)=>(<ExerciseCard exercise={item} gap/>))}
</Stack>



<Typography variant='h3' mb='33px' mt='100px'>
  Exercises by similar equipments
</Typography>
<Stack direction='row' sx={{p:'2',position:'relative'}}>
  {/* {targeted.lenght ? targeted.map((item)=>(
      <ExerciseCard key={item.id} exercise={item}/>
    )): (<Loader/>)} */}
   {equip.slice(5,8).map((item)=>(<ExerciseCard exercise={item} gap/>))}
</Stack>
    </Box>
  )
}

export default Similarexercises