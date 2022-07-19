import React from 'react'
import MainPage from './components/MainPage/MainPage'
import LoginPage from './components/LoginPage/LoginPage'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><MainPage /><Footer /></>} />
        <Route path='/login' element={<><LoginPage /> <Footer /></>} />
      </Routes>
    </>
  )
}

export default App