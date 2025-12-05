import {
    Accordion, AccordionDetails, AccordionSummary,
    Box,
    Breadcrumbs,
    Divider,
    Link, Paper,
    Stack, Tab, Tabs,
    Typography,
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const SeedStory = () => {
    const navigate = useNavigate();
    const [mainTab, setMainTab] = useState(0);

    const handleMainTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Exhibit1 = () => {
        const stories = Array.from({ length: 33 }, (_, index) => `이야기 ${index + 1}`);

        return (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Box
                    sx={{
                        display: 'flex', // Flexbox 레이아웃 적용
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4, // Box 간 간격
                    }}
                >
                    {/* 왼쪽: 책 이미지 */}
                    <Box
                        component="img"
                        src="/seedStory/book.png"
                        alt="책 이미지"
                        sx={{
                            width: { xs: '100%', md: 400 },
                            height: { xs: 'auto', md: 600 },
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />

                    {/* 오른쪽: 이야기 리스트 */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                        }}
                    >
                        {stories.map((story, index) => (
                            <Accordion key={index} sx={{ mb: 1 }}>
                                <AccordionSummary
                                    expandIcon={<NavigateNextIcon />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                >
                                    <Typography>{story}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {story}에 대한 자세한 설명이 여기에 들어갑니다.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Paper>
        )
    };


    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => { navigate('/seed/'); }}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            씨앗이야기
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
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >
                    씨앗이야기
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs
                    value={mainTab}
                    onChange={handleMainTabChange}
                    centered
                >
                    <Tab label="수집 이야기 - 책" />
                    <Tab label="수집 이야기 - 수집 사진" />
                    <Tab label="수집 이야기 - 지역별 수집" />
                </Tabs>
                <Box sx={{ mt: 2 }}>
                    {mainTab === 0 && <Exhibit1 />}
                    {mainTab === 1 && <Exhibit1 />}
                    {mainTab === 2 && <Exhibit1 />}
                </Box>
            </Box>
        </Box>
    );
};

export default SeedStory;