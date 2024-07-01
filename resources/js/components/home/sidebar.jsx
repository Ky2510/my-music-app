import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Drawer,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CategoryIcon from '@mui/icons-material/Category';
import AlbumIcon from '@mui/icons-material/Album';
import PersonIcon from '@mui/icons-material/Person'; 
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
  };
  const drawerContent = (
    <Box
      sx={{
        
        height: '100%',
        backgroundColor: '#2d2d2d',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Box py={2} display="flex" justifyContent="center">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 84, height: 84 }}
          />
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column" color="white">
          <Typography variant="h6" sx={{ color: 'white' }}>Remy Sharp</Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>remy.sharp@example.com</Typography>
        </Box>
        <List>
          <ListItem button component="a" href="/home">
            <ListItemIcon sx={{ color: 'white' }}><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button component="a" href="/music">
            <ListItemIcon sx={{ color: 'white' }}><MusicNoteIcon /></ListItemIcon>
            <ListItemText primary="Music" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button component="a" href="/genre">
            <ListItemIcon sx={{ color: 'white' }}><CategoryIcon /></ListItemIcon>
            <ListItemText primary="Genre" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button component="a" href="/album-artist">
            <ListItemIcon sx={{ color: 'white' }}><AlbumIcon /></ListItemIcon>
            <ListItemText primary="Album" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button component="a" href="/album-artist">
            <ListItemIcon sx={{ color: 'white' }}><PersonIcon /></ListItemIcon>
            <ListItemText primary="Artist" sx={{ color: 'white' }} />
          </ListItem>
        </List>
      </Box>
      <Box pb={2} textAlign="center">
          <ListItem button onClick={handleLogout}>
              <ListItemIcon sx={{ color: 'white' }}><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary="Logout" sx={{ color: 'white' }} />
          </ListItem>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              '& .MuiDrawer-paper': { boxSizing: 'border-box',  },
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Box
          component={Paper}
          sx={{
            width:229,
            height: '100vh',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
            backgroundColor: '#2d2d2d',
            padding: 2,
          }}
        >
          {drawerContent}
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
