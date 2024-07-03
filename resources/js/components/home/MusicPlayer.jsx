import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Box,
    Slider,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ReactPlayer from "react-player";

export const MusicPlayer = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
    };

    return (
        <Card
            sx={{
                width: "35%",
                marginBottom: 2,
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.15s ease-in-out",
                "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                },
            }}
        >
            <CardMedia
                component="img"
                height="100px"
                image={song.imageUrl}
                alt={song.title}
                sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                }}
            />
            <CardContent sx={{ paddingBottom: "16px !important" }}>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 600 }}
                >
                    {song.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 1 }}
                >
                    {song.artist}
                </Typography>
                <Box display="flex" alignItems="center">
                    <IconButton
                        onClick={togglePlay}
                        sx={{ color: "#1DB954", padding: 1 }}
                    >
                        {isPlaying ? (
                            <PauseIcon fontSize="large" />
                        ) : (
                            <PlayArrowIcon fontSize="large" />
                        )}
                    </IconButton>
                    <ReactPlayer
                        url={song.mp4Url}
                        playing={isPlaying}
                        volume={volume}
                        width="0"
                        height="0"
                        config={{
                            file: {
                                attributes: {
                                    controlsList: "nodownload",
                                },
                            },
                        }}
                    />
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                    >
                        Volume
                    </Typography>
                    <Slider
                        value={volume}
                        onChange={handleVolumeChange}
                        aria-labelledby="continuous-slider"
                        sx={{ color: "#1DB954" }}
                        step={0.01}
                        min={0}
                        max={1}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};
