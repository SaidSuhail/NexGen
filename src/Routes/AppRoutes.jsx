import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Features/Auth/Login'
import MainStart from '../Features/Main/MainStart'

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Login/>}/>
        <Route path='/main' element={<MainStart/>}/>      </Routes>
    </div>
  )
}

export default AppRoutes
