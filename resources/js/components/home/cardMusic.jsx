import { Box, Typography, IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LikeButton from "../button/likeButton";

const CardMusic = ({ choice_musics }) => {
  return (
    <Box 
      bgcolor='white' 
      width='80%'
      height={40} 
      p={2} 
      display='flex' 
      alignItems='center' 
      borderRadius={2} 
      boxShadow={2}
      mb={2}
      sx={{boxShadow:10,
        transition:'transform 0.15s ease-in-out','&:hover': {
        transform: 'scale(1.02)',
        boxShadow: 6,
        
        }
      }}
    >
      <img 
        src={choice_musics.musicId && choice_musics.musicId.albumId ? choice_musics.musicId.albumId.image : ''} 
        alt="Album Art" 
        style={{ width: '40px', height: '40px', marginRight: '16px', borderRadius: '4px' }} 
      />
      <Box flexGrow={1} overflow="hidden">
        <Typography variant="subtitle1" noWrap>{choice_musics.musicId ? choice_musics.musicId.title : ''}</Typography>
        <Typography variant="body2" color="textSecondary" noWrap>{choice_musics.artistId ? choice_musics.artistId.name : ''}</Typography>
      </Box>
      <Typography variant="body2" sx={{ ml: 2 }} noWrap>{choice_musics.musicId && choice_musics.musicId.albumId ? choice_musics.musicId.albumId.name : ''}</Typography>
      <IconButton sx={{ ml: 2 }}>
        <PlayArrowIcon />
      </IconButton>
      <LikeButton />
    </Box>
  );
}

export default CardMusic;
