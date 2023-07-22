import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import OngoingEvent from './components/OngoingEvent'

function App() {
  return (
    <div className='w-full flex items-center justify-center'>
      <TopNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/OngoingEvent' element={<OngoingEvent/>}/>
      </Routes>
      <BottomNav/>
    </div>
  )
}

export default App