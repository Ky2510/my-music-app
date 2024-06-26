import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
                <CardContent>
                    <Typography component="div" variant="h6">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                </CardContent>

            </Box>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                image="https://mui.com/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
            />
        </Card>
    )
}

export default Home
