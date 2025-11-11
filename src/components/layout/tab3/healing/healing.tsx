import {
    Typography,
    Stack,
    Box,
    Breadcrumbs,
    Divider,
    Link,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";

const Healing = () => {
    const navigate = useNavigate();

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => { navigate('/seed/'); }}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            체험
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            치유 프로그램
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
                    힐링 프로그램
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                    🚩 프로그램 개요
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                    한국토종씨앗박물관 치유프로그램은 자연과 씨앗, 향기, 음식, 언어를 매개로 한
                    오감 기반 힐링 체험입니다. 씨앗을 통해 마음의 뿌리를 찾고, 향기를 통해 감정을
                    회복하며, 음식과 언어를 통해 나 자신과 다시 연결되는 시간이 됩니다. 이 프로그램은
                    예산군 대술면의 아름다운 농촌 환경 속에서 토종씨앗, 향기 식물, 전통 음식 재료 등을
                    직접 다루며 몸과 마음의 치유를 경험하도록 설계되었습니다.
                </Typography>
            </Box>


            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                    🧩 주요 프로그램 소개
                </Typography>

                {/* 각 프로그램 설명 */}
                <Box sx={{ mt: 2, pl: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        🍱 푸드아트테라피 – “기억의 맛, 마음의 정원”
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        음식 재료와 예술을 결합한 창의적 치유 프로그램입니다.
                        과일, 채소, 한과 등을 이용해 <strong>‘나의 감정 도시락’</strong>을 꾸미고,
                        맛과 향으로 추억을 회상하며 정서적 안정을 찾습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        📌 대상: 65세 이상 어르신, 경도인지장애(MCI) 단계, 복지관·요양시설 이용자
                    </Typography>
                    <Typography variant="body1">📌 운영: 회기당 60~90분, 총 12회</Typography>
                    <Typography variant="body1">📌 효과: 인지자극, 정서 안정, 자존감 회복, 사회적 교류</Typography>
                    <Typography variant="body1">📌 참여비: 회당 12,000원</Typography>
                </Box>

                <Box sx={{ mt: 4, pl: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        🌿 향, 그리고 하루 – “허브와 아로마로 떠나는 정서 치유의 여정”
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        라벤더, 장미, 페퍼민트 등 허브의 향기를 직접 수확·가공하며 자연의 향기로
                        스트레스를 완화하고 마음의 균형을 되찾습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        📌 주요 활동: 라벤더 향주머니 만들기, 장미 오일 만들기, 허브 미스트 제작
                    </Typography>
                    <Typography variant="body1">📌 대상: 어르신, 심신의 안정이 필요한 성인</Typography>
                    <Typography variant="body1">📌 운영: 회기당 90분 / 실내외 병행</Typography>
                    <Typography variant="body1">📌 효과: 정서 안정, 기억력 향상, 활력 회복</Typography>
                    <Typography variant="body1">📌 참여비: 회당 10,000원</Typography>
                </Box>

                <Box sx={{ mt: 4, pl: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        🌰 씨앗의 맛, 삶의 기억 – “씨앗을 통한 감각과 마음 치유”
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        전통 씨앗(콩·기장·율무·들깨 등)을 직접 만지고 맛보며, 맛과 감정을 연결해
                        내면의 기억을 회상합니다.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        📌 주요 활동: 씨앗 만다라 만들기, 씨앗 시식, 씨앗 간식 만들기
                    </Typography>
                    <Typography variant="body1">📌 대상: 어르신, 정서불안 성인, 감각회복이 필요한 참여자</Typography>
                    <Typography variant="body1">📌 운영: 월 2회, 총 8~10회 (회당 90분)</Typography>
                    <Typography variant="body1">📌 효과: 미각 자극, 기억 회상, 인지기능 강화, 문화적 자긍심 회복</Typography>
                    <Typography variant="body1">📌 참여비: 회당 12,000원</Typography>
                </Box>

                <Box sx={{ mt: 4, pl: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        🌍 숨 쉬는 지구, 피어나는 나 – “생태 치유와 기후 감수성 회복”
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        ‘생명의 정원 키트’와 기후위기 카드를 활용하여 자연과 교감하고 생태 감수성을
                        회복하는 프로그램입니다.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        📌 주요 활동: 식물·곤충 관찰, 기후카드 감정연결, 미니텃밭 만들기
                    </Typography>
                    <Typography variant="body1">📌 대상: 아동·청소년, 가족 단위 체험객, 환경교육 관심자</Typography>
                    <Typography variant="body1">📌 운영: 총 3회 / 회당 90분</Typography>
                    <Typography variant="body1">📌 효과: 정서적 안정, 기후 인식 향상, 창의력·관찰력 증진</Typography>
                    <Typography variant="body1">📌 참여비: 15,000원</Typography>
                </Box>

                <Box sx={{ mt: 4, pl: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        📖 기억의 말, 마음의 잎 – “속담과 격언으로 떠나는 회상 치유”
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        속담과 격언을 낱말카드로 풀어보며 기억을 되살리고 감정을 표현합니다.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        📌 주요 활동: 속담 퍼즐 맞추기, 속담 엽서 만들기, 기억의 말 전시회
                    </Typography>
                    <Typography variant="body1">📌 대상: 65세 이상 어르신, 경도인지장애(MCI) 어르신</Typography>
                    <Typography variant="body1">📌 운영: 주 1회 / 총 8회 (회당 60~80분)</Typography>
                    <Typography variant="body1">📌 효과: 인지력 유지, 언어 자극, 정서 회복, 사회적 교류</Typography>
                    <Typography variant="body1">📌 참여비: 회당 8,000원</Typography>
                </Box>
            </Box>

            {/* 📝 참여 방법 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                    📝 참여 방법
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    <strong>장소:</strong> 한국토종씨앗박물관 치유관 (충남 예산군 대술면 시산리 68)
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    <strong>운영 기간:</strong> 2026년 4월 ~ 11월
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    <strong>신청 방법:</strong>
                </Typography>
                <Typography variant="body1" sx={{ ml: 2 }}>
                    ① 전화: ☎️ 041-333-5613
                </Typography>
                <Typography variant="body1" sx={{ ml: 2 }}>
                    ② 이메일: 📧 fs-ac@hanmail.net
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    <strong>모집 인원:</strong> 프로그램별 10~15명 내외
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    <strong>대상:</strong> 어르신, 장애인, 다문화가정, 일반 시민 (프로그램별 상이)
                </Typography>
            </Box>

            {/* 💡 운영 철학 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                    💡 운영 철학
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: 'italic', fontWeight: 'bold' }}>
                    “씨앗은 생명의 시작이자, 치유의 언어입니다.”
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    한국토종씨앗박물관은 자연을 통해 마음을 돌보고, 씨앗을 통해 나를 되찾는 시간을
                    선물합니다.
                </Typography>
            </Box>
        </Box>
    );
};

export default Healing;