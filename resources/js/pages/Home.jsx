import * as React from 'react';
import Box from '@mui/material/Box';
import CardArtist from '../components/home/cardArtist';

const artists = [
  {
    name: 'Artis 1',
    image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
  },
  {
    name: 'Artis 2',
    image: 'https://images.unsplash.com/photo-1554224155-672d2ba0cac8?auto=format&fit=crop&w=320',
  },
  {
    name: 'Artis 10',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=320',
  },
  {
    name: 'Artis 10',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=320',
  },
  {
    name: 'Artis 10',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=320',
  },
  {
    name: 'Artis 10',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=320',
  },
  {
    name: 'Artis 10',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=320',
  },
];

const Home = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap'  }}>
        {artists.map((artist, index) => (
          <CardArtist key={index} artist={artist} />
        ))}
      </Box>
    </Box>
  );
}

export default Home;
