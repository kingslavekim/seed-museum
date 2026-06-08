import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const bannerImagesXs = [
        {src: '/banners/m_6.jpg', link: ''},
        {src: '/banners/m_1.jpg', link: ''},
        {src: '/banners/m_2.jpg', link: '/pdisplay'},
        {src: '/banners/m_3.jpg', link: '/fdisplay'},
        {src: '/banners/m_4.jpg', link: '/museum'},
        {src: '/banners/m_5.jpg', link: '/experience'},
    ];

    const bannerImagesDefault = [
        {src: '/banners/6.jpg', link: ''},
        {src: '/banners/1.jpg', link: ''},
        {src: '/banners/2.jpg', link: '/pdisplay'},
        {src: '/banners/3.jpg', link: '/fdisplay'},
        {src: '/banners/4.jpg', link: '/museum'},
        {src: '/banners/5.jpg', link: '/experience'},
    ];

    const bannerImages = isMobile ? bannerImagesXs : bannerImagesDefault;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrevious = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => prev === 0 ? bannerImages.length - 1 : prev - 1);
    }, [isAnimating, bannerImages.length]);

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => prev === bannerImages.length - 1 ? 0 : prev + 1);
    }, [isAnimating, bannerImages.length]);

    useEffect(() => {
        const interval = setInterval(handleNext, 6000);
        return () => clearInterval(interval);
    }, [handleNext]);

    useEffect(() => {
        const timeout = setTimeout(() => setIsAnimating(false), 500);
        return () => clearTimeout(timeout);
    }, [currentIndex]);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 300, sm: 420, md: 520, lg: 600 },
                overflow: 'hidden',
                bgcolor: '#000',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: `${bannerImages.length * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / bannerImages.length)}%)`,
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%',
                }}
            >
                {bannerImages.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            src={image.src}
                            onClick={() => image.link && navigate(image.link)}
                            alt={`배너 ${index + 1}`}
                            sx={{
                                width: '100%',
                                maxWidth: 1400,
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                cursor: image.link ? 'pointer' : 'default',
                            }}
                        />
                    </Box>
                ))}
            </Box>

            {/* 화살표 버튼 */}
            <IconButton
                onClick={handlePrevious}
                sx={{
                    position: 'absolute',
                    left: { xs: 8, md: 24 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(4px)',
                    color: '#fff',
                    width: { xs: 36, md: 48 },
                    height: { xs: 36, md: 48 },
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
                }}
            >
                <ArrowBack sx={{ fontSize: { xs: 20, md: 28 } }} />
            </IconButton>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: { xs: 8, md: 24 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(4px)',
                    color: '#fff',
                    width: { xs: 36, md: 48 },
                    height: { xs: 36, md: 48 },
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
                }}
            >
                <ArrowForward sx={{ fontSize: { xs: 20, md: 28 } }} />
            </IconButton>

            {/* 인디케이터 */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: { xs: 12, md: 24 },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                    bgcolor: 'rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: 10,
                    px: 2,
                    py: 1,
                }}
            >
                {bannerImages.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => !isAnimating && setCurrentIndex(index)}
                        sx={{
                            width: index === currentIndex ? 24 : 8,
                            height: 8,
                            borderRadius: 4,
                            bgcolor: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.4)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </Box>

            {/* 인덱스 */}
            <Typography
                sx={{
                    position: 'absolute',
                    bottom: { xs: 12, md: 24 },
                    right: { xs: 12, md: 24 },
                    bgcolor: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(4px)',
                    color: '#fff',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: '0.8rem',
                    fontWeight: 500,
                }}
            >
                {currentIndex + 1} / {bannerImages.length}
            </Typography>
        </Box>
    );
};
