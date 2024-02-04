import { useState } from 'react'
import './App.css'
import AboutME from './conponents/AboutMe'
import Header from './conponents/Header'
import Hobbies from './conponents/Hobbies'
import Languages from './conponents/Languages'
import Photos from './conponents/Photo'

function App() {
  

  return (
    <>
     <Header/>
     <AboutME/>
     <Languages/>
     <Hobbies/>
     <Photos/>
    </>
  )
}

export default App
