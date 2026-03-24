import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Features/Auth/Login'
import MainStart from '../Features/Main/MainStart'
import Users from '../Pages/Users'
import CompanyProfile from '../Pages/Core/CompanyProfile'
import Branch from '../Pages/Core/Branch'
import LandingPage from '../Pages/Core/LandingPage'

function AppRoutes() {
  return (
    <div>
      <Routes>

        {/* Login — no sidebar */}
        <Route path='/' element={<Login />} />

        {/* All pages — nested under MainStart (sidebar + Outlet) */}
        <Route path='/main' element={<MainStart />}>
          <Route index element={<LandingPage />} />
          <Route path='company-profile' element={<CompanyProfile />} />
          <Route path='users' element={<Users />} />
          <Route path='branches' element={<Branch />} />
          {/* Add more routes here the same way — no leading / */}
        </Route>

      </Routes>
    </div>
  )
}

export default AppRoutes