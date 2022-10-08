import { Stack } from '@mui/material'
import React from 'react'
import { Puff} from 'react-loader-spinner'
function Loader() {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
        <Puff color="black" height={80} width={80} />

    </Stack>
  )
}

export default Loader