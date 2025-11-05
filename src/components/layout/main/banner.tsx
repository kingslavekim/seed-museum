import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useState, useEffect } from 'react';

export const Banner = () => {
    const bannerImages = [
        '/banners/banner1.png',
        '/banners/banner2.png',
        '/banners/banner3.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrevious = () => {
        if (isAnimating) return; // 애니메이션 중에는 클릭 방지
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        if (isAnimating) return; // 애니메이션 중에는 클릭 방지
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 8000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        // 애니메이션 완료 후, 상태 초기화
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 500); // 이미지 변환 트랜지션 시간과 맞추기

        return () => clearTimeout(timeout);
    }, [currentIndex]);

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
            {/* 슬라이드 컨테이너 */}
            <Box
                sx={{
                    display: 'flex',
                    width: `${bannerImages.length * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / bannerImages.length)}%)`,
                    transition: 'transform 0.5s ease-in-out',
                }}
            >
                {bannerImages.map((image, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={image}
                        alt={`Banner ${index + 1}`}
                        sx={{
                            width: `${100 / bannerImages.length}%`,
                            height: { xs: '200px', sm: '300px', md: '600px' },
                            objectFit: 'fit',
                            objectPosition: 'center',
                        }}
                    />
                ))}
            </Box>

            {/* 이전 버튼 */}
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

            {/* 다음 버튼 */}
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

            {/* 하단 인디케이터 */}
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
                        onClick={() => !isAnimating && setCurrentIndex(index)}
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

            {/* 인덱스 표기 */}
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