import {
    Box,
    Breadcrumbs,
    Link,
    TableContainer,
    Typography,
    TableRow,
    TableCell,
    Table, TableBody, Stack, Divider
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";

const Info = () => {
    const navigate = useNavigate();


    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => {navigate('/seed/');}}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            관람 정보
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            관람 안내
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
                    관람 안내
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{textAlign: 'center'}}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: {
                                                xs: 'h7.fontSize',
                                                sm: 'h5.fontSize'
                                            }
                                        }}
                                    >
                                        관람 시간
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Stack spacing={2}>
                                        <Typography>
                                            화, 수, 목, 금, 토, 일요일: 09:00 ~ 18:00
                                        </Typography>
                                        <Typography >
                                            * 예약일 경우 월요일도 관람 가능
                                        </Typography>
                                        <Typography>
                                            옥외 전시장(정원)은 오전 7시부터 오후 10시까지 관람하실 수 있습니다.
                                        </Typography>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{textAlign: 'center'}}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: {
                                                xs: 'h7.fontSize',
                                                sm: 'h5.fontSize'
                                            }
                                        }}
                                    >
                                        휴관일
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Stack spacing={2}>
                                        <Typography>
                                            휴관일: 1월1일, 설날, 추석
                                        </Typography>
                                        <Typography>
                                            * 야외전시관은 연중 개관
                                        </Typography>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{textAlign: 'center'}}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: {
                                                xs: 'h7.fontSize',
                                                sm: 'h5.fontSize'
                                            }
                                        }}
                                    >
                                        관람료
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Stack spacing={2}>
                                        <Typography>
                                            5,000 원
                                        </Typography>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default Info;
