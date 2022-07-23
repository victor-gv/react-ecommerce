import React from 'react'
import MainPage from './components/MainPage/MainPage'
import LoginPage from './components/LoginPage/LoginPage'
import FavsPage from './components/FavsPage/FavsPage'
import ProductPage from './components/ProductPage/ProductPage'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><MainPage /><Footer /></>} />
        <Route path='/login' element={<><LoginPage /> <Footer /></>} />
        <Route path='/favs' element={<><FavsPage /> <Footer /></>} />
        <Route path='/product/:id' element={<><ProductPage /> <Footer /></>} />
      </Routes>
    </>
  )
}

export default App