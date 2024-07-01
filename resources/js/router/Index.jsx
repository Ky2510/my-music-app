import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Genre from '../pages/Genre'
import Album from '../pages/Album'
import Notfound from '../pages/Notfound'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import Music from '../pages/music'

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/album' element={<Album />} />
                <Route path='/music' element={<Music />} />
                <Route path='/genre' element={<Genre />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/Register' element={<Register/>} />
                <Route path='/*' element={<Notfound />} />
            </Routes>
        </div >
    )
}

export default Index
