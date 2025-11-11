import {
    Typography,
    Stack,
    Box,
    Breadcrumbs,
    Divider,
    Link,
    Paper,
    Tabs, Tab
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const Sdisplay = () => {
    const navigate = useNavigate();
    const [mainTab, setMainTab] = useState(0); // 상위 탭 (제1관, 제2관 등) 관리

    const handleMainTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
    };


    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => { navigate('/seed/'); }}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            전시
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            특별 전시
        </Typography>,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Exhibit1 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                토종, 밥상을 부탁해
            </Typography>

            <Stack spacing={3}>

                {/* 전시 개요 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        1. 전시 개요
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        전시명: 토종씨앗, 밥상을 부탁해
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        장소: 대구교육박물관
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        주최/주관: 대구교육박물관
                    </Typography>
                </Box>

                {/* 전시 의도 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        2. 전시 의도
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                        밥상의 시작은 한 알의 씨앗에서 비롯됩니다. ‘토종씨앗, 밥상을 부탁해’ 전시는 우리가 매일 먹는 밥이 어떻게 생명의 순환 속에서 이어져 왔는지, 그리고 그 씨앗이 품은 생명과 문화의 이야기를 담고 있습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        사라져가는 토종씨앗을 다시 일상의 밥상 위로 되살리는 일, 그것이 곧 우리의 생명을 지키는 길임을 이야기합니다.
                    </Typography>
                </Box>

                {/* 전시 구성 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        3. 전시 구성
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold' }}>
                        1️⃣ 씨앗의 기억
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 우리 땅에서 이어져 온 토종씨앗의 생명력과 다양성
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 세대를 넘어 지켜온 농부들의 손과 이야기
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        2️⃣ 밥상의 생명력
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 토종벼·콩·깨 등 밥상의 주인공이 된 씨앗들
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 씨앗에서 밥상으로 이어지는 생명 순환의 여정
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        3️⃣ 함께 지키는 미래
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 학교와 지역이 함께하는 씨앗 교육의 현장
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 미래 세대와 나누는 생명 존중, 생태 감수성
                    </Typography>
                </Box>

                {/* 주요 전시 내용 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        4. 주요 전시 내용
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 토종벼·콩·깨·팥 등 100여 종의 씨앗 실물 전시
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 농부와 공동체의 기록 사진 및 영상
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - ‘우리 밥상에 돌아온 씨앗’ 식문화 코너
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 어린이 및 가족 대상 체험 프로그램: “씨앗의 하루”, “내 밥상의 씨앗 찾기”
                    </Typography>
                </Box>

                {/* 전시 메시지 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        5. 전시 메시지
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                        밥 한 그릇에는 수많은 생명과 계절, 그리고 사람의 손길이 담겨 있습니다. ‘토종씨앗, 밥상을 부탁해’는 단순한 씨앗 전시가 아니라 생명을 키우고 나누는 삶의 철학을 되살리는 자리입니다. 이 전시를 통해 씨앗과 밥상, 그리고 우리의 삶이 하나로 이어져 있음을 함께 느껴보세요.
                    </Typography>
                </Box>

            </Stack>
        </Paper>
    );

    const Exhibit2 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                콩의 나라 대한민국
            </Typography>

            <Stack spacing={3}>

                {/* 전시 개요 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        1. 전시 개요
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        한반도는 콩의 고향으로, ‘두만강’이라는 이름에서도 알 수 있듯 오랜 세월 콩이 삶과 농사, 식문화, 이야기를 만들어 왔습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        이 전시는 토종콩의 다양한 종류, 문화, 명칭, 설화, 사라진 기억과 현재 보존의 이야기를 담고 있습니다.
                    </Typography>
                </Box>

                {/* 주요 전시 내용 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        2. 주요 전시 내용
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        1️⃣ 밥밑콩의 나라, 토종콩의 계보
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 선비잡이콩, 서리태, 밤콩, 수박태, 베틀콩, 쥐눈이콩 등
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 용도별: 간장용, 콩나물용, 떡·가루용 등
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        2️⃣ 두만강에서 시작된 이야기
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - ‘콩으로 가득 찬 강’이라는 뜻
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 토종콩 분포도 및 이동 경로 전시
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 북방 유입형 vs 토착 자생형 콩 해설
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        3️⃣ 이름과 생김새, 그리고 전설
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 콩 설화, 지역 명칭 이야기
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 콩 이름 오염 사례(예: 일본식 표기 → 한글화 과정)
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        4️⃣ 감성 전시 – 콩의 서사
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 장독대 옆 덩굴콩, 콩 껍질 속 추억 연출
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        5️⃣ 생콩 특별 코너
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 삼국시대 탄화콩(2000년 전)
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 부여 유물, 야생콩, 기증종
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 야생콩의 크기, 모양, 생태적 특징 소개
                    </Typography>
                </Box>

                {/* 연계 체험 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        3. 연계 체험
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 콩 미각체험: 콩밥, 볶은콩, 콩나물, 인절미 등 시식
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 씨앗 떡 만들기, 콩나물 키우기 실습
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 감각적 미각 시트, 후기카드 제공
                    </Typography>
                </Box>

                {/* 전시 메시지 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        4. 전시 메시지
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                        “콩 한 알에 이름이 있고, 그 이름마다 땅과 계절과 사람이 깃들어 있습니다.”
                        토종콩의 이름을 되찾고, 씨앗 속 생명의 서사를 다시 노래합니다.
                    </Typography>
                </Box>

            </Stack>
        </Paper>
    );

    const Exhibit3 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                토종벼, 천 개의 이름으로 한반도를 노래하다
            </Typography>

            <Stack spacing={3}>

                {/* 전시 개요 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        1. 전시 개요
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        기간: 2023. 11. 3. ~ 2024. 2. 29.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        장소: 한국토종씨앗박물관 특별전시실
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        주최: 한국토종씨앗박물관
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        후원: 국립농업유전자원센터
                    </Typography>
                </Box>

                {/* 전시 의도 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        2. 전시 의도
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        벼는 한국인의 정체성을 상징하는 생명의 씨앗입니다.
                        이 전시는 과학적 기록(유전자원 특성)과 민속적 언어(민요 속 이름),
                        시각적 예술(액자 전시, 패널 구성)을 결합하여 씨앗의 학문적·문화적·정서적 가치를 보여줍니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                        “벼는 단지 곡식이 아니라, 인간이 만든 첫 노래이며, 세대를 잇는 언어였다.”
                    </Typography>
                </Box>

                {/* 전시 구성 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        3. 전시 구성
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        1️⃣ 벼의 기원
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 인류 문명과 벼의 첫 만남 (인도 아삼, 중국 윈난 지도 / 소로리 볍씨 1만5천년 전)
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        2️⃣ 벼의 이름과 언어
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 브리히(Vrihi) → 베레 → 벼 / 사리(Sari) → 살 → 쌀
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 훈민정음 해례본 속 ‘벼’ 소개
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        3️⃣ 한국 재래벼의 다양성
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 전국 200여 종의 토종벼 유전자원 기반 시료
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 다다조·자광도·노인도 등 이삭 실물 / 액자 전시
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        4️⃣ 민요에 나타난 토종벼
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 서산·예산·진안·철원·용인 등지의 고사소리, 모심는 소리, 거북이노래 속 벼 이름 70여 종
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        5️⃣ 씨앗이 만든 문화
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 쌀농사 도구, 타작 장면, 김장용 벼·찰벼 비교, 전원사시가 가사 영상
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        6️⃣ 미래로 이어지는 씨앗
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 토종벼 복원 프로젝트 소개, 영상 인터랙티브, 씨앗보관 항아리
                    </Typography>
                </Box>

                {/* 전시 메시지 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        4. 전시 메시지
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                        “벼는 이름으로 불릴 때 생명이 된다.” 각 지역마다 벼의 이름이 다르고, 그 이름마다 사람과 땅, 그리고 언어가 달랐습니다.
                        이번 전시는 벼의 기원에서 민요까지, 한 알의 씨앗이 노래·말·기억으로 자라온 과정을 보여줍니다.
                    </Typography>
                </Box>

            </Stack>
        </Paper>
    );

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
                    특별 전시
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs value={mainTab} onChange={handleMainTabChange} centered>
                    <Tab label="토종, 밥상을 부탁해" />
                    <Tab label="콩의 나라 대한민국" />
                    <Tab label="토종벼, 천 개의 이름으로 한반도를 노래하다" />
                </Tabs>
                <Box sx={{ mt: 2 }}>
                    {mainTab === 0 && <Exhibit1 />}
                    {mainTab === 1 && <Exhibit2 />}
                    {mainTab === 2 && <Exhibit3 />}
                </Box>
            </Box>
        </Box>
    );
}

export default Sdisplay;
