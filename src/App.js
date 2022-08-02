import React from 'react'
import MainPage from './components/MainPage/MainPage'
import LoginPage from './components/LoginPage/LoginPage'
import FavsPage from './components/FavsPage/FavsPage'
import ProductPage from './components/ProductPage/ProductPage'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage'
import SearchCallProvider from './context/searchContext';



function App() {
  return (
    <>
  <SearchCallProvider>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/favs' element={<FavsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path ="*" element = {<ErrorPage />} />
      </Routes>
  </SearchCallProvider>
        <Footer />
    </>
  )
}

export default App