import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Typography variant="h4">Hello MusicApp!</Typography>
            </Box>
        </div>
    )
}

export default Header
