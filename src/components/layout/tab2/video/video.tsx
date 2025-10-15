import {Typography, Stack, Box, Breadcrumbs, Divider, Link, Card, CardContent} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import YouTube from 'react-youtube';

import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

interface VideoItem {
    id: string;
    title: string;
    description: string;
    videoId: string;
}

const Video = () => {
    const navigate = useNavigate();

    const videos: VideoItem[] = [
        {
            id: '1',
            title: '장미 박물관 소개',
            description: '장미 박물관의 전반적인 소개 영상입니다.',
            videoId: '4LYZ4tkoPys'
        },
        {
            id: '2',
            title: '고대 장미의 역사',
            description: '고대 장미의 역사와 의미를 소개하는 영상입니다.',
            videoId: '5PIuDGQDvQ0'
        },
        {
            id: '3',
            title: '장미 정원 투어',
            description: '아름다운 장미 정원을 둘러보는 영상입니다.',
            videoId: 'ouSW3rgxaFE'
        },
        {
            id: '4',
            title: '장미 품종 소개',
            description: '다양한 장미 품종들을 소개하는 영상입니다.',
            videoId: '3XYYNv-7q4M'
        }
    ];


    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {navigate('/');}}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            전시
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            영상관
        </Typography>,
    ];

    const opts = {
        width: '100%',
        height: '250',
        playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
        },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{p: 2}}>
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            <Box sx={{ pt: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    영상관
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
                <Stack spacing={4}>
                    {videos.map((video) => (
                        <Card
                            key={video.id}
                            sx={{
                                width: '100%',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.01)',
                                    boxShadow: 6
                                }
                            }}
                        >
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={3}
                            >
                                <Box sx={{
                                    width: { xs: '100%', md: '60%' },
                                    position: 'relative',
                                    '& iframe': {
                                        width: '100%',
                                        height: '400px',
                                    }
                                }}>
                                    <YouTube
                                        videoId={video.videoId}
                                        opts={opts}
                                    />
                                </Box>
                                <CardContent sx={{
                                    width: { xs: '100%', md: '40%' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'start'
                                }}>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        gutterBottom
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 2
                                        }}
                                    >
                                        {video.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {video.description}
                                    </Typography>
                                </CardContent>
                            </Stack>
                        </Card>
                    ))}
                </Stack>

            </Box>
        </Box>
    );
}

export default Video;
