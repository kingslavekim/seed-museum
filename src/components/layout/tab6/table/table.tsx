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

const imageList1 = ['1603528098780-2_압축.jpg', '1603528098780-3_압축.jpg', '1603528812088-0_압축.jpg', '1603528812088-15_압축.jpg', '1603528812088-16_압축.jpg', '1603528812088-19_압축.jpg', '1603528812088-1_압축.jpg', '1603528812088-20_압축.jpg', '1603528812088-21_압축.jpg', '1603528812088-22_압축.jpg', '1603528812088-2_압축.jpg', '1603528812088-3_압축.jpg', '1603528812088-4_압축.jpg', '1603528882399-10_압축.jpg', '1603528882399-11_압축.jpg', '1603528882399-12_압축.jpg', '1603528882399-14_압축.jpg', '1603528882399-15_압축.jpg', '1603528882399-16_압축.jpg', '1603528882399-18_압축.jpg', '1603528882399-19_압축.jpg', '1603528882399-22_압축.jpg', '1603528882399-24_압축.jpg', '1603528882399-26_압축.jpg', '1603528882399-5_압축.jpg', '1603528882399-6_압축.jpg', '1603528882399-8_압축.jpg', '1603528882399-9_압축.jpg', '1603532936038_압축.jpg', '1603532941713_압축.jpg', '1603532945657_압축.jpg', '1603532949687_압축.jpg', '1603532953006_압축.jpg', '1603532956643_압축.jpg', '1603532984081_압축.jpg', '1603532993248_압축.jpg', '1603532999575_압축.jpg', '1603533005395_압축.jpg', '1603533012704_압축.jpg', '1603533016154_압축.jpg', '1603533019755_압축.jpg', '1603543421714_압축.jpg', '1603543433842_압축.jpg', '1603543439509_압축.jpg', '1603543454483_압축.jpg', '1603543468251_압축.jpg', '1603543474063_압축.jpg', '1603543480462_압축.jpg', '1603543525792_압축.jpg', '1603543540301_압축.jpg', '1603543545768_압축.jpg', '1603543556149_압축.jpg', '1603543563252_압축.jpg', '1603543568810_압축.jpg', '1603543581954_압축.jpg', '1603543596280_압축.jpg', '1603543602389_압축.jpg', '1603543607782_압축.jpg', '1603543614439_압축.jpg', '1603543620974_압축.jpg', '1603543627641_압축.jpg', '1603543633315_압축.jpg', '1603543641709_압축.jpg', '1603543649041_압축.jpg', '1603543657555_압축.jpg', '1603543673962_압축.jpg', '1603543683323_압축.jpg', '1603543690094_압축.jpg', '1603543700014_압축.jpg', '1603543722692_압축.jpg', '20201024_114746_압축.jpg', '20201024_114804_압축.jpg', '20201024_125539_압축.jpg', '20201024_125605_압축.jpg', '20201024_140333_압축.jpg', '20201024_140343_압축.jpg', '20201024_140604_압축.jpg', '20201024_140615_압축.jpg', '20201024_141009_압축.jpg', '20201024_141034_압축.jpg', '20201024_215500_압축.jpg', '20201024_215538_압축.jpg', '20201024_215613_압축.jpg', '20201024_215705_압축.jpg', '20201024_220112_압축.jpg', '20201024_220255_압축.jpg', '20201024_220314_압축.jpg', '20201024_220337_압축.jpg', '20201024_220411_압축.jpg', '20201024_220954_압축.jpg', '20201024_221021_압축.jpg', '20201024_221113_압축.jpg', '20201024_221131_압축.jpg', '20201024_221213_압축.jpg', '20201024_221236_압축.jpg', '20201024_221304_압축.jpg', '20201024_221330_압축.jpg', '20201024_221441_압축.jpg', '20201024_221534_압축.jpg', '20201024_221704_압축.jpg', '20201024_221813_압축.jpg', '20201024_222614_압축.jpg', '20201024_222651_압축.jpg', 'IMG_8699_압축.jpg', 'Resized_20201024_111842_압축.jpg'];
const imageList2 = ['_MG_3929_압축.jpg', '_MG_3933_압축.jpg', '_MG_3935_압축.jpg', '_MG_3937_압축.jpg', '_MG_3940_압축.jpg', '_MG_3943_압축.jpg', '_MG_3946_압축.jpg', '_MG_3951_압축.jpg', '_MG_3954_압축.jpg', '_MG_3960_압축.jpg', '_MG_3961_압축.jpg', '_MG_3964_압축.jpg', '_MG_3974_압축.jpg', '_MG_3976_압축.jpg', '_MG_3979_압축.jpg', '_MG_3984_압축.jpg', '_MG_3992_압축.jpg', '_MG_3994_압축.jpg', '_MG_3997_압축.jpg', '_MG_4000_압축.jpg', '_MG_4004_압축.jpg', '_MG_4010_압축.jpg', '_MG_4011_압축.jpg', '_MG_4012_압축.jpg', '_MG_4014_압축.jpg', '_MG_4015_압축.jpg', '_MG_4016_압축.jpg', '_MG_4017_압축.jpg', '_MG_4018_압축.jpg', '_MG_4021_압축.jpg', '_MG_4025_압축.jpg', '_MG_4027_압축.jpg', '_MG_4028_압축.jpg', '_MG_4031_압축.jpg', '_MG_4034_압축.jpg', '_MG_4039_압축.jpg', '_MG_4041_압축.jpg', '_MG_4043_압축.jpg', '_MG_4047_압축.jpg', '_MG_4048_압축.jpg', '_MG_4050_압축.jpg', '_MG_4053_압축.jpg', '_MG_4054_압축.jpg', '_MG_4057_압축.jpg', '_MG_4058_압축.jpg', '_MG_4062_압축.jpg', '_MG_4063_압축.jpg', '_MG_4064_압축.jpg', '_MG_4068_압축.jpg', '_MG_4071_압축.jpg', '_MG_4073_압축.jpg', '_MG_4074_압축.jpg', '_MG_4078_압축.jpg', '_MG_4079_압축.jpg', '_MG_4080_압축.jpg', '_MG_4083_압축.jpg', '_MG_4086_압축.jpg', '_MG_4089_압축.jpg', '_MG_4090_압축.jpg', '_MG_4094_압축.jpg', '_MG_4095_압축.jpg', '_MG_4096_압축.jpg', '_MG_4097_압축.jpg', '_MG_4100_압축.jpg', '_MG_4104_압축.jpg', '_MG_4105_압축.jpg', '_MG_4107_압축.jpg', '_MG_4113_압축.jpg', '_MG_4115_압축.jpg', '_MG_4116_압축.jpg', '_MG_4117_압축.jpg', '_MG_4118_압축.jpg', '_MG_4119_압축.jpg', '_MG_4120_압축.jpg', '_MG_4122_압축.jpg', '_MG_4124_압축.jpg', '_MG_4126_압축.jpg', '_MG_4127_압축.jpg', '_MG_4130_압축.jpg', '_MG_4132_압축.jpg', '_MG_4137_압축.jpg', '_MG_4138_압축.jpg', '_MG_4144_압축.jpg', '_MG_4146_압축.jpg', '_MG_4148_압축.jpg'];
const imageList3 = ['1541290134849_압축.jpg', '1541290137982_압축.jpg', '1541290141881_압축.jpg', '1541290145682_압축.jpg', '1541333834446_압축.jpg', '1541333843189_압축.jpg', '1541333848567_압축.jpg', '1541333855933_압축.jpg', '20181103_112747_압축.jpg', '20181103_113312_압축.jpg', '20181103_113323_압축.jpg', '20181103_113325_압축.jpg', '20181103_113328_압축.jpg', '20181103_113338_압축.jpg', '20181103_113401_압축.jpg', '20181103_121126_압축.jpg', '20181103_121142_압축.jpg', '20181103_122528_압축.jpg', '20181103_124203_압축.jpg', '20181103_124212_압축.jpg', '20181103_124216_압축.jpg', '20181103_124229_압축.jpg', '20181103_125042_압축.jpg', '20181103_125049_압축.jpg', '20181103_125101_압축.jpg', '20181103_125106_압축.jpg', '20181103_125115_압축.jpg', '20181107_111130_압축.jpg', 'FB_IMG_1541325115818_압축.jpg', 'FB_IMG_1541325128774_압축.jpg', 'FB_IMG_1541325136269_압축.jpg', 'FB_IMG_1541325155878_압축.jpg', 'FB_IMG_1541325207177_압축.jpg', 'FB_IMG_1541325210777_압축.jpg', 'FB_IMG_1541325223471_압축.jpg', 'FB_IMG_1541325227981_압축.jpg', 'FB_IMG_1541325232244_압축.jpg', 'FB_IMG_1541325236663_압축.jpg', 'FB_IMG_1541325240793_압축.jpg', 'FB_IMG_1541325245117_압축.jpg', 'FB_IMG_1541325250045_압축.jpg', 'FB_IMG_1541325255028_압축.jpg', 'FB_IMG_1541325258948_압축.jpg', 'FB_IMG_1541325263089_압축.jpg', 'FB_IMG_1541325276468_압축.jpg'];

const Table = () => {
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
    const totalPages3 = Math.ceil(imageList3.length / itemsPerPage);

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
                                        href={`/event/예산을 담은 식탁/2020/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/예산을 담은 식탁/2020/${src}`}
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
                                        href={`/event/예산을 담은 식탁/2019/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/예산을 담은 식탁/2019/${src}`}
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

    const Exhibit3 = () => (
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
                    {imageList3.slice(startIndex, endIndex).map((src, index) => {
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
                                        href={`/event/예산을 담은 식탁/2018/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/예산을 담은 식탁/2018/${src}`}
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

                {imageList3.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages3}
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
            예산을 담은 식탁
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
                    예산을 담은 식탁
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs value={mainTab} onChange={handleMainTabChange}>
                    <Tab label="2020년" />
                    <Tab label="2019년" />
                    <Tab label="2018년" />
                </Tabs>
                <Box sx={{ mt: 2 }}>
                    {mainTab === 0 && <Exhibit1 />}
                    {mainTab === 1 && <Exhibit2 />}
                    {mainTab === 2 && <Exhibit3 />}
                </Box>
            </Box>
        </Box>
    );
};

export default Table;