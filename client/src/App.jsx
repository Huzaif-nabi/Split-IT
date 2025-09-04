import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import GroupForm from './pages/GroupForm'
import GroupDetails from './pages/GroupDetails'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/groupform" element={<GroupForm />}/>
         <Route path="/groups/:id" element={<GroupDetails />}/>
    </Routes>
  )
}

export default App