import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Router from '../../router/Index';
import Sidebar from '../home/sidebar';
import Navbar from '../home/navbar';
import Play from '../home/play';

const LayoutIndex = () => {
    const theme = useTheme();
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={3} md={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} sm={9} md={10}>
                    <Box mt={2} mb={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box mx={2}>
                                    <Router />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* <Box mt={2}>
                        <Play />
                    </Box> */}
                </Grid>
            </Grid>
        </div>
    );
}

export default LayoutIndex;
