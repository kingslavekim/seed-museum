import {
    Box,
    Breadcrumbs,
    Link,
    Typography, Stack, Divider,
    Alert,
    AlertTitle,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';


const Reservation = () => {
    const navigate = useNavigate();


    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => {navigate('/seed/');}}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            관람 정보
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            예약 안내
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
                    예약 안내
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
                <Stack spacing={4}>
                    <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            전화 예약 안내
                        </Typography>

                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                                <Typography variant="h6">
                                    041-333-5613
                                </Typography>
                            </Box>

                            <Divider sx={{ mb: 3 }} />

                            <Typography>
                                운영시간: 화, 수, 목, 금, 토, 일요일: 09:00 ~ 18:00
                            </Typography>

                            <Alert severity="info" sx={{ mt: 2 }}>
                                <AlertTitle>예약 시 준비사항</AlertTitle>
                                <Typography component="div">
                                    <ul>
                                        <li>방문 희망 날짜와 시간</li>
                                        <li>방문 인원 수</li>
                                        <li>단체의 경우 단체명</li>
                                        <li>예약자 연락처</li>
                                    </ul>
                                </Typography>
                            </Alert>
                        </Stack>
                    </Box>

                    <Divider sx={{ mb: 3 }} />
                </Stack>
            </Box>
        </Box>
    );
}

export default Reservation;
