import {
    Box,
    Breadcrumbs,
    Link,
    Typography, Stack, Divider,
    Alert,
    AlertTitle,
    Tabs,
    Tab
} from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {useNavigate} from "react-router-dom";
import {useState} from "react";
import * as React from "react";


const Directions = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => {navigate('/seed/');}}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            관람 정보
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            오시는 길
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
                    오시는 길
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
                <Stack spacing={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">
                            충남 예산군 대술면 시산서길 64-9
                        </Typography>
                    </Box>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            variant="fullWidth"
                        >
                            <Tab
                                icon={<DirectionsBusIcon />}
                                label={<Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>대중교통</Typography>}
                                iconPosition="start"
                            />
                            <Tab
                                icon={<DirectionsCarIcon />}
                                label={<Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>자가용</Typography>}
                                iconPosition="start"
                            />
                        </Tabs>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        {tabValue === 0 ? (
                            <Stack spacing={3}>
                                <Box>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        버스
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography>
                                            <strong>● 예산터미널에서 오시는 경우</strong>
                                        </Typography>
                                        <Typography>
                                            예산터미널 → 시내버스 예산-대술 노선 승차 → "대술면사무소" 하차 →
                                            면사무소에서 도보 15분 또는 택시 이용
                                        </Typography>
                                        <Alert severity="info" sx={{ mt: 1 }}>
                                            <AlertTitle>안내</AlertTitle>
                                            대중교통 이용 시 사전에 버스 시간표를 확인하시기를 권장드립니다.
                                            필요한 경우 콜택시 서비스를 이용하실 수 있습니다.
                                        </Alert>
                                    </Stack>
                                </Box>

                                <Divider sx={{ mb: 3 }} />

                                <Box>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        기차
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography>
                                            <strong>● KTX/SRT 이용</strong>
                                        </Typography>
                                        <Typography>
                                            천안아산역 하차 → 예산행 시외버스 또는 택시 이용
                                        </Typography>
                                        <Typography>
                                            <strong>● 일반철도 이용</strong>
                                        </Typography>
                                        <Typography>
                                            예산역 하차 → 예산터미널까지 도보 또는 택시 이용 →
                                            시내버스 예산-대술 노선 이용
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                        ) : (
                            <Stack spacing={3}>
                                <Box>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        자가용 이용 안내
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography>
                                            <strong>● 서해안고속도로 이용</strong>
                                        </Typography>
                                        <Typography>
                                            서해안고속도로 → 해미IC → 삽교읍 방면 →
                                            예산군청 방면 → 대술면사무소 방면 → 시산서길
                                        </Typography>

                                        <Typography sx={{ mt: 2 }}>
                                            <strong>● 천안논산고속도로 이용</strong>
                                        </Typography>
                                        <Typography>
                                            천안논산고속도로 → 예산수덕사IC →
                                            예산읍 방면 → 대술면사무소 방면 → 시산서길
                                        </Typography>
                                    </Stack>
                                </Box>

                                <Divider sx={{ mb: 3 }} />

                                <Box>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        주차 안내
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography>
                                            <strong>● 주차요금</strong>: 무료
                                        </Typography>

                                        <Typography>
                                            <strong>● 주차장 위치</strong>: 시설 내 전용 주차장
                                        </Typography>
                                    </Stack>
                                </Box>

                                <Alert severity="warning">
                                    <AlertTitle>내비게이션 이용 시 참고사항</AlertTitle>
                                    <Typography>
                                        내비게이션 검색 시 "충남 예산군 대술면 시산서길 64-9"로 검색해 주시기 바랍니다.
                                        일부 내비게이션에서 위치를 찾지 못할 경우 "대술면사무소"를 경유지로 설정하신 후
                                        안내를 받으시기 바랍니다.
                                    </Typography>
                                </Alert>
                            </Stack>
                        )}
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default Directions;
