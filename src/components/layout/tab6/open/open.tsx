import {
    Box,
    Breadcrumbs,
    Divider,
    Link, Paper,
    Stack,
    Typography, Pagination,
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const imageList1 = ['20170407_140446_Burst01_압축.pdf', '20170407_144546_압축.pdf', 'DSCF1129_압축.pdf', 'DSCF1131_압축.pdf', 'DSCF1132_압축.pdf', 'DSCF1133_압축.pdf', 'DSCF1135_압축.pdf', 'DSCF1136_압축.pdf', 'DSCF1137_압축.pdf', 'DSCF1138_압축.pdf', 'DSCF1139_압축.pdf', 'DSCF1140_압축.pdf', 'DSCF1141_압축.pdf', 'DSCF1142_압축.pdf', 'DSCF1143_압축.pdf', 'DSCF1144_압축.pdf', 'DSCF1145_압축.pdf', 'DSCF1146_압축.pdf', 'DSCF1147_압축.pdf', 'DSCF1149_압축.pdf', 'DSCF1150_압축.pdf', 'DSCF1151_압축.pdf', 'DSCF1152_압축.pdf', 'DSCF1153_압축.pdf', 'DSCF1154_압축.pdf', 'DSCF1155_압축.pdf', 'DSCF1157_압축.pdf', 'DSCF1158_압축.pdf', 'DSCF1159_압축.pdf', 'DSCF1160_압축.pdf', 'DSCF1161_압축.pdf', 'DSCF1162_압축.pdf', 'DSCF1163_압축.pdf', 'DSCF1164_압축.pdf', 'DSCF1165_압축.pdf', 'DSCF1166_압축.pdf', 'DSCF1168_압축.pdf', 'DSCF1169_압축.pdf', 'DSCF1170_압축.pdf', 'DSCF1171_압축.pdf', 'DSCF1172_압축.pdf', 'DSCF1173_압축.pdf', 'DSCF1174_압축.pdf', 'DSCF1175_압축.pdf', 'DSCF1176_압축.pdf', 'DSCF1177_압축.pdf', 'DSCF1178_압축.pdf', 'DSCF1179_압축.pdf', 'DSCF1180_압축.pdf', 'DSCF1181_압축.pdf', 'DSCF1182_압축.pdf', 'DSCF1183_압축.pdf', 'DSCF1184_압축.pdf', 'DSCF1185_압축.pdf', 'DSCF1186_압축.pdf', 'DSCF1187_압축.pdf', 'DSCF1188_압축.pdf', 'DSCF1189_압축.pdf', 'DSCF1190_압축.pdf', 'DSCF1191_압축.pdf', 'DSCF1192_압축.pdf', 'DSCF1193_압축.pdf', 'DSCF1194_압축.pdf', 'DSCF1195_압축.pdf', 'DSCF1196_압축.pdf', 'DSCF1197_압축.pdf', 'DSCF1198_압축.pdf', 'DSCF1199_압축.pdf', 'DSCF1200_압축.pdf', 'DSCF1201_압축.pdf', 'DSCF1202_압축.pdf', 'DSCF1203_압축.pdf', 'DSCF1204_압축.pdf', 'DSCF1205_압축.pdf', 'DSCF1206_압축.pdf', 'DSCF1207_압축.pdf', 'DSCF1208_압축.pdf', 'DSCF1209_압축.pdf', 'DSCF1210_압축.pdf', 'DSCF1211_압축.pdf', 'DSCF1212_압축.pdf', 'DSCF1213_압축.pdf', 'DSCF1214_압축.pdf', 'DSCF1215_압축.pdf', 'DSCF1216_압축.pdf', 'DSCF1218_압축.pdf', 'DSCF1219_압축.pdf', 'DSCF1220_압축.pdf', 'DSCF1221_압축.pdf', 'DSCF1223_압축.pdf', 'DSCF1224_압축.pdf', 'DSCF1225_압축.pdf', 'DSCF1226_압축.pdf', 'DSCF1227_압축.pdf', 'DSCF1228_압축.pdf', 'DSCF1229_압축.pdf', 'DSCF1230_압축.pdf', 'DSCF1231_압축.pdf', 'DSCF1232_압축.pdf', 'DSCF1233_압축.pdf', 'DSCF1234_압축.pdf', 'DSCF1235_압축.pdf', 'DSCF1236_압축.pdf', 'DSCF1237_압축.pdf', 'DSCF1238_압축.pdf', 'DSCF1239_압축.pdf', 'DSCF1240_압축.pdf', 'DSCF1242_압축.pdf', 'DSCF1244_압축.pdf', 'DSCF1245_압축.pdf', 'DSCF1246_압축.pdf', 'DSCF1247_압축.pdf', 'DSCF1248_압축.pdf', 'DSCF1249_압축.pdf', 'DSCF1250_압축.pdf', 'DSCF1251_압축.pdf', 'DSCF1252_압축.pdf', 'DSCF1253_압축.pdf', 'DSCF1254_압축.pdf', 'DSCF1255_압축.pdf', 'DSCF1256_압축.pdf', 'DSCF1257_압축.pdf', 'DSCF1258_압축.pdf', 'DSCF1259_압축.pdf', 'DSCF1260_압축.pdf', 'DSCF1261_압축.pdf', 'DSCF1262_압축.pdf', 'DSCF1264_압축.pdf', 'DSCF1266_압축.pdf', 'DSCF1267_압축.pdf', 'DSCF1268_압축.pdf', 'DSCF1269_압축.pdf', 'DSCF1270_압축.pdf', 'DSCF1272_압축.pdf', 'DSCF1274_압축.pdf', 'DSCF1275_압축.pdf', 'DSCF1276_압축.pdf', 'DSCF1277_압축.pdf', 'DSCF1278_압축.pdf', 'DSCF1279_압축.pdf', 'DSCF1281_압축.pdf', 'DSCF1282_압축.pdf', 'DSCF1284_압축.pdf', 'DSCF1285_압축.pdf', 'DSCF1286_압축.pdf', 'DSCF1287_압축.pdf', 'DSCF1290_압축.pdf', 'DSCF1292_압축.pdf', 'DSCF1293_압축.pdf', 'DSCF1295_압축.pdf', 'DSCF1297_압축.pdf', 'DSCF1299_압축.pdf', 'DSCF1301_압축.pdf', 'DSCF1302_압축.pdf', 'DSCF1303_압축.pdf', 'DSCF1304_압축.pdf', 'DSCF1305_압축.pdf', 'DSCF1306_압축.pdf', 'DSCF1307_압축.pdf', 'DSCF1308_압축.pdf', 'DSCF1310_압축.pdf', 'DSCF1312_압축.pdf', 'DSCF1313_압축.pdf', 'DSCF1314_압축.pdf', 'DSCF1316_압축.pdf'];

const Open = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const startIndex = (currentPage - 1) * itemsPerPage; // 시작 인덱스
    const endIndex = startIndex + itemsPerPage; // 끝 인덱스
    const paginatedData = imageList1.slice(startIndex, endIndex);


    const totalPages1 = Math.ceil(imageList1.length / itemsPerPage);

    const handlePaginationChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            박물관 개관식
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
                    박물관 개관식
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ mt: 2 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <Box sx={{ my: 3 }}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: 'repeat(1, 1fr)', // 화면이 작을 때는 1개씩
                                    sm: 'repeat(2, 1fr)', // 작은 화면에서는 2개씩
                                    md: 'repeat(4, 1fr)', // 중간 이상 화면에서는 4개씩
                                },
                                gap: 2
                            }}
                        >
                            {paginatedData.map((src, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex', // 세로로 배치 (flex column)
                                            flexDirection: 'column',
                                            alignItems: 'center', // 중앙 정렬
                                            width: 280,
                                        }}
                                    >
                                        {/* 이미지 */}
                                        <Box
                                            sx={{
                                                width: 280,
                                                height: 280,
                                                backgroundImage: `url("/event/개관식/${src}")`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        />
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
            </Box>
        </Box>
    );
};

export default Open;