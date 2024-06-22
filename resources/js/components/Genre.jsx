import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Genre = () => {
    // Fetching Data
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/genre');
            setData(response.data.genre);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Modal Create Genre
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Create Data
    const [newGenre, setNewGenre] = useState('');

    const handleInputGenre = (event) => {
        setNewGenre(event.target.value);
    }

    const handleSubmitGenre = async () => {
        try {
            await axios.post("http://127.0.0.1:8000/api/genre/create", { name: newGenre });
            fetchData();
            handleClose();
        } catch (error) {
            console.error('Error creating genre:', error);
        }
    }

    return (
        <div>
            <Button variant="contained" size='small' color='primary' onClick={handleOpen}>
                <Box style={{ display: "flex", flexDirection: "row", gap: 4, alignItems: "center" }}>
                    <AddToPhotosIcon /> Add
                </Box>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Form
                        </Typography>
                    </Box>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            id="outlined-basic"
                            label="Name Genre"
                            variant="outlined"
                            size="small"
                            name="name"
                            placeholder="here..."
                            fullWidth
                            value={newGenre}
                            onChange={handleInputGenre}
                        />
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                        <Button onClick={handleClose} variant="contained" size='small' color="secondary">
                            Close
                        </Button>
                        <Button variant="contained" size='small' color="primary" onClick={handleSubmitGenre}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Modal>
            {data.map((genre, index) => (
                // <li key={index}>{genre.name}</li>
                <Box>
                    <Card sx={{ display: 'flex', marginTop: "10px" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
                            <CardContent>
                                <Typography component="div" variant="h6">
                                    Live From Space
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mac Miller
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image="https://mui.com/static/images/cards/live-from-space.jpg"
                            alt="Live from space album cover"
                        />
                    </Card>
                </Box>
            ))}
            {/*
            <ul>
                {data.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                ))}
            */}
        </div>
    );
}

export default Genre;
