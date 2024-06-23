import { Box, Grid } from '@material-ui/core'
import React from 'react'
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const Play = () => {
    const theme = useTheme();
    return (
        <div>
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
        </div>
    )
}

export default Play
