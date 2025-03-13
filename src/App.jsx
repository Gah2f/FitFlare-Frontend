import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Home from './components/Home'
import Instructors from './pages/Instructors/Instructors'
import EachInstructor from './pages/Instructors/EachInstructor'
import Classes from './pages/Classes/Classes'

function App() {
  return (
    <div>
      <Nav/>
        <Routes>
            <Route path='/' element={< Home/>} />
            <Route path='/instructors' element={<Instructors/>}/>
            <Route path='/instructors/:id' element={<EachInstructor/>}/>
            <Route path='/classes' element={<Classes/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App