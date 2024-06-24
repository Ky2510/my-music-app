import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const CardArtist = ({ artist }) => {
  return (
    <Card sx={{ minHeight: '200px', width: 250, marginBottom: 2 }}>
      <CardCover>
        <img
          src={artist.image}
          srcSet={`${artist.image}&dpr=2 2x`}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ position: 'absolute', bottom: 0, width: '100%', color: '#fff' }}>
        <Typography variant="h6">
          {artist.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardArtist;
