import React, { useState } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CategoryIcon from '@mui/icons-material/Category';
import AlbumIcon from '@mui/icons-material/Album';
import PersonIcon from '@mui/icons-material/Person'; 
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogin = () => {
    
    setIsLoggedIn(true);
    setShowLoginModal(false); 
  };

  const handleLogout = () => {
    
    setIsLoggedIn(false);
  };

  return (
    <Box sx={{ display: 'flex', position: 'fixed', width: '200px' }}>
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
                {isLoggedIn ? (
                  <ListItem button onClick={handleLogout}>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                ) : (
                  <ListItem button onClick={() => setShowLoginModal(true)}>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItem>
                )}
              </Box>
            </Box>
          </Drawer>

          {/* Login Modal */}
          <Dialog open={showLoginModal} onClose={() => setShowLoginModal(false)}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              <Typography variant="body1">This is where your login form will be.</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleLogin}>Login</Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <Box
          component={Paper}
          sx={{
            width: 250,
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
              width: 200,
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
              {isLoggedIn ? (
                <ListItem button onClick={handleLogout}>
                  <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              ) : (
                <ListItem button onClick={() => setShowLoginModal(false)}>
                  <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItem>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
