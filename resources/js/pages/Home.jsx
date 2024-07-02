import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/home/navbar';
import { Typography } from '@mui/material';
import Youtube from 'react-youtube';
import axios from 'axios';
// import CardChoiceMusic from '../components/home/cardChoiceMusic';
// import MusicPlayer from '../components/home/play'; // Updated import
import CardChoiceMusic from '../components/home/cardCohiceMusic'
import Play from '../components/home/play'

const Home = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [choiceMusic, setChoiceMusic] = useState([]);

  const fetchDataChoiceMusic = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/choice-music');
      setChoiceMusic(response.data.choice_musics); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataChoiceMusic();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 104,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          initialSlideWidth: 200,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 0.83,
          slidesToScroll: 2,
          initialSlide: 1,
          initialSlideWidth: 240,
        },
      },
    ],
    variableWidth: false,
    centerMode: true,
    centerPadding: '0px',
    initialSlideWidth: 240, 
  };

  const song = {
  "title": "Bob Marley - Sample Song",
  "artist": "Bob Marley",
  "imageUrl": "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
  "mp4Url": "https://www.youtube.com/watch?v=1ti2YCFgCoI"

  };

  return (
    <Box sx={{ width: '99%' }}>
      <Box sx={{ marginTop: -2, marginBottom: 0, padding: 0 }}>
        <Navbar />
        <Typography fontSize={20} fontWeight={'bold'} marginLeft={'5%'} color={'white'}>
          Billboard Topchart
        </Typography>
        <Box marginTop={2} marginLeft={'5%'} width={'93%'}>
          <Slider {...settings}>
            {choiceMusic.map((choice_musics, index) => (
              <CardChoiceMusic key={index} choiceMusic={choice_musics} />
            ))}
          </Slider>
        </Box>
        <Box display={'flex'} justifyContent={'end'} mt={"2%"} mr={"2%"}>
          <Play song={song} />
        </Box>

      </Box>
    </Box>
  );
};

export default Home;
