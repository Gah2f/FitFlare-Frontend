import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Home from './components/Home'
import Instructors from './pages/Instructors/Instructors'
import EachInstructor from './pages/Instructors/EachInstructor'

function App() {
  return (
    <div>
      <Nav/>
        <Routes>
            <Route path='/' element={< Home/>} />
            <Route path='/instructors' element={<Instructors/>}/>
            <Route path='/instructors/:id' element={<EachInstructor/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App