import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import React from 'react'

// our own toolbar
const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({ theme}) => ({
    backgroundColor: "white"
}))
function Navbar() {
  return (
    <AppBar
        position='static' //it can be stick
    >
        {/* instead of toolbar we use Styledtoolbar that we overwrite toolbar */}
        <StyledToolbar>
            <Typography 
            variant='h6'         
            sx={{
            display:{
                xs:"none",
                sm:"block"
            }
        }}>LAMA DEV</Typography> 
            <PetsIcon             
                sx={{
                display:{
                    xs:"block",
                    sm:"none"
                }}}/>
            <Search>search</Search>
        </StyledToolbar>
        </AppBar>
  )
}

export default Navbar