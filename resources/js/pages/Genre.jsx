
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const genres = [
  { name: 'Pop', image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Pop' },
  { name: 'Rock', image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Rock' },
  { name: 'Metal', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jazz' },
  { name: 'kpop', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jazz' },
  { name: 'reggae', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jazz' },
  { name: 'black', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jazz' },
  // Tambahkan genre lainnya di sini
];

const GenreContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const GenreCard = styled(Box)`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const GenreOverlay = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const GenreText = styled(Typography)`
  color: white;
  font-weight: bold;
`;

const Genre = () => {
  return (
    <GenreContainer>
      {genres.map((genre, index) => (
        <GenreCard key={index} style={{ backgroundImage: `url(${genre.image})` }}>
          <GenreOverlay>
            <GenreText variant="h6">{genre.name}</GenreText>
          </GenreOverlay>
        </GenreCard>
      ))}
    </GenreContainer>
  );
};

export default Genre;
