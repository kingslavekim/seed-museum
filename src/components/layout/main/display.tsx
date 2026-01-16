import {Box, Button, Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Display = () => {
    const navigate = useNavigate();

    const displayInfo1 = [
        {src: '/display/1.jpg', text1: '상설전시', text2: '상설전시', text3: '', link: '/pdisplay'},
        {src: '/display/2.jpg', text1: '상설전시', text2: '근대 농기구 전시', text3: '', link: '/fdisplay'},
        {src: '/display/3.jpg', text1: '상설전시', text2: '박물관 속 박물관', text3: '', link: '/museum'},
        // {src: '/display/4.jpg', text1: '상설전시', text2: '영상관', text3: '', link: '/video'},
        {src: '/display/5.jpg', text1: '특별전시', text2: '특별전시', text3: '', link: '/sdisplay'},
    ];

    const displayInfo2 = [
        {src: '/display/6.jpg', text1: '체험 프로그램', link: '/experience'},
        {src: '/display/7.jpg', text1: '사회적 농장 프로그램', link: '/socialFarm'},
        {src: '/display/8.jpg', text1: '치유 프로그램', link: '/healing'},
    ];

    return (
        <Box sx={{ mt: 5 }}>
            <Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: 'h4.fontSize'}}>전시</Typography>
                <Box
                    sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' }, // 모바일(xs)에서는 세로 정렬, 데스크탑(sm 이상)에서는 가로 정렬
                        gap: 3, // 요소 간 간격 조정
                        overflowX: { xs: 'visible', md: 'auto' }, // PC에서 가로 스크롤 가능
                        flexWrap: { sm: 'nowrap' }, // 데스크탑에서는 wrapping 비활성화
                        py: 2
                    }}
                >
                    {displayInfo1.map((display, index) => (
                        <Stack
                            key={index}
                            direction="column"
                            spacing={2}
                            sx={{
                                alignItems: 'flex-start', // 좌측 정렬로 변경
                                textAlign: 'left',       // 텍스트 좌측 정렬로 변경
                            }}
                        >
                            <Box
                                component='img'
                                src={display.src}
                                onClick={() => navigate(`${display.link}`)}
                                sx={{
                                    width: 288, // 모바일에서는 100%로 확장
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
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Button
                                    variant='contained'
                                    sx={{
                                        fontSize: 'body1.fontSize',
                                        p: '2px',
                                        width: 90,
                                        backgroundColor: 'black',
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
            <Box sx={{ mt: 5 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: 'h4.fontSize'}}>체험</Typography>
                <Box
                    sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' }, // 모바일(xs)에서는 세로 정렬, 데스크탑(sm 이상)에서는 가로 정렬
                        gap: 3, // 요소 간 간격 조정
                        overflowX: { xs: 'visible', md: 'auto' }, // PC에서 가로 스크롤 가능
                        flexWrap: { sm: 'nowrap' }, // 데스크탑에서는 wrapping 비활성화
                        py: 2
                    }}
                >
                    {displayInfo2.map((display, index) => (
                        <Stack
                            key={index}
                            direction="column"
                            spacing={2}
                            sx={{
                                alignItems: 'flex-start', // 좌측 정렬로 변경
                                textAlign: 'left',       // 텍스트 좌측 정렬로 변경
                            }}
                        >
                            <Box
                                component='img'
                                src={display.src}
                                onClick={() => navigate(`${display.link}`)}
                                sx={{
                                    width: 288, // 모바일에서는 100%로 확장
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
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: 'body1.fontSize',
                                    }}
                                >
                                    {display.text1}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Box>
            </Box>
        </Box>

    );
};