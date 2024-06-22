import React from 'react'
import { useTheme } from '@mui/material/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Avatar, Box } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import Router from '../../router/Index';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const LayoutIndex = () => {
    const theme = useTheme();
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={2}>
                    <Paper
                        style={{
                            width: '100%',
                            height: "97vh",
                            position: 'sticky',
                            top: '10px',
                            zIndex: 1000,
                        }}
                    >
                        <Box py={2} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/1.jpg"
                                style={{ width: 84, height: 84 }}
                            />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={10}>
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
                    <Box style={{ marginBottom: "10px" }}>
                        <Box mt={10}>
                            <Grid container >
                                <Grid item xs={12} sm={6} md={8}>
                                    <Box mx={2}>
                                        <Router />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card sx={{ display: 'flex', flexDirection: 'column', position: "fixed" }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '370px', height: '200px' }}
                                            src="https://mui.com/static/images/cards/live-from-space.jpg"
                                            alt="Live from space album cover"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
                                            <CardContent>
                                                <Typography component="div" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Mac Miller
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                <IconButton aria-label="previous">
                                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                                </IconButton>
                                                <IconButton aria-label="play/pause">
                                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                                </IconButton>
                                                <IconButton aria-label="next">
                                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div >
    )
}

export default LayoutIndex
