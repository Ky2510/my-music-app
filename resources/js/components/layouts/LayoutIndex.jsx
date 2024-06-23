import React from 'react'
import { useTheme } from '@mui/material/styles';
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import Router from '../../router/Index';
import Sidebar from '../home/sidebar';
import Navbar from '../home/navbar';
import Play from '../home/play';


const LayoutIndex = () => {
    const theme = useTheme();
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} sm={6} md={10}>
                    <Navbar />
                    <Box style={{ marginBottom: "10px" }}>
                        <Box mt={10}>
                            <Grid container >
                                <Grid item xs={12} sm={6} md={8}>
                                    <Box mx={2}>
                                        <Router />
                                    </Box>
                                </Grid>
                                <Play />
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div >
    )
}

export default LayoutIndex
