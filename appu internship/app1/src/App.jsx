import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Reg from './components/Reg'
import TableData from './components/Tabledata'
import CardData from './components/CardData'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/r' element={<Reg/>}/>
        <Route path='/t' element={<TableData/>}/>
        <Route path='/c' element={<CardData/>}/>
        <Route path='/s' element={<Statebasics/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
