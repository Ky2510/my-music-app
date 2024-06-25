import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Import the music icon

const Register = () => {
    const navigate = useNavigate();

    const [formRegister, setFormRegister] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // await API.post("register", formRegister);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="#191414"
        >
            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    padding={4}
                    bgcolor="#282828"
                    borderRadius={1}
                    boxShadow={3}
                >
                    <MusicNoteIcon sx={{ color: 'white', fontSize: 40, mb: 2 }} /> {/* Music icon */}
                    <Typography sx={{ color: 'white', fontSize: 25, fontWeight: 600, mb: 3 }}>
                        Sign up to start listening
                    </Typography>
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        variant="filled"
                        fullWidth
                        sx={{
                            input: { color: 'white' },
                            label: { color: 'grey' },
                            backgroundColor: '#333',
                            borderRadius: 1,
                            mb: 2,
                        }}
                        value={formRegister.email}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Username"
                        type="text"
                        name="username"
                        variant="filled"
                        fullWidth
                        sx={{
                            input: { color: 'white' },
                            label: { color: 'grey' },
                            backgroundColor: '#333',
                            borderRadius: 1,
                            mb: 2,
                        }}
                        value={formRegister.username}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        variant="filled"
                        fullWidth
                        sx={{
                            input: { color: 'white' },
                            label: { color: 'grey' },
                            backgroundColor: '#333',
                            borderRadius: 1,
                            mb: 2,
                        }}
                        value={formRegister.password}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#1DB954',
                            color: 'white',
                            width: '100%',
                            height: 40,
                            borderRadius: '20px',
                            border: 'none',
                            fontSize: 16,
                            fontWeight: 600,
                            cursor: 'pointer',
                            marginBottom: '16px'
                        }}
                    >
                        Sign Up
                    </button>
                    <Typography color="white" mt={1}>
                        Already have an account?{' '}
                        <Link to='/login' style={{ color: "#1DB954" }}>
                            Log in to Melodify
                        </Link>
                    </Typography>
                </Box>
            </form>
        </Box>
    );
};

export default Register;
