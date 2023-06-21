import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Status404 from '../pages/errors/404'

function AppRoutes() {
    return (
            <Routes>
                <Route path="*" element={<Status404/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
    )
}

export default AppRoutes
