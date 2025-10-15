import {Typography, Stack, Box, Breadcrumbs, Divider, Link, Tabs, Tab} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as React from "react";

const Museum = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {navigate('/');}}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            전시
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            박물관 속의 박물관
        </Typography>,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

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
                    박물관 속의 박물관
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 5 }}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        variant="fullWidth"
                    >
                        <Tab
                            label={<Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>고대 장미 유물</Typography>}
                            iconPosition="start"
                        />
                        <Tab
                            label={<Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>치유 장미 정원</Typography>}
                            iconPosition="start"
                        />
                    </Tabs>
                </Box>


                {tabValue === 0 ? (
                    <Box>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={4}
                                alignItems="start"
                            >
                                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                                    <Box
                                        component="img"
                                        src="/banners/banner1.png"
                                        alt="시설 이미지 1"
                                        sx={{
                                            width: '100%',
                                            height: 400,
                                            objectFit: 'fill'
                                        }}
                                    />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '50%' }, p: 2 }}>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        1 고대 장미 전시
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 2 }}>
                                        여기에 첫 번째 전시에 대한 자세한 설명을 작성하세요.
                                    </Typography>
                                </Box>
                            </Stack>

                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={4}
                                alignItems="start"
                            >
                                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                                    <Box
                                        component="img"
                                        src="/banners/banner1.png"
                                        alt="시설 이미지 1"
                                        sx={{
                                            width: '100%',
                                            height: 400,
                                            objectFit: 'fill'
                                        }}
                                    />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '50%' }, p: 2 }}>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        2 고대 장미 전시
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 2 }}>
                                        여기에 첫 번째 전시에 대한 자세한 설명을 작성하세요.
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                ) : (
                    <Box>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={4}
                                alignItems="start"
                            >
                                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                                    <Box
                                        component="img"
                                        src="/banners/banner2.png"
                                        alt="시설 이미지 1"
                                        sx={{
                                            width: '100%',
                                            height: 400,
                                            objectFit: 'fill'
                                        }}
                                    />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '50%' }, p: 2 }}>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        1 치유 장미 전시
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 2 }}>
                                        여기에 첫 번째 전시에 대한 자세한 설명을 작성하세요.
                                    </Typography>
                                </Box>
                            </Stack>

                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={4}
                                alignItems="start"
                            >
                                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                                    <Box
                                        component="img"
                                        src="/banners/banner2.png"
                                        alt="시설 이미지 1"
                                        sx={{
                                            width: '100%',
                                            height: 400,
                                            objectFit: 'fill'
                                        }}
                                    />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '50%' }, p: 2 }}>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        2 치유 장미 전시
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 2 }}>
                                        여기에 첫 번째 전시에 대한 자세한 설명을 작성하세요.
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default Museum;
