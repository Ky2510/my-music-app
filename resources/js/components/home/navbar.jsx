import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Paper style={{ height: "10vh", position: 'sticky', top: 0, zIndex: 1000, marginLeft: 15 }} >
                <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 20
                            }}
                            mt={2}
                        >
                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <Typography variant="h6" color="initial">
                                    <Box>
                                        Home
                                    </Box>
                                </Typography>
                            </NavLink>
                            <NavLink to="/about" style={{ textDecoration: 'none' }}>
                                <Typography variant="h6" color="initial">
                                    <Box>
                                        About
                                    </Box>
                                </Typography>
                            </NavLink>
                            <NavLink to="/genre" style={{ textDecoration: 'none' }}>
                                <Typography variant="h6" color="initial">
                                    <Box>
                                        Genre
                                    </Box>
                                </Typography>
                            </NavLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                paddingRight: 20,
                                alignItems: 'center',
                                height: '57%'
                            }}
                            mt={2}
                        >
                            Name User
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Navbar
