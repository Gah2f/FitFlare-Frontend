import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Hero from './pages/Hero'
import Gallary from './pages/Gallary'
import Popular from './pages/Popular'
import PopularTa from './pages/PopularTa'

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Nav />} />
        </Routes>
        <Hero/>
        <Gallary/>
        <Popular/>
        <PopularTa/>
    </div>
  )
}

export default App