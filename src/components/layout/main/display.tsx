import {Box, Button, Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Display = () => {
    const navigate = useNavigate();

    const displayInfo = [
        {src: '/display/1.jpg', text1: '상설전시', text2: '상설전시', text3: '', link: '/seed/pdisplay'},
        {src: '/display/2.jpg', text1: '상설전시', text2: '근대 농기구 전시', text3: '', link: '/seed/fdisplay'},
        {src: '/display/3.jpg', text1: '상설전시', text2: '박물관 속의 박물관', text3: '', link: '/seed/museum'},
        {src: '/display/5.jpg', text1: '특별전시', text2: '특별전시', text3: '', link: '/seed/sdisplay'},
        {src: '/display/4.jpg', text1: '상설전시', text2: '영상관', text3: '', link: '/seed/video'},
    ];

    return (
        <Box sx={{ mt: 5 }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: 'h4.fontSize'}}>전시</Typography>
            <Box sx={{
                mt: 2,
                display: 'flex',
                columnGap: 10,
                rowGap: 5,
                flexWrap: 'wrap',
            }}>
                {displayInfo.map((display, index) => (
                    <Stack
                        key={index}
                        direction='column'
                        spacing={2}
                        sx={{
                            alignItems: 'left',
                        }}
                    >
                        <Box
                            component='img'
                            src={display.src}
                            onClick={() => navigate(`${display.link}`)}
                            sx={{
                                width: 288,
                                height: 256,
                                objectFit: 'fill',
                                objectPosition: 'center',
                                transition: 'transform 0.5s ease-in-out',
                                cursor: 'pointer'
                            }}
                        />
                            <Stack
                                direction='row'
                                spacing={2}
                                alignItems='center'
                            >
                                <Button
                                    variant='contained'
                                    sx={{
                                        fontSize: 'body1.fontSize',
                                        p: '2px',
                                        width: 90,
                                        backgroundColor: 'black',
                                        '&:hover': {
                                            backgroundColor: '#222'
                                        }
                                    }}
                                >
                                    {display.text1}
                                </Button>
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: 'body1.fontSize',
                                    }}
                                >
                                    {display.text2}
                                </Typography>
                            </Stack>
                    </Stack>
                ))}
            </Box>
        </Box>

    );
};