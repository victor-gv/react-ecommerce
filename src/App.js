import React from 'react'
import MainPage from './components/MainPage/MainPage'
import LoginPage from './components/LoginPage/LoginPage'
import Favs from './components/Favs/Favs'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><MainPage /><Footer /></>} />
        <Route path='/login' element={<><LoginPage /> <Footer /></>} />
        <Route path='/favs' element={<><Favs /> <Footer /></>} />
      </Routes>
    </>
  )
}

export default App