import { Typography, Stack, Box, Breadcrumbs, Divider, Link, Table, TableContainer, TableBody, TableRow, TableCell } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";

const History = () => {
    const navigate = useNavigate();

    const historyData = [
        {
            year: '2015',
            events: [
                { date: '-', content: '국내 전역 및 연변·백두산·흑룡강성 등 해외 지역을 돌며 토종씨앗 유물 수집' },
                { date: '-', content: '토종씨앗박물관의 씨앗이 뿌리내리기 시작한 시간' },
                { date: '2015.04', content: '토종씨앗의 선구자 안완식 박사로부터 강화도 지역 토종씨앗 기증' },
                { date: '2015.05', content: '대한민국 최초·유일의 토종씨앗박물관 문을 열다' }
            ]
        },
        {
            year: '2016',
            events: [
                { date: '2016.12', content: '문화체육관광부 및 충청남도 박물관 등록 완료' },
            ]
        },
        {
            year: '2017',
            events: [
                { date: '2017.03', content: '슬로푸드 내포 협회와 함께 "씨앗 이야기" 주제 강연 및 대담 운영 시작' },
            ]
        },
        {
            year: '2018',
            events: [
                { date: '2018', content: '슬로푸드 장터 및 교육농장 인증' },
            ]
        },
        {
            year: '2019',
            events: [
                { date: '2019.11', content: '“토종밥상을 부탁해” 전시 개최 및 대구교육박물관 공동 주최 및 협찬' },
            ]
        },
        {
            year: '2020',
            events: [
                { date: '2020.12', content: '교육장 리뉴얼' },
            ]
        },
        {
            year: '2022',
            events: [
                { date: '2022.05', content: '"콩의 나라" 특별 전시' },
            ]
        },
        {
            year: '2024',
            events: [
                { date: '2024.05', content: '"천개의 이름으로" 토종벼 전시' },
                { date: '2024.11', content: '『누구도 토종을 지키라고 하지 않았다』 출간 및 수장고 확장' },
            ]
        },
        {
            year: '2025',
            events: [
                { date: '2025.11', content: '시산리아리랑공동체와 사회적 농장 지정' },
                { date: '~', content: '치유농장 시범 교육 운영, 인증 준비 중' },
            ]
        }
    ];

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => {navigate('/seed/');}}>
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
