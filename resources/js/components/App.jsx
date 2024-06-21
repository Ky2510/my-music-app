import React from 'react';
import { Box } from '@mui/material';
import Breadcrumbs from './home/breadscrumbs';
import Header from './layouts/header';
import Router from '../router/Index';
import { NavLink } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Header />
            <Box>
                <nav>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <NavLink to="/">Go To Home</NavLink>
                        <NavLink to="/about">Go To About</NavLink>
                        <NavLink to="/genre">Go To Genre</NavLink>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Breadcrumbs playlist={"POP"} subtitle={"Maroon 5"} title={"Memories"} />
                    </Box>
                </nav>
                <Router />
            </Box>
        </div>
    );
}

export default App;
