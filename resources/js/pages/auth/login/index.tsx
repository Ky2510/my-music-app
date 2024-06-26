import { Box, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import { useAppDispatch } from "../../store";
// import { getProfileAsync, loginAsync } from '../../store/async/auth';

const Login: React.FC = () => {
    const navigate = useNavigate();
    // const dispatch = useAppDispatch();

    const [formInput, setFormInput] = useState({
        username: "",
        password: "",
    });

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // const token = (await dispatch(loginAsync(formInput))).payload;
            // await dispatch(getProfileAsync(token));
            navigate('/');
        } catch (error) {
            window.alert("Invalid username or password");
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
            <form onSubmit={handleLogin}>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    padding={4}
                    bgcolor="#282828"
                    borderRadius={1}
                    boxShadow={3}
                >
                    <MusicNoteIcon sx={{ color: '#1DB954', fontSize: 40, mb: 2 }} />
                    <Typography sx={{ color: 'white', fontSize: 25, fontWeight: 600, mb: 3 }}>
                        Log in to Melodify
                    </Typography>
                    <TextField
                        label="Email or Username"
                        type='text'
                        variant="filled"
                        fullWidth
                        sx={{
                            input: { color: 'white' },
                            label: { color: 'grey' },
                            backgroundColor: '#333',
                            borderRadius: 1,
                            mb: 2,
                        }}
                        value={formInput.username}
                        onChange={(e) =>
                            setFormInput({ ...formInput, username: e.target.value })
                        }
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="filled"
                        fullWidth
                        sx={{
                            input: { color: 'white' },
                            label: { color: 'grey' },
                            backgroundColor: '#333',
                            borderRadius: 1,
                            mb: 2,
                        }}
                        value={formInput.password}
                        onChange={(e) =>
                            setFormInput({ ...formInput, password: e.target.value })
                        }
                    />
                    <Typography
                        color="white"
                        fontWeight="bold"
                        fontSize={11}
                        display="flex"
                        justifyContent="flex-end"
                        fontStyle="italic"
                        width="100%"
                        mb={2}
                    >
                        Forgot Password?
                    </Typography>
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
                        Login
                    </button>
                    <Typography color="white" mt={1}>
                        Don't have an account?{' '}
                        <Link to='/register' style={{ color: "#1DB954" }}>
                            Sign up for Melodify
                        </Link>
                    </Typography>
                </Box>
            </form>
        </Box>
    );
};

export default Login;
