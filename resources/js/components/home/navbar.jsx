import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  maxWidth: '400px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const Navbar = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
        <Toolbar>
          <Search sx={{borderRadius:10 ,border: '1px solid white',}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Searh For song "
              inputProps={{ 'aria-label': 'search' }}
            />
            {searchValue && (
              <IconButton
                size="small"
                aria-label="clear search"
                onClick={handleClearSearch}
                sx={{
                  position: 'absolute',
                  right: 0,
                  padding: 0,
                  height: '100%',
                  display: 'flex',
                  
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ClearIcon />
              </IconButton>
            )}
          </Search>
        </Toolbar>
      
    </Box>
  );
};

export default Navbar;
