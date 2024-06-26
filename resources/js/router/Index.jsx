import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import Genre from '../components/Genre'
import Notfound from '../components/Notfound'

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/genre' element={<Genre />} />
                <Route path='/*' element={<Notfound />} />
            </Routes>
        </div >
    )
}

export default Index
