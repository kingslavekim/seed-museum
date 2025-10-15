import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';

export const Banner = () => {
    const bannerImages = [
        '/banners/banner1.png',
        '/banners/banner2.png',
        '/banners/banner3.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                height: { xs: '200px', sm: '300px', md: '600px' },
                overflow: 'hidden',
                mb: 2,
            }}
        >
            <Box
                component='img'
                src={bannerImages[currentIndex]}
                alt={`Banner ${currentIndex + 1}`}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                    objectPosition: 'center',
                    transition: 'transform 0.5s ease-in-out',
                }}
            />

            <IconButton
                onClick={handlePrevious}
                sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255, 255, 255, 0.6)',
                    '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.8)',
                    },
                }}
            >
                <ArrowBack />
            </IconButton>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255, 255, 255, 0.6)',
                    '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.8)',
                    },
                }}
            >
                <ArrowForward />
            </IconButton>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                }}
            >
                {bannerImages.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: index === currentIndex
                                ? 'primary.main'
                                : 'rgba(255, 255, 255, 0.6)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.2)',
                            },
                        }}
                    />
                ))}
            </Box>

            <Typography
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: 1,
                }}
            >
                {currentIndex + 1} / {bannerImages.length}
            </Typography>
        </Box>
    );
};