import {Box, Button, Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Display = () => {
    const navigate = useNavigate();

    const displayInfo = [
        {src: '/display/display1.png', text1: '상설전시', text2: '씨앗 박물관 상설전시 1', text3: '2025-01-01 ~ 2025-12-31', link: 'pdisplay'},
        {src: '/display/display2.png', text1: '상설전시', text2: '씨앗 박물관 상설전시 2', text3: '2025-04-01 ~ 2025-12-31', link: 'pdisplay'},
        {src: '/display/display3.png', text1: '특별전시', text2: '씨앗 박물관 특별전시 3', text3: '2025-07-01 ~ 2025-12-31', link: 'sdisplay'},
        {src: '/display/display3.png', text1: '특별전시', text2: '씨앗 박물관 특별전시 3', text3: '2025-07-01 ~ 2025-12-31', link: 'sdisplay'},
    ];

    return (
        <Box sx={{ mt: 5 }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: 'h4.fontSize'}}>전시</Typography>
            <Box sx={{
                mt: 3,
                display: 'flex',
                columnGap: 10,
                rowGap: 5,
                flexWrap: 'wrap'
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
                            onClick={() => navigate(`/${display.link}`)}
                            sx={{
                                width: 315,
                                height: 450,
                                objectFit: 'fill',
                                objectPosition: 'center',
                                transition: 'transform 0.5s ease-in-out',
                                cursor: 'pointer'
                            }}
                        />
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
                        <Stack
                            key={index}
                            direction='column'
                            spacing={0.3}
                            sx={{
                                alignItems: 'left',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: 'body1.fontSize',
                                }}
                            >
                                {display.text2}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 'body1.fontSize',
                                }}
                            >
                                {display.text3}
                            </Typography>
                        </Stack>
                    </Stack>
                ))}
            </Box>
        </Box>

    );
};