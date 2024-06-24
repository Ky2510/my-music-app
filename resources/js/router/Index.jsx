import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Genre from '../pages/Genre'
import Notfound from '../pages/Notfound'

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/genre' element={<Genre />} />
                <Route path='/*' element={<Notfound />} />
            </Routes>
        </div >
    )
}

export default Index
