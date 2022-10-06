import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box
        flex={2} // it is 2x bigger 
        padding={2}
        // display : for difrent resolution, you can create more for example tablet etc
        sx={{
            display:{ 
                xs:"none",
                sm:"block"
            }
        }}
    >
        Rightbar
    </Box>
  )
}

export default Rightbar