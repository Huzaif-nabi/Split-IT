import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<LoginPage />} />
    </Routes>
  )
}

export default App