import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';
import { Box,createTheme, styled, Stack } from '@mui/material';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { ThemeProvider } from '@emotion/react';


function App () {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}> 
      <Box bgcolor={"background.default"}>
        <Navbar/>
        <Stack 
          direction="row"
          spacing={2}
          justifyContent="space-between"
        >
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>

      </Box>
    </ThemeProvider>
  )
}

// under example of using material ue

// function App() {

//   const BlueButton = styled (Button)({backgroundColor:"red",
//   "&:hover":{
//     backgroundColor: "blue"
//   },
//   "&:disabled":{
//     backgroundColor: "gray"
//   }})

//   return (
//     <> 
//     <Button 
//     variant="contained"
//     // disabled event will not work
//     color='secondary'
//     size='small'
//     startIcon={<SettingsIcon />}
//     onClick={() => console.log('click event')}
//     >
//       Hello World</Button>
//     <Typography variant="h1" component="p">
//       iT USES H1 style BUT IT IS p 
//     </Typography>;
    
//     {/* this is how we can create custom button 
//       sx allows custom css style
//     */}
//     <Button 
//       variant='contained'
//       // disabled // disbaled css only when disabled Treu
//       sx={{
//         backgroundColor:"red",
//         "&:hover":{
//           backgroundColor: "blue"
//         },
//         "&:disabled":{
//           backgroundColor: "gray"
//         }
//       }}
//     > My unique button </Button>
//     <BlueButton> my custom button</BlueButton>
   
//     </>
//   )
// }

export default App
