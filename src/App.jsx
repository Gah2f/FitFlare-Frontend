import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Home from './components/Home'
import Instructors from './pages/Instructors/Instructors'
import EachInstructor from './pages/Instructors/EachInstructor'
import Classes from './pages/Classes/Classes'
import EachClass from './pages/Classes/EachClass'
import Subsribe from './pages/Home/Subscribe';
import ScrollToTop from './hooks/TopNavigator'
import Login from './pages/Log/Login'
import SignUp from './pages/Log/SignUp'

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Nav/>
        <Routes>
            <Route path='/' element={< Home/>} />
            <Route path='/instructors' element={<Instructors/>}/>
            <Route path='/instructors/:id' element={<EachInstructor/>}/>
            <Route path='/classes' element={<Classes/>}/>
            <Route path='/classes/:id' element={<EachClass/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          
        </Routes>
        <Subsribe/>
        <Footer/>
    </div>
  )
}

export default App