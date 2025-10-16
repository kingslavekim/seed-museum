import { Typography, Stack, Box, Breadcrumbs, Divider, Link, Table, TableContainer, TableBody, TableRow, TableCell } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";

const History = () => {
    const navigate = useNavigate();

    const historyData = [
        {
            year: '2020',
            events: [
                { date: '2020.03', content: '씨앗박물관 건립 추진 계획 승인' },
                { date: '2020.06', content: '씨앗박물관 건립 타당성 조사 완료' }
            ]
        },
        {
            year: '2021',
            events: [
                { date: '2021.02', content: '씨앗박물관 건립 기본계획 수립' },
                { date: '2021.08', content: '씨앗박물관 부지 선정 및 설계 완료' }
            ]
        },
        {
            year: '2022',
            events: [
                { date: '2022.04', content: '씨앗박물관 건립 공사 착공' },
                { date: '2022.09', content: '씨앗박물관 운영 준비단 발족' }
            ]
        },
        {
            year: '2023',
            events: [
                { date: '2023.03', content: '씨앗박물관 건립 공사 완료' },
                { date: '2023.06', content: '소장품 수집 및 데이터베이스 구축' },
                { date: '2023.09', content: '전시 기획 및 교육 프로그램 개발' }
            ]
        },
        {
            year: '2024',
            events: [
                { date: '2024.01', content: '씨앗박물관 개관' },
                { date: '2024.03', content: '상설전시실 및 기획전시실 운영 시작' },
                { date: '2024.05', content: '씨앗문화교육프로그램 런칭' }
            ]
        },
        {
            year: '2025',
            events: [
                { date: '2025.04', content: '씨앗박물관 통합 디지털 아카이브 시스템 구축' },
                { date: '2025.09', content: '제1회 씨앗문화축제 개최' }
            ]
        }
    ];

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {navigate('/seed/');}}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            소개
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            연혁
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
                    연혁
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
                <TableContainer >
                    <Table>
                        <TableBody>
                            {historyData.map((yearData) => (
                                yearData.events.map((event, eventIndex) => (
                                    <TableRow
                                        key={event.date}
                                    >
                                        <TableCell
                                            rowSpan={eventIndex === 0 ? yearData.events.length : undefined}
                                            sx={{
                                                fontSize: '1.1rem',
                                                color: 'primary.main',
                                                fontWeight: 'medium',
                                                borderRight: '1px solid rgba(224, 224, 224, 0.4)',
                                                display: eventIndex === 0 ? 'table-cell' : 'none',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{yearData.year}</Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontSize: '1.1rem',
                                            }}
                                        >
                                            {event.date}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontSize: '1.1rem',
                                                py: 2,
                                            }}
                                        >
                                            {event.content}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </Box>
    );
}

export default History;
