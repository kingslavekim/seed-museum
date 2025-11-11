import {
    Box,
    Breadcrumbs,
    Link,
    Typography, Stack, Divider,
    Tabs,
    Tab
} from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as React from "react";

const Directions = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => { navigate('/seed/'); }}>
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
        <Box sx={{ p: 2 }}>
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
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 } }}>
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
                                        <Typography sx={{pl: 4}}>
                                            예산터미널 → 시내버스 (<strong>대술, 신양, 청양 방면</strong>) 승차 →
                                            "시산2구" 또는 "하나김치" 정류장 하차 → 한국토종씨앗박물관 이정표 따라 3분 도보 이동
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                        ) : (
                            <Stack spacing={3}>
                                {/* 자가용 안내 */}
                                <Box>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        자가용 이용 안내
                                    </Typography>
                                    <Stack spacing={2}>
                                        <Typography sx={{pl: 4}}>
                                            <strong>● 서해안고속도로 이용</strong>
                                        </Typography>
                                        <Typography sx={{pl: 4}}>
                                            서해안고속도로 → 평택부여 간 고속도로 → 예산수덕사 IC →
                                            예산 방면 → 시산서길
                                        </Typography>

                                        <Typography sx={{pl: 4}}>
                                            <strong>● 대전당진고속도로 이용</strong>
                                        </Typography>
                                        <Typography sx={{pl: 4}}>
                                            대전당진고속도로 → 신양 IC → 예산 방면 → 시산서길
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                        )}
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default Directions;