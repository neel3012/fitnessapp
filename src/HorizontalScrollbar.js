import { Box } from '@mui/system'
import React from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Typography } from '@mui/material';
import Rightarrowicon from './assets/icons/right-arrow.png'
import Leftarrowicon from './assets/icons/left-arrow.png'
function HorizontalScrollbar({data,bodyPart,setBodyPart}) {
      

       console.log(data)
       
            function RightArrow() {
  const {  scrollNext } = React.useContext(VisibilityContext);

  return (
    <Typography on Click={() => scrollNext()} className='right-arrow'>
      <img src={Rightarrowicon} alt='rightarrow'/>
    </Typography>
  );

} 
function LeftArrow() {
       const { scrollPrev } =
         React.useContext(VisibilityContext);
     
       return (
              <Typography onClick={() => scrollPrev()} className='left-arrow'>
              <img src={Leftarrowicon} alt='leftarrow'/>
            </Typography>
       );
     }
  return (
       <ScrollMenu  RightArrow={RightArrow} LeftArrow={LeftArrow}>
{data.map((card)=>(
       <Box key={card.id||card} m='0 40px' title={card.id||card} itemId={card.id||card}>
              <BodyPart item={card} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
       </Box>
))}
       </ScrollMenu>
    
  )
}

export default HorizontalScrollbar