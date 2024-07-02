import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MusicNoteIcon from '@mui/icons-material/MusicNote'; 
import { useForm } from 'react-hook-form';
import axios from "axios";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register', data);
            console.log(response.data.register);

            
            navigate("/login");
        } catch (error) {
            console.error("Error:", error);
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        {...register("name", { required: true })}
                        label="Fullname"
                        type="text"
                        name="name"
                        variant="filled"
                        fullWidth
                        sx={{
                            input: { color: 'white' },
                            label: { color: 'grey' },
                            backgroundColor: '#333',
                            borderRadius: 1,
                            mb: 2,
                        }}
                    />
                    {errors.name && <span>This field is required</span>}

                    <TextField
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
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
                    />
                    {errors.email && <span>This field is required and must be a valid email</span>}

                    <TextField
                        {...register("password", { required: true, minLength: 8 })}
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
                    />
                    {errors.password && <span>This field is required and must be at least 8 characters long</span>}

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
