  import * as React from 'react';
  import Card from '@mui/joy/Card';
  import CardCover from '@mui/joy/CardCover';
  import CardContent from '@mui/joy/CardContent';
  import Typography from '@mui/joy/Typography';

  const CardChoiceMusic = ({ choiceMusic }) => {
        
    return (
      <Card sx={{ minHeight: '200px', width: 200, marginBottom: 2 , }}>
        <CardCover>
          <img
            src={choiceMusic.musicId.albumId.image}
            srcSet={`${choiceMusic.name}&dpr=2 2x`}
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 300px)',
          }}
        />
        <CardContent sx={{ position: 'absolute', bottom: 0, width: '100%', color: 'white' }}>
          <Typography variant="h6" color='red'>
            {choiceMusic.musicId.albumId.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  export default CardChoiceMusic;
