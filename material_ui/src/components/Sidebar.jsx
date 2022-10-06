import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box
        flex={1} // it is 1x bigger
        padding={2}
        // display : for difrent resolution, you can create more for example tablet etc        
        sx={{
            display:{
                xs:"none",
                sm:"block"
            }
        }}
    >
        Sidebar
    </Box>
  )
}

export default Sidebar