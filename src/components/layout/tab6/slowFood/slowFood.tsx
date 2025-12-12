import {
    Box,
    Breadcrumbs,
    Divider,
    Link, Paper,
    Stack,
    Typography, Pagination, Tabs, Tab,
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const imageList1 = ['20180721_101015_압축.jpg', '20180721_101019_압축.jpg', '20180721_101141_압축.jpg', '20180721_101308_압축.jpg', '20180721_101320_압축.jpg', '20180721_101325_압축.jpg', '20180721_101335_압축.jpg', '20180721_101342_압축.jpg', '20180721_104441_압축.jpg', '20180721_104641_압축.jpg', '20180721_105645_압축.jpg', '20180721_110138_압축.jpg', '20180721_110141_압축.jpg', '20180721_110151_압축.jpg', '20180721_110153_압축.jpg', '20180721_110157_압축.jpg', '20180721_110158_압축.jpg', '20180721_110205_압축.jpg', '20180721_110241_압축.jpg', '20180721_110249_압축.jpg', '20180721_110255_압축.jpg', '20180721_110315_압축.jpg', '20180721_110320_압축.jpg', '20180721_110350_압축.jpg', '20180721_110355_압축.jpg', '20180721_110416_압축.jpg', '20180721_110426_압축.jpg', '20180721_110437_압축.jpg', '20180721_110602_압축.jpg', '20180721_110615_압축.jpg', '20180721_111001_압축.jpg', '20180721_111007_압축.jpg', '20180721_111908_압축.jpg', '20180721_111909_압축.jpg', '20180721_112151_압축.jpg', '20180721_112234_압축.jpg', '20180721_112238_압축.jpg', '20180721_112425_압축.jpg', '20180721_112530_압축.jpg', '20180721_112549_압축.jpg', '20180721_112607_압축.jpg', '20180721_112633_압축.jpg', '20180721_113022_압축.jpg', '20180721_113449_압축.jpg', '20180721_113505_압축.jpg', '20180721_114001_압축.jpg', '20180721_114011_압축.jpg', '20180721_114704_압축.jpg', '20180721_114845_압축.jpg', '20180721_115104_압축.jpg', '20180721_115149_압축.jpg', '20180721_115447_압축.jpg', '20180721_115452_압축.jpg', '20180721_115504_압축.jpg', '20180721_120742_압축.jpg', 'FB_IMG_1531337899597_압축.jpg', 'FB_IMG_1532223431572_압축.jpg', 'FB_IMG_1532223445488_압축.jpg', 'FB_IMG_1532223459498_압축.jpg', 'FB_IMG_1532223514828_압축.jpg', 'FB_IMG_1532223639981_압축.jpg', 'FB_IMG_1532223644818_압축.jpg', 'FB_IMG_1532223650841_압축.jpg', 'FB_IMG_1532223656910_압축.jpg', 'FB_IMG_1532223664217_압축.jpg', 'FB_IMG_1532223668889_압축.jpg', 'FB_IMG_1532227256670_압축.jpg', 'FB_IMG_1541325107279_압축.jpg'];
const imageList2 = ['1496228401426_압축.jpg', '1496491582102_압축.jpg', '1496491589878_압축.jpg', '1496491600744_압축.jpg', '1496491603977_압축.jpg', '1496491606554_압축.jpg', '1496491610885_압축.jpg', '1496491613175_압축.jpg', '1496491616053_압축.jpg', '1496491618753_압축.jpg', '1496491621111_압축.jpg', '1496491623268_압축.jpg', '1496491626388_압축.jpg', '1496491632128_압축.jpg', '1496491643380_압축.jpg', '1496491645280_압축.jpg', '1496491656875_압축.jpg', '1496491658900_압축.jpg', '1496491663659_압축.jpg', '1496491666192_압축.jpg', '1496491668381_압축.jpg', '1496491670307_압축.jpg', '1496491672615_압축.jpg', '1496491692991_압축.jpg', '1496491698095_압축.jpg', '1496491702574_압축.jpg', '1496491704657_압축.jpg', '1496491706463_압축.jpg', '1496491708435_압축.jpg', '1496491710304_압축.jpg', '1496491712355_압축.jpg', '1496491714331_압축.jpg', '1496491718875_압축.jpg', '1496491721483_압축.jpg', '1496491723330_압축.jpg', '1496491727255_압축.jpg', '1496491732985_압축.jpg', '1496491757799_압축.jpg', '1496491761528_압축.jpg', '1496491767134_압축.jpg', '1496491769282_압축.jpg', '1496491775448_압축.jpg', '1496491779887_압축.jpg', '1496491802240_압축.jpg', '1496491804643_압축.jpg', '1496491811605_압축.jpg', '1496491813708_압축.jpg', '1496491824023_압축.jpg', '1496491826004_압축.jpg', '1504243119075_압축.jpg', '2017-06-03 21.31.16_압축.jpg', '2017-06-03 21.32.23_압축.jpg', '2017-06-03 21.33.08_압축.jpg', '2017-06-03 21.34.35_압축.jpg', '2017-06-03 21.36.05_압축.jpg', '2017-06-03 21.36.49_압축.jpg', '2017-06-03 21.43.11_압축.jpg', '2017-06-03 21.43.43_압축.jpg', '2017-06-03 21.44.32_압축.jpg', '2017-06-03 21.45.17_압축.jpg', '2017-06-03 21.45.59_압축.jpg', '2017-06-03 21.49.05_압축.jpg', '2017-09-21 05.27.51_압축.jpg', '2017-09-21 05.29.32_압축.jpg', '2017-09-21 05.30.03_압축.jpg', '2017-09-21 05.31.40_압축.jpg', '2017-09-21 05.32.16_압축.jpg', '2017-09-21 05.34.11_압축.jpg', '2017-09-21 05.36.32_압축.jpg', '2017-09-21 05.37.13_압축.jpg', '2017-09-21 05.38.05_압축.jpg', '2017-09-21 05.39.18_압축.jpg', '2017-09-21 05.40.17_압축.jpg', '20170603_103230_압축.jpg', '20170603_103238_압축.jpg', '20170603_103444_압축.jpg', '20170603_103736_압축.jpg', '20170603_104344_압축.jpg', '20170603_104358_압축.jpg', '20170603_104411_압축.jpg', '20170603_104424_압축.jpg', '20170603_104439_압축.jpg', '20170603_104449_압축.jpg', '20170603_104454_압축.jpg', '20170603_104755_압축.jpg', '20170603_104901_압축.jpg', '20170603_104912_압축.jpg', '20170603_105003_압축.jpg', '20170603_105105_압축.jpg', '20170603_105146_압축.jpg', '20170603_105154_압축.jpg', '20170603_110140_압축.jpg', '20170916_104404_압축.jpg', '20170916_104406_압축.jpg', '20170916_104921_압축.jpg', '20170916_104924_압축.jpg', '20170916_104935_압축.jpg', '20170916_104946_압축.jpg', '20170916_104956_압축.jpg', '20170916_105013_압축.jpg', '20170916_105032_압축.jpg', '20170916_105037_압축.jpg', '20170916_105042_압축.jpg', '20170916_105100_압축.jpg', '20170916_105132_압축.jpg', '20170916_105135_압축.jpg', '20170916_105311_압축.jpg', '20170916_105623_압축.jpg', '20170916_105625_압축.jpg', '20170916_105633_압축.jpg', '20170916_111123_압축.jpg', '20170916_111132_압축.jpg', '20170916_111136_압축.jpg', '20170916_111139_압축.jpg', '20170916_111155_압축.jpg', '20170916_111201_압축.jpg', '20170916_111209_압축.jpg', '20170916_111211_압축.jpg', '20170916_111212_압축.jpg', '20170916_111514_압축.jpg', '20170916_111524_압축.jpg', '20170916_111755_압축.jpg', '20170916_112113_압축.jpg', '20170916_112227_압축.jpg', '20170916_115144_압축.jpg', '20170916_115205_압축.jpg', '20170916_115608_압축.jpg', '20170916_115712_압축.jpg', '20170916_115717_압축.jpg', '20170916_115809_압축.jpg', '20170916_115817_압축.jpg', '20170916_115830_압축.jpg', '20170916_115839_압축.jpg', '20170916_115849_압축.jpg', '20170916_115908_압축.jpg', '20170916_115926_압축.jpg', '20170916_115959_압축.jpg', '20170916_120024_압축.jpg', '20170916_120223_압축.jpg', '20170916_121026_압축.jpg', '20170916_121225_압축.jpg', '20170916_121351_압축.jpg', '20170916_121525_압축.jpg', '20170916_121616_압축.jpg', '20170916_121643_압축.jpg', '20170916_121646_압축.jpg', '20170916_121727_압축.jpg', '20170916_121829_압축.jpg', '20170916_122019_압축.jpg', '20170916_122537_압축.jpg', '20170916_122819_압축.jpg', '20170916_122946_압축.jpg', '20170916_122959_압축.jpg', '32760_압축.jpg', 'FB_IMG_1496589579783_압축.jpg', 'FB_IMG_1496589585483_압축.jpg', 'FB_IMG_1496589595706_압축.jpg'];

const SlowFood = () => {
    const navigate = useNavigate();
    const [mainTab, setMainTab] = useState(0); // 상위 탭 (제1관, 제2관 등) 관리
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleMainTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
        setCurrentPage(1);
        window.scrollTo(0, 0);
    };

    const handlePaginationChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };


    const totalPages1 = Math.ceil(imageList1.length / itemsPerPage);
    const totalPages2 = Math.ceil(imageList2.length / itemsPerPage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Exhibit1 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2
                    }}
                >
                    {imageList1.slice(startIndex, endIndex).map((src, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 280,
                                }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 280,
                                    }}
                                >
                                    {/* 이미지 */}
                                    <a
                                        href={`/event/슬로푸드/2018/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/슬로푸드/2018/${src}`}
                                            alt={src}
                                            loading="lazy"
                                            style={{
                                                width: 280,
                                                height: 280,
                                                objectFit: 'cover',
                                                borderRadius: 8,
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {imageList1.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages1}
                        page={currentPage}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        color="primary"
                    />
                </Box>
            </Box>
        </Paper>
    );

    const Exhibit2 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2
                    }}
                >
                    {imageList2.slice(startIndex, endIndex).map((src, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 280,
                                }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 280,
                                    }}
                                >
                                    {/* 이미지 */}
                                    <a
                                        href={`/event/슬로푸드/2017/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/슬로푸드/2017/${src}`}
                                            alt={src}
                                            loading="lazy"
                                            style={{
                                                width: 280,
                                                height: 280,
                                                objectFit: 'cover',
                                                borderRadius: 8,
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {imageList2.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages2}
                        page={currentPage}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        color="primary"
                    />
                </Box>
            </Box>
        </Paper>
    );

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => {
            navigate('/seed/');
        }}>
            Home
        </Link>,
        <Typography key="2" sx={{color: 'text.primary'}}>
            문화행사
        </Typography>,
        <Typography key="2" sx={{color: 'text.primary'}}>
            슬로푸드
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
                    슬로푸드
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs value={mainTab} onChange={handleMainTabChange}>
                    <Tab label="2018년" />
                    <Tab label="2017년" />
                </Tabs>
                <Box sx={{ mt: 2 }}>
                    {mainTab === 0 && <Exhibit1 />}
                    {mainTab === 1 && <Exhibit2 />}
                </Box>
            </Box>
        </Box>
    );
};

export default SlowFood;