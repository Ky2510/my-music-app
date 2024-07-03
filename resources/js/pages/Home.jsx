import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/home/navbar';
import { Typography } from '@mui/material';
import axios from 'axios';
import CardChoiceMusic from '../components/home/cardCohiceMusic';
import Play from '../components/home/play';
import CardMusic from '../components/home/cardMusic';

const Home = () => {
  const [choiceMusic, setChoiceMusic] = useState([]);
  const [musicData, setMusicData] = useState([]);

  const fetchDataChoiceMusic = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/choice-music');
      setChoiceMusic(response.data.choice_musics); 
    } catch (error) {
      console.error('Error fetching choice music data:', error);
    }
  };

  const fetchMusicData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/choice-music');
      setMusicData(response.data.choice_musics); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataChoiceMusic();
    fetchMusicData();
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
    title: "Sample Song",
    artist: "Sample Artist",
    imageUrl: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    mp4Url: "https://www.sample-videos.com/video123/mp4/480/asdasdas.mp4"
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
            {choiceMusic.map((choiceMusicItem, index) => (
              <CardChoiceMusic key={index} choiceMusic={choiceMusicItem} />
            ))}
          </Slider>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} mt={"4%"} pl={7}>
          <Box display={'flex'} flexDirection={'column'} width={'100%'}>
          {musicData.map((music, index) => (
          <CardMusic 
            key={index} 
            choice_musics={music} 
          />
        ))}
          </Box>
          <Play song={song} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
