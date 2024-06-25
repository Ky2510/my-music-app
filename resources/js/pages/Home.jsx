import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardArtist from '../components/home/cardArtist';
import Navbar from '../components/home/navbar';
import { Typography } from '@mui/material';
import axios from 'axios';
import CardChoiceMusic from '../components/home/cardCohiceMusic';

const Home = () => {
  const [data, setData] = useState([]);
  const [choiceMusic, setChoiceMusic] = useState([]);
  console.log(choiceMusic)

  

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:8000/api/artist');
  //     setData(response.data.artist); 
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  const fetchDataChoiceMusic = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/choice-music');
      setChoiceMusic(response.data.choice_musics); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
      // fetchData();
    fetchDataChoiceMusic();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <Box sx={{ width: '100%' }}>
      <Navbar />
      <Typography fontSize={20} fontWeight={'bold'} marginLeft={'2%'}>
        Billboard Topchart
      </Typography>
      <Box marginLeft={'2%'} marginTop={2} width={'98%'}>
        <Slider {...settings}>
          {choiceMusic.map((choice_musics, index) => (
            <CardChoiceMusic key={index} choiceMusic={choice_musics} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Home;
