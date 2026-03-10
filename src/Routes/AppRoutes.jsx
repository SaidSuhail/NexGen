import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Features/Auth/Login'
import MainStart from '../Features/Main/MainStart'
import Users from '../Pages/Users'
import CompanyProfile from '../Pages/Core/CompanyProfile'

function AppRoutes() {
  return (
    <div>
      <Routes>

        {/* Login — no sidebar */}
        <Route path='/' element={<Login />} />

        {/* All pages — nested under MainStart (sidebar + Outlet) */}
        <Route path='/main' element={<MainStart />}>
          <Route path='company-profile' element={<CompanyProfile />} />
          <Route path='users' element={<Users />} />
          {/* Add more routes here the same way — no leading / */}
        </Route>

      </Routes>
    </div>
  )
}

export default AppRoutes