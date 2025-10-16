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
        <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {navigate('/seed/');}}>
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
                    <Typography variant="h5" sx={{
                        fontWeight: 'medium',
                        color: 'primary.main',
                        lineHeight: 1.8
                    }}>
                        역사와 문화가 살아 숨쉬고, 과거와 현재, 미래가 공존하는 감동의 공간인
                        씨앗박물관에 오신 것을 환영합니다.
                    </Typography>

                    <Box sx={{ pt: 2 }}>
                        <Stack spacing={3}>
                            <Typography variant="h5">
                                안녕하십니까?<br/>
                                씨앗박물관장 강희진입니다.
                            </Typography>

                            <Typography sx={{ lineHeight: 1.8 }}>
                                역사와 문화는 단순히 과거의 유산이 아닌 오늘의 우리가 살아가는 삶의 기반이며,
                                미래 세대에게 물려주어야 할 소중한 자산입니다. 씨앗박물관은 국가의 문화유산을
                                체계적으로 보존 관리하고 연구하면서 전시와 교육을 통해 그 가치를 국내외에 널리
                                알리는 문화기관으로서의 소명을 다해왔습니다.
                            </Typography>

                            <Typography sx={{ lineHeight: 1.8 }}>
                                박물관의 3대 구성요소는 유물, 건물, 사람입니다. 씨앗박물관은 유물, 건물,
                                관람객 모두 세계에서 열 손가락 안에 꼽히는 자랑스러운 규모입니다. 시대와 주제별로
                                구성된 7개의 상설전시관, 다양한 내용을 선보이는 특별전시관, 관람의 이해를 돕는
                                전시해설 프로그램, 오감으로 즐기고 배우는 어린이박물관, 다채로운 교육 프로그램,
                                첨단기술을 활용한 실감콘텐츠 등은 누구나 쉽게 역사와 문화를 보고, 듣고, 배우고,
                                느낄 수 있도록 설계되어 있습니다.
                            </Typography>

                            <Typography sx={{ lineHeight: 1.8 }}>
                                시대가 변화함에 따라 박물관의 역할도 더욱 확대되고 있습니다. 씨앗박물관은
                                K-컬쳐의 뿌리가 바로 우리 문화유산에 있음을 국민 여러분과 함께 재확인하며,
                                이를 바탕으로 세계 속에 K-문화강국의 위상을 높이는 데 앞장서겠습니다.
                                대한민국의 역사와 문화를 지키고 널리 알리는 길에 늘 함께 해주시기 바랍니다.
                            </Typography>

                            <Typography variant="h5"  sx={{
                                textAlign: 'right',
                                fontWeight: 'bold',
                                pt: 4
                            }}>
                                감사합니다.
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default Greetings;
