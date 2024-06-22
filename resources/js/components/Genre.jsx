import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Box, Button, Modal, TextField, Typography } from '@material-ui/core';

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
            <h1>Genre </h1>
            <Button variant="contained" onClick={handleOpen}>Add Genre</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Form
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            id="outlined-basic"
                            label="Name Genre"
                            variant="outlined"
                            size="small"
                            name='name'
                            placeholder='here...'
                            fullWidth
                            value={newGenre}
                            onChange={handleInputGenre}
                        />
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" color="primary" onClick={handleSubmitGenre}>Submit</Button>
                    </Box>
                </Box>
            </Modal>
            <ul>
                {data.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Genre;
