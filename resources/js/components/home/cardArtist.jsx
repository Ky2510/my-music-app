import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const ArtistCard = ({ artist }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={'default.jpg'}
                    alt={'test'}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        coba
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        test
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ArtistCard;
