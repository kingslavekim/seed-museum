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

const imageList1 = ['20170407_140446_Burst01.jpg', '20170407_144546_압축.jpg', 'DSCF1129_압축.jpg', 'DSCF1131_압축.jpg', 'DSCF1132_압축.jpg', 'DSCF1133_압축.jpg', 'DSCF1135_압축.jpg', 'DSCF1136_압축.jpg', 'DSCF1137_압축.jpg', 'DSCF1138_압축.jpg', 'DSCF1139_압축.jpg', 'DSCF1140_압축.jpg', 'DSCF1141_압축.jpg', 'DSCF1142_압축.jpg', 'DSCF1143_압축.jpg', 'DSCF1144_압축.jpg', 'DSCF1145_압축.jpg', 'DSCF1146_압축.jpg', 'DSCF1147_압축.jpg', 'DSCF1149_압축.jpg', 'DSCF1150_압축.jpg', 'DSCF1151_압축.jpg', 'DSCF1152_압축.jpg', 'DSCF1153_압축.jpg', 'DSCF1154_압축.jpg', 'DSCF1155_압축.jpg', 'DSCF1157_압축.jpg', 'DSCF1158_압축.jpg', 'DSCF1159_압축.jpg', 'DSCF1160_압축.jpg', 'DSCF1161_압축.jpg', 'DSCF1162_압축.jpg', 'DSCF1163_압축.jpg', 'DSCF1164_압축.jpg', 'DSCF1165_압축.jpg', 'DSCF1166_압축.jpg', 'DSCF1168_압축.jpg', 'DSCF1169_압축.jpg', 'DSCF1170_압축.jpg', 'DSCF1171_압축.jpg', 'DSCF1172_압축.jpg', 'DSCF1173_압축.jpg', 'DSCF1174_압축.jpg', 'DSCF1175_압축.jpg', 'DSCF1176_압축.jpg', 'DSCF1177_압축.jpg', 'DSCF1178_압축.jpg', 'DSCF1179_압축.jpg', 'DSCF1180_압축.jpg', 'DSCF1181_압축.jpg', 'DSCF1182_압축.jpg', 'DSCF1183_압축.jpg', 'DSCF1184_압축.jpg', 'DSCF1185_압축.jpg', 'DSCF1186_압축.jpg', 'DSCF1187_압축.jpg', 'DSCF1188_압축.jpg', 'DSCF1189_압축.jpg', 'DSCF1190_압축.jpg', 'DSCF1191_압축.jpg', 'DSCF1192_압축.jpg', 'DSCF1193_압축.jpg', 'DSCF1194_압축.jpg', 'DSCF1195_압축.jpg', 'DSCF1196_압축.jpg', 'DSCF1197_압축.jpg', 'DSCF1198_압축.jpg', 'DSCF1199_압축.jpg', 'DSCF1200_압축.jpg', 'DSCF1201_압축.jpg', 'DSCF1202_압축.jpg', 'DSCF1203_압축.jpg', 'DSCF1204_압축.jpg', 'DSCF1205_압축.jpg', 'DSCF1206_압축.jpg', 'DSCF1207_압축.jpg', 'DSCF1208_압축.jpg', 'DSCF1209_압축.jpg', 'DSCF1210_압축.jpg', 'DSCF1211_압축.jpg', 'DSCF1212_압축.jpg', 'DSCF1213_압축.jpg', 'DSCF1214_압축.jpg', 'DSCF1215_압축.jpg', 'DSCF1216_압축.jpg', 'DSCF1218_압축.jpg', 'DSCF1219_압축.jpg', 'DSCF1220_압축.jpg', 'DSCF1221_압축.jpg', 'DSCF1223_압축.jpg', 'DSCF1224_압축.jpg', 'DSCF1225_압축.jpg', 'DSCF1226_압축.jpg', 'DSCF1227_압축.jpg', 'DSCF1228_압축.jpg', 'DSCF1229_압축.jpg', 'DSCF1230_압축.jpg', 'DSCF1231_압축.jpg', 'DSCF1232_압축.jpg', 'DSCF1233_압축.jpg', 'DSCF1234_압축.jpg', 'DSCF1235_압축.jpg', 'DSCF1236_압축.jpg', 'DSCF1237_압축.jpg', 'DSCF1238_압축.jpg', 'DSCF1239_압축.jpg', 'DSCF1240_압축.jpg', 'DSCF1242_압축.jpg', 'DSCF1244_압축.jpg', 'DSCF1245_압축.jpg', 'DSCF1246_압축.jpg', 'DSCF1247_압축.jpg', 'DSCF1248_압축.jpg', 'DSCF1249_압축.jpg', 'DSCF1250_압축.jpg', 'DSCF1251_압축.jpg', 'DSCF1252_압축.jpg', 'DSCF1253_압축.jpg', 'DSCF1254_압축.jpg', 'DSCF1255_압축.jpg', 'DSCF1256_압축.jpg', 'DSCF1257_압축.jpg', 'DSCF1258_압축.jpg', 'DSCF1259_압축.jpg', 'DSCF1260_압축.jpg', 'DSCF1261_압축.jpg', 'DSCF1262_압축.jpg', 'DSCF1264_압축.jpg', 'DSCF1266_압축.jpg', 'DSCF1267_압축.jpg', 'DSCF1268_압축.jpg', 'DSCF1269_압축.jpg', 'DSCF1270_압축.jpg', 'DSCF1272_압축.jpg', 'DSCF1274_압축.jpg', 'DSCF1275_압축.jpg', 'DSCF1276_압축.jpg', 'DSCF1277_압축.jpg', 'DSCF1279_압축.jpg', 'DSCF1281_압축.jpg', 'DSCF1282_압축.jpg', 'DSCF1284_압축.jpg', 'DSCF1285_압축.jpg', 'DSCF1286_압축.jpg', 'DSCF1287_압축.jpg', 'DSCF1290_압축.jpg', 'DSCF1292_압축.jpg', 'DSCF1293_압축.jpg', 'DSCF1295_압축.jpg', 'DSCF1297_압축.jpg', 'DSCF1299_압축.jpg', 'DSCF1301_압축.jpg', 'DSCF1302_압축.jpg', 'DSCF1303_압축.jpg', 'DSCF1304_압축.jpg', 'DSCF1305_압축.jpg', 'DSCF1306_압축.jpg', 'DSCF1307_압축.jpg', 'DSCF1308_압축.jpg', 'DSCF1310_압축.jpg', 'DSCF1312_압축.jpg', 'DSCF1313_압축.jpg', 'DSCF1314_압축.jpg', 'DSCF1316_압축.jpg'];

const Open = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = imageList1.slice(startIndex, endIndex);


    const totalPages1 = Math.ceil(imageList1.length / itemsPerPage);

    const handlePaginationChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        window.scrollTo(0, 0);
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
                            {paginatedData.map((src, index) => {
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
                                                href={`/event/개관식/${src}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <img
                                                    src={`/event/개관식/${src}`}
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
            </Box>
        </Box>
    );
};

export default Open;