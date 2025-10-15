import {Typography, Stack, Box, Breadcrumbs, Divider, Link} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";

const Facilities = () => {
    const navigate = useNavigate();

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {navigate('/');}}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            소개
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            시설 소개
        </Typography>,
    ];

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
                    시설 소개
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
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
                                첫 번째 시설
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                여기에 첫 번째 시설에 대한 자세한 설명을 작성하세요.
                                시설의 특징, 용도, 규모 등을 설명할 수 있습니다.
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={4}
                        alignItems="start"
                    >
                        <Box sx={{
                            width: { xs: '100%', md: '50%' },
                            p: 2,
                            order: { xs: 2, md: 1 }
                        }}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                두 번째 시설
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                여기에 두 번째 시설에 대한 자세한 설명을 작성하세요.
                                시설의 특징, 용도, 규모 등을 설명할 수 있습니다.
                            </Typography>
                        </Box>
                        <Box sx={{
                            width: { xs: '100%', md: '50%' },
                            order: { xs: 1, md: 2 }
                        }}>
                            <Box
                                component="img"
                                src="/banners/banner2.png"
                                alt="시설 이미지 2"
                                sx={{
                                    width: '100%',
                                    height: 400,
                                    objectFit: 'fill'
                                }}
                            />
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default Facilities;
