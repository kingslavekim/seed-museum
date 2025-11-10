import {
    Box,
    Breadcrumbs,
    Link,
    Typography, Stack, Divider,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";

const Greetings = () => {
    const navigate = useNavigate();

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => {navigate('/seed/');}}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            소개
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            인사말
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
                    인사말
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
                <Stack spacing={4}>
                    <Box sx={{ pt: 2 }}>
                        <Stack spacing={3}>
                            <Typography sx={{ lineHeight: 1.8 }}>
                                <Box>
                                    안녕하십니까
                                </Box>
                                <Box>
                                    토종씨앗박물관에 찾아주신 것을 진심으로 환영합니다.
                                </Box>

                            </Typography>
                            <Typography sx={{ lineHeight: 1.8 }}>
                                저희 박물관은 2015년 5월 17일, 대한민국 유일의 ‘토종씨앗 전문 박물관’으로 문을 열었습니다.
                                이 작은 공간은 단순한 전시장이 아니라, 생명과 기억, 그리고 미래를 심는 씨앗의 집입니다.
                            </Typography>

                            <Typography sx={{ lineHeight: 1.8 }}>
                                토종씨앗은 단지 오래된 것이 아니라, 우리가 살아온 방식이자 앞으로 살아갈 방향을 품고 있는 생명의 그릇입니다.
                                기후위기와 생물다양성 붕괴의 시대에, 토종은 생존의 지혜이며 지역과 문화를 잇는 고리입니다.
                            </Typography>

                            <Typography sx={{ lineHeight: 1.8 }}>
                                박물관은 전시뿐 아니라 교육, 연구, 체험을 통해
                                토종씨앗의 가치를 널리 알리고, 누구나 함께 지키고 누릴 수 있는 열린 공간이 되고자 합니다.
                                지역 어린이부터 어르신까지 세대를 아우르는 프로그램을 운영하며,
                                국내외 연구기관, 교육기관, 농민단체와의 협력을 통해 씨앗의 미래를 함께 그려가고 있습니다.
                            </Typography>

                            <Typography sx={{ lineHeight: 1.8 }}>
                                저희 박물관은 다음의 신념을 품고 운영됩니다.
                                <strong>“토종은 단순히 지키는 것이 아니라, 미래를 얻는 것이다.”</strong>
                            </Typography>

                            <Typography sx={{ lineHeight: 1.8 }}>
                                방문하시는 모든 분들이 이곳에서 생명의 소중함과 연결의 기쁨을 느끼시길 바랍니다.
                                토종씨앗과 함께, 더 지속가능한 내일을 만들어가겠습니다.
                            </Typography>

                            <Box sx={{ pt: 5 }}>
                                <Typography variant="h6" sx={{
                                    textAlign: 'right',
                                    fontWeight: 'bold',
                                    pb: 1,
                                }}>
                                    감사합니다.
                                </Typography>
                                <Typography variant="h6"  sx={{
                                    textAlign: 'right',
                                    fontWeight: 'bold',
                                }}>
                                    토종씨앗박물관 관장 드림
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default Greetings;