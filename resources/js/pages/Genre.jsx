// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Button, Modal, TextField, Typography } from '@material-ui/core';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Swal from 'sweetalert2';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// const Genre = () => {
//     // Fetching Data
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/genre');
//             setData(response.data.genre);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     // Modal Create Genre
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     // Create Data
//     const [newGenre, setNewGenre] = useState('');

//     const handleInputGenre = (event) => {
//         setNewGenre(event.target.value);
//     };

//     const handleSubmitGenre = async () => {
//         if (!newGenre) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Genre name cannot be empty!',
//             });
//             return;
//         }

//         try {
//             await axios.post("http://127.0.0.1:8000/api/genre/create", { name: newGenre });
//             fetchData();
//             handleClose();
//             Swal.fire({
//                 position: "center",
//                 icon: "success",
//                 title: `Genre "${newGenre}" has been created`,
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         } catch (error) {
//             console.error('Error creating genre:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'There was an error creating the genre.',
//             });
//         }
//     };


//     // Delete Data
//     const handleDeleteGenre = async (id) => {
//         try {
//             const result = await Swal.fire({
//                 title: "Are you sure?",
//                 text: `You won't be able to revert this deletion of genre: ${id}!`,
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, delete it!"
//             });

//             if (result.isConfirmed) {
//                 await axios.delete(`http://127.0.0.1:8000/api/genre/delete/${id}`);
//                 fetchData();
//                 Swal.fire({
//                     title: "Deleted!",
//                     text: `Genre ${name} has been deleted.`,
//                     icon: "success"
//                 });
//             }
//         } catch (error) {
//             console.error('Error deleting genre:', error);
//         }
//     };

//     return (
//         <div>
//             <Button variant="contained" size='small' color='primary' onClick={handleOpen}>
//                 <Box style={{ display: "flex", flexDirection: "row", gap: 4, alignItems: "center" }}>
//                     <AddToPhotosIcon /> Add
//                 </Box>
//             </Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <Typography id="modal-modal-title" variant="h6" component="h2">
//                             Form
//                         </Typography>

//                     </Box>
//                     <Box id="modal-modal-description" sx={{ mt: 2 }}>
//                         <TextField
//                             id="outlined-basic"
//                             label="Name Genre"
//                             variant="outlined"
//                             size="small"
//                             name="name"
//                             placeholder="here..."
//                             fullWidth
//                             onChange={handleInputGenre}
//                         />
//                     </Box>
//                     <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
//                         <Button variant="contained" color="primary" onClick={handleSubmitGenre}>
//                             Submit
//                         </Button>
//                         <Button onClick={handleClose} variant="contained" color="secondary">
//                             Close
//                         </Button>
//                     </Box>
//                 </Box>
//             </Modal>
//             <Box mt={2}>
//                 {data.map((genre) => (
//                     <Card sx={{ display: 'flex', marginTop: "10px" }} key={genre.id}>
//                         <Box sx={{ display: 'flex', flexDirection: 'row', flex: '1 0 auto' }}>
//                             <CardContent sx={{ flexGrow: 1 }}>
//                                 <Typography component="div" variant="h6">
//                                     {genre.name}
//                                 </Typography>
//                             </CardContent>
//                             <Box display={'flex'} alignItems={'center'} justifyContent={"flex-end"} ml="auto" mx={2}>
//                                 <Button
//                                     variant="outlined"
//                                     color="error"
//                                     size='small'
//                                     onClick={() => handleDeleteGenre(genre.id)}
//                                 >
//                                     <Box style={{ display: "flex", flexDirection: "row", gap: 4, alignItems: "center" }}>
//                                         <DeleteIcon />
//                                     </Box>
//                                 </Button>
//                             </Box>
//                         </Box>
//                     </Card>
//                 ))}
//             </Box>
//         </div>
//     );
// };

// export default Genre;

import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const genres = [
  { name: 'Pop', image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Pop' },
  { name: 'Rock', image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Rock' },
  { name: 'Metal', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jazz' },
  { name: 'kpop', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jazz' },
  { name: 'reggae', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jazz' },
  { name: 'black', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jazz' },
  // Tambahkan genre lainnya di sini
];

const GenreContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const GenreCard = styled(Box)`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const GenreOverlay = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const GenreText = styled(Typography)`
  color: white;
  font-weight: bold;
`;

const Genre = () => {
  return (
    <GenreContainer>
      {genres.map((genre, index) => (
        <GenreCard key={index} style={{ backgroundImage: `url(${genre.image})` }}>
          <GenreOverlay>
            <GenreText variant="h6">{genre.name}</GenreText>
          </GenreOverlay>
        </GenreCard>
      ))}
    </GenreContainer>
  );
};

export default Genre;
