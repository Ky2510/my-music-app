import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutIndex from '../components/layouts/LayoutIndex';
import Home from './Home';
import About from './About';
import Album from './Album';
import Genre from './Genre';
import Login from './auth/login';
import Notfound from './Notfound';
import Register from './auth/register';
import { PrivateRoute, PublicRoute } from '../router/privateRoute';

const App = () => {
    const token = localStorage.getItem('token');
    const isAuthenticated = token ? true : false;
    return (
        
        <Routes>
            <Route
                path="/login"
                element={<PublicRoute element={<Login />} isAuthenticated={isAuthenticated} />}
            />
            <Route 
                path="/register" 
                element={<PublicRoute element={<Register />} isAuthenticated={isAuthenticated} />}
            />
            <Route path="/" element={<LayoutIndex />}>
                <Route 
                    path="/home" 
                    element={<PrivateRoute element={<Home />} isAuthenticated={isAuthenticated} />}
                />
                <Route 
                    path="/album" 
                    element={<PrivateRoute element={<Album />} isAuthenticated={isAuthenticated} />}
                />
                <Route 
                    path="/about" 
                    element={<PrivateRoute element={<About />} isAuthenticated={isAuthenticated} />}
                />
                <Route 
                    path="/genre" 
                    element={<PrivateRoute element={<Genre />} isAuthenticated={isAuthenticated} />}
                />
                <Route path='/*' element={<Notfound />} />
            </Route>
        </Routes>
    );
}

export default App;
