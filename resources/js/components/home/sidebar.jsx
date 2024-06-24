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
import PersonIcon from '@mui/icons-material/Person'; // Icon for artist
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
            }}
          >
            <Box
              sx={{
                width: 250,
                height: '100%',
                backgroundColor: '#f5f5f5',
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
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Typography variant="h6">Remy Sharp</Typography>
                  <Typography variant="body2">remy.sharp@example.com</Typography>
                </Box>
                <List>
                  <ListItem button component="a" href="/home">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button component="a" href="/music">
                    <ListItemIcon><MusicNoteIcon /></ListItemIcon>
                    <ListItemText primary="Music" />
                  </ListItem>
                  <ListItem button component="a" href="/genre">
                    <ListItemIcon><CategoryIcon /></ListItemIcon>
                    <ListItemText primary="Genre" />
                  </ListItem>
                  <ListItem button component="a" href="/album-artist">
                    <ListItemIcon><AlbumIcon /></ListItemIcon>
                    <ListItemText primary="Album" />
                  </ListItem>
                  <ListItem button component="a" href="/album-artist">
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Artist" />
                  </ListItem>
                </List>
              </Box>
              <Box pb={2} textAlign="center">
                <ListItem button onClick={() => console.log("Logout clicked")}>
                  <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </Box>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box
          component={Paper}
          sx={{
            width: 300,
            height: '100vh',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: '#f5f5f5',
            padding: 2,
          }}
        >
          <Box
            sx={{
              height: '100%',
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
              <Box display="flex" alignItems="center" flexDirection="column">
                <Typography variant="h6">Remy Sharp</Typography>
                <Typography variant="body2">remy.sharp@example.com</Typography>
              </Box>
              <List>
                <ListItem button component="a" href="/home">
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="/music">
                  <ListItemIcon><MusicNoteIcon /></ListItemIcon>
                  <ListItemText primary="Music" />
                </ListItem>
                <ListItem button component="a" href="/genre">
                  <ListItemIcon><CategoryIcon /></ListItemIcon>
                  <ListItemText primary="Genre" />
                </ListItem>
                <ListItem button component="a" href="/album-artist">
                  <ListItemIcon><AlbumIcon /></ListItemIcon>
                  <ListItemText primary="Album" />
                </ListItem>
                <ListItem button component="a" href="/album-artist">
                  <ListItemIcon><PersonIcon /></ListItemIcon>
                  <ListItemText primary="Artist" />
                </ListItem>
              </List>
            </Box>
            <Box pb={2} textAlign="center">
              <ListItem button onClick={() => console.log("Logout clicked")}>
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
