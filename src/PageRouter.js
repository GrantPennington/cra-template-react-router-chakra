import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function PageRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    )
}

export default PageRouter