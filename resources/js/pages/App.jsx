import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutIndex from '../components/layouts/LayoutIndex';
import Home from './Home';
import About from './About';
import Album from './Album';
import Genre from './Genre';
import Login from './auth/login';
// import Register from './auth/register';
import Notfound from './Notfound';
import Register from './auth/register';

const App = () => {
    return (
        <Routes>
            {/* Rute untuk login dan register */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/* Rute yang menggunakan LayoutIndex */}
            <Route element={<LayoutIndex />}>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/album' element={<Album />} />
                <Route path='/genre' element={<Genre />} />
                <Route path='/*' element={<Notfound />} />
            </Route>
        </Routes>
    );
}

export default App;
