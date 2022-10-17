import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Contact } from './Contact'
import { Home } from './Home'
import { Project } from './Project'
import { Skills } from './Skills'

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route to='/about' element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route/>
    </Routes>
    </>
  )
}
