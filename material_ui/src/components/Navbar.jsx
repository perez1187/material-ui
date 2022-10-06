import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react'
import { useState } from 'react';

// our own toolbar
const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({ theme}) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: "10px",
    width: "40%"
}))
const Icons = styled(Box)(({ theme}) => ({
    display: "none",
    gap: "20px",
    alignItems:"center",
    //backgroundColor: "white",
    // over sm show, under hide
    [theme.breakpoints.up("sm")] : {
        display: "flex"
    }
}))
const UserBox = styled(Box)(({ theme}) => ({
    display: "flex",
    gap: "20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")] : {
        display: "none"
    }
    //backgroundColor: "white",
}))


function Navbar() {

    const [open, setOpen] = useState(false)

  return (
    <AppBar
        position='sticky' //it can be stick
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
            <Search><InputBase placeholder='search...'/></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <NotificationsNoneIcon />
                </Badge>
                <Avatar 
                    sx={{ width: 30, height: 30 }}
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    onClick= {e=> setOpen(true)} // open menu when clicked
                />
            </Icons>
            <UserBox onClick= {e=> setOpen(true)}> 
                <Avatar 
                    sx={{ width: 30, height: 30 }}
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    
                />
                <Typography variant='span'>John</Typography>
            </UserBox>
        </StyledToolbar>

        {/* Autocomplete for searching menu */}
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
          open={open} //open is depending on state open
          onClose= {(e)=>setOpen(false)} // when you clck somewhere, when close
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
  )
}

export default Navbar