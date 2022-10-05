import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';

function App() {


  return (
    <Button 
    variant="contained"
    // disabled
    onClick={() => console.log('click event')}
    >
      Hello World</Button>
  )
}

export default App
