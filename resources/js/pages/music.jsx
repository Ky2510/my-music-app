import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import axios from 'axios';
import CardMusic from "../components/home/cardMusic";

const Music = () => {
  const [musicData, setMusicData] = useState([]);

  const fetchMusicData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/choice-music');
      setMusicData(response.data.choice_musics); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMusicData();
  }, []);

  return (
    <Box>
      <Box pl={4}>
        {musicData.map((music, index) => (
          <CardMusic 
            key={index} 
            choice_musics={music} 
          />
        ))}
      </Box>
    </Box>
  );
}

export default Music;
