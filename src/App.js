import React from 'react'
import MainPage from './components/MainPage/MainPage'
import LoginPage from './components/Login/LoginPage'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App