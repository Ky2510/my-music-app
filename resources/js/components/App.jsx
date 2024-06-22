import React from 'react';
import { Box } from '@mui/material';
import Breadcrumbs from './home/breadscrumbs';
import Header from './layouts/header';
import { NavLink } from 'react-router-dom';
import LayoutIndex from './layouts/LayoutIndex';

const App = () => {
    return (
        <div>
            {/* <Header /> */}
            <Box>
                <LayoutIndex />
            </Box>
        </div >
    );
}

export default App;
