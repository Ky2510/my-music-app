import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import Genre from '../components/Genre'
import Album from '../components/Album'
import Notfound from '../components/Notfound'

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/album' element={<Album />} />
                <Route path='/genre' element={<Genre />} />
                <Route path='/*' element={<Notfound />} />
            </Routes>
        </div >
    )
}

export default Index
