import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar';

function App() {


  return (
    <> 
    <Button 
    variant="contained"
    // disabled event will not work
    onClick={() => console.log('click event')}
    >
      Hello World</Button>
      <Navbar />
    </>
  )
}

export default App
