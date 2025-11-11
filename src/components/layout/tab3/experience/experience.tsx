import {
    Typography,
    Stack,
    Box,
    Breadcrumbs,
    Divider,
    Link,
    Tab,
    Tabs,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Experience = () => {
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
            체험
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            체험 프로그램
        </Typography>,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Exhibit1 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                🌾 토종벼 미각체험
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1, fontStyle: "italic" }}>
                “쌀 한 톨의 이름, 맛으로 만나는 기억”
            </Typography>

            {/* 체험 소개 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    🚩 체험 소개
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    대한민국 유일의 토종씨앗박물관에서만 만날 수 있는 특별한 체험,
                    <strong> ‘토종벼 미각체험’</strong>은 다섯 가지 토종벼의 밥을 맛보며
                    쌀이 가진 고유한 맛, 색, 질감, 향기를 오감으로 느끼는 시간입니다.
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    단순한 시식이 아닌, 씨앗과 사람, 그리고 지역이 이어지는 미각의 여정을 통해
                    맛으로 기억을 발견하고, 이야기로 씨앗의 시간을 이어갑니다.
                </Typography>
            </Box>


            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📜 체험 구성
                </Typography>
                <Box sx={{ ml: 2, mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        1. 토종벼 이야기
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                        품종의 역사, 이름의 유래, 재배 지역과 농부의 삶을 소개합니다.
                    </Typography>
                </Box>
                <Box sx={{ ml: 2, mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        2. 밥 시식 (다섯 가지 토종쌀)
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.8, mb: 1 }}>
                        아래 다섯 가지 토종쌀을 천천히 비교하며 감각적으로 체험합니다.
                    </Typography>
                    <ul style={{ paddingLeft: "20px" }}> {/* 리스트 스타일 적용 */}
                        <Typography variant="body2" sx={{ lineHeight: 1.8}}>
                            • 붉은 빛 자광벼 - 특유의 붉은 색과 깊은 풍미가 돋보이는 품종
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8}}>
                            • 고소한 맛의 조도벼 - 부드럽고 고소한 맛이 입안 가득 퍼지는 품종
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8}}>
                            • 찰기 가득한 찰흑미 - 쫀득한 식감과 검은빛 도는 찰기
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8}}>
                            • 노란빛 감도는 금찰벼 - 노란빛과 함께 감도는 은은한 풍미
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8}}>
                            • 은은한 단맛의 사미벼 - 깔끔한 단맛과 독특한 향을 지닌 품종
                        </Typography>
                    </ul>
                </Box>
                <Box sx={{ ml: 2, mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        3. 미각 시트 작성
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                        맛과 향에 대한 인상, 밥에 얽힌 추억, 개인적 감정을 기록하는 참여형 활동.
                    </Typography>
                </Box>
                <Box sx={{ ml: 2, mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        4. 쌀 이야기 & 떡 시식
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                        토종쌀로 만든 떡을 맛보며 지역의 떡 문화와 전통 조리법을 배우고, 이야기를 나눕니다.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📌 체험 정보
                </Typography>
                <Stack spacing={1}>
                    <Typography variant="body2">- 운영 인원: 30명 이하 (소규모 감각 체험 중심)</Typography>
                    <Typography variant="body2">- 체험 시간: 약 90분</Typography>
                    <Typography variant="body2">- 체험비: 25,000원 (재료비, 자료, 떡 시식 포함)</Typography>
                    <Typography variant="body2">- 예약: 사전예약 필수 (현장 참여 불가)</Typography>
                    <Typography variant="body2">- 대상: 청소년 및 성인 (초등 고학년 이상 권장)</Typography>
                    <Typography variant="body2">- 제공 자료: 미각 시트, 토종벼 해설 자료, 떡 시식</Typography>
                </Stack>
            </Box>

            <Box>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', fontWeight: 'bold', fontStyle: "italic" }}
                >
                    오감으로 느끼는 쌀의 매력, “토종벼 미각체험”에서 고유의 맛과 이야기를 발견해보세요.
                </Typography>
            </Box>
        </Paper>
    );

    const Exhibit2 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                토종콩 미각체험
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic", mt: 1 }}>
                “콩 한 알, 이야기와 맛으로 피어나다”
            </Typography>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    🚩 체험 소개
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    대한민국이 원산지인 콩, 그 깊은 맛과 오랜 서사를 오감으로 만나는 토종콩 미각체험입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8}}>
                    밥 속의 콩, 꼬투리 속의 콩, 그리고 기억 속의 콩까지—이 체험은 <strong>‘콩의 나라, 대한민국’</strong>을 다시 만나는 미각의 여정입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    여섯 가지 토종콩을 이용해 콩밥, 삶은 콩, 볶은 콩, 콩나물, 인절미, 구운 꼬투리 등
                    다양한 방식으로 조리된 콩의 맛을 체험합니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8}}>
                    각 콩의 이름의 유래, 품종의 서사, 농부의 삶이 함께 어우러진 감성형 미각 체험입니다.
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    오늘의 토종콩
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>품종</strong></TableCell>
                                <TableCell><strong>특징</strong></TableCell>
                                <TableCell><strong>체험 방식</strong></TableCell>
                                <TableCell><strong>이야기</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>선비잡이콩</TableCell>
                                <TableCell>단단하고 구수한 밥콩</TableCell>
                                <TableCell>콩밥</TableCell>
                                <TableCell>시험 보러 가던 선비의 발길을 붙잡았다는 이름의 유래</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>서리태</TableCell>
                                <TableCell>고소하고 윤기 나는 대표 밥콩</TableCell>
                                <TableCell>밥, 볶음</TableCell>
                                <TableCell>서리를 맞고도 견디는 생명력, 어머니 밥상의 상징</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>밤콩</TableCell>
                                <TableCell>구수하고 쫀득한 장콩</TableCell>
                                <TableCell>삶기</TableCell>
                                <TableCell>된장과 간장의 원료가 된 우리 장문화의 중심콩</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>베틀콩</TableCell>
                                <TableCell>발아력 좋은 나물콩</TableCell>
                                <TableCell>콩나물</TableCell>
                                <TableCell>베틀처럼 곧게 자라는 싹, 생명력의 상징</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>수박태</TableCell>
                                <TableCell>달콤하고 부드러운 가루콩</TableCell>
                                <TableCell>인절미</TableCell>
                                <TableCell>수박무늬 껍질을 닮은 독특한 외형과 달큰한 맛</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>야생콩</TableCell>
                                <TableCell>작지만 진한 원조 콩</TableCell>
                                <TableCell>구운 꼬투리</TableCell>
                                <TableCell>토종콩의 조상, 유전자 보존의 상징</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📜 체험 구성
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>
                    콩 이야기로 여는 서문
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 한반도가 콩의 원산지인 이유와 품종 다양성
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 밥콩·장콩·가루콩·나물콩·약용콩으로 이어진 진화 이야기
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    6가지 콩 미각체험
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 콩밥 → 삶은 콩 → 볶은 콩 → 콩나물 → 인절미 → 구운 꼬투리 순서로 시식
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 진행자의 이야기와 함께 각 콩의 맛과 향을 비교
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    미각 시트 작성
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 맛, 향, 식감, 떠오르는 기억을 자유롭게 기록
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 어머니의 밥상과 고향의 풍경 등 감정과 추억을 글로 쓰는 시간
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    기억의 꼬투리
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 손으로 꼬투리를 까서 먹으며 어린 시절 기억을 떠올리는 체험
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📌 체험 정보
                </Typography>
                <Stack spacing={1}>
                    <Typography variant="body2">- 운영 인원: 30명 이하 (소규모 감각 체험 중심)</Typography>
                    <Typography variant="body2">- 체험 시간: 약 90분</Typography>
                    <Typography variant="body2">- 체험비: 25,000원 (재료비 포함)</Typography>
                    <Typography variant="body2">- 예약: 사전예약 필수</Typography>
                    <Typography variant="body2">- 대상: 청소년 및 성인 (초등 고학년 이상 권장)</Typography>
                    <Typography variant="body2">- 제공 자료: 미각 시트, 콩 해설 자료, 시식용 콩 가공물 등</Typography>
                </Stack>
            </Box>

            <Box>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', fontWeight: 'bold', fontStyle: "italic" }}
                >
                    “한 알의 콩에도 이름이 있고, 그 이름에는 땅과 사람의 시간이 깃들어 있습니다.”
                </Typography>
            </Box>
        </Paper>
    );

    const Exhibit3 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                🌱 생명의 정원 키트 꾸미기
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: "italic", lineHeight: 1.8, mt: 1 }}>
                “기후위기 시대, 나만의 작은 정원을 상상하다”
            </Typography>

            {/* 체험 소개 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    🚩 체험 소개
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    초등학생을 위한 환경·예술 융합 체험 프로그램입니다.
                    탄소중립과 기후위기에 대해 배우고, 직접 나만의 생명의 정원 키트를 꾸며보는 특별한 시간!
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    아이들이 즐겁게 놀며 배우는 가운데, 자연과 생명, 그리고 지구를 지키는 마음을 키워갑니다.
                </Typography>
            </Box>

            {/* 체험 흐름 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📜 체험 구성
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>
                    도입 – 기후위기 이야기
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 교육 영상 시청 (5분)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 탄소중립 개념과 생명의 가치 배우기
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 기후위기 카드로 퀴즈 및 토론
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    선택 – 생명의 아이템 획득 미션
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 총 40여 종의 아이템 중 10가지 선택
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 퀴즈와 미션 수행을 통해 카드 획득
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    제작 – 나만의 생명의 정원 만들기
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 정원 기판에 아이템 배치, 색칠 및 스티커 꾸미기
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 스토리 만들기 및 발표(선택)
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    마무리 – 탄소중립 서명식
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - “나는 지구를 살리는 작은 약속을 합니다!”라는 선언 후 서명
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 완성된 정원 작품 포장 후 가져가기
                </Typography>
            </Box>

            {/* 생명의 정원 키트 구성 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📦 생명의 정원 키트 구성
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - <strong>정원 기판 1세트</strong> (나만의 정원 베이스)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - <strong>꾸미기 아이템 40여 종</strong> (산, 나무, 꽃, 동물, 곤충, 채소, 건물 등)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - <strong>기후위기 카드 5장</strong> (기후변화의 원인과 실천법 학습)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - <strong>교육 영상</strong> (기후위기 이해용 영상)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - <strong>색칠 도구 & 꾸미기 스티커</strong>
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - <strong>탄소중립 서명지</strong>
                </Typography>
            </Box>

            {/* 교육적 효과 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    👨‍🏫 교육적 효과
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 기후위기와 탄소중립에 대한 인식 강화
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 생명과 생태계의 소중함을 시각적으로 체득
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 창의력·상상력·표현력 향상
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 협력 활동을 통한 성취감 경험
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        📌 체험 정보
                    </Typography>
                    <Stack spacing={1}>
                        <Typography variant="body2">- 운영 인원: 15명 이상 (단체 운영 프로그램)</Typography>
                        <Typography variant="body2">- 체험 시간: 약 90분</Typography>
                        <Typography variant="body2">- 체험비: 1인 20,000원 (모든 재료 포함)</Typography>
                        <Typography variant="body2">- 대상: 초등학생 (저학년~고학년 모두 참여 가능)</Typography>
                        <Typography variant="body2">- 제공 자료: 생명의 정원 키트, 색칠 도구, 기후위기 카드 5장, 체험지, 탄소중립 서명서</Typography>
                    </Stack>
                </Box>
            </Box>

            {/* 마무리 */}
            <Box>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', fontWeight: 'bold', fontStyle: "italic" }}
                >
                    “지구를 살리는 생명의 정원, 오늘 내가 만든 이 정원은 내일의 지구를 바꾸는 씨앗이 됩니다.”
                </Typography>
            </Box>
        </Paper>
    );

    const Exhibit4 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                🎨 씨앗 예술 체험
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: "italic", lineHeight: 1.8, mt: 1 }}>
                “씨앗으로 그리는 나만의 그림”
            </Typography>

            {/* 체험 소개 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    🚩 체험 소개
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    🌱 씨앗을 관찰하고, 그림을 그리고, 예술로 표현하는 특별한 시간!
                    작고 다양한 씨앗을 통해 생명의 아름다움과 유전적 다양성을 배우며
                    손끝에서 ‘살아 있는 예술’을 완성합니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    이 프로그램은 씨앗의 형태와 색을 관찰하고 그 씨앗들을 활용해 <strong>나만의 예술 작품(씨앗 액자)</strong>을 만드는 융합형 체험입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    과학적 관찰력과 예술적 감성을 함께 키우며, 아이들이 직접 보고 만지며
                    생명의 다양성을 자연스럽게 이해할 수 있습니다.
                </Typography>
            </Box>

            {/* 체험 구성 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📜 체험 구성
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>
                    1️⃣ 씨앗콘서트 영상 시청 (5~7분)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 씨앗의 세계를 소개하는 미니 다큐 영상
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 씨앗의 구조, 색, 유래, 유전적 특징 학습
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 예술 활동 전 흥미와 감상력 자극
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    2️⃣ 씨앗 관찰 활동 (박물관 대표 체험)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 루페(확대경)로 6종 씨앗 관찰
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 관찰 포인트: 색·크기·질감·무늬·배아 모양
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - “씨앗 속 부모 작물의 얼굴을 찾아요!” — 탐구 중심 관찰 활동
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    3️⃣ 씨앗 예술 만들기
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 준비물: 액자+유리판 세트, 양면테이프, 씨앗 10종 이상, 색칠 도구
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 제작 과정:
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8, pl: 2 }}>
                    • 배경 그림 그리기
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8, pl: 2 }}>
                    • 유리판에 양면테이프 부착
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8, pl: 2 }}>
                    • 그림에 어울리는 씨앗 선택 후 부착
                    (예: 하늘엔 팥, 나무엔 들깨, 꽃엔 수박씨 등)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8, mt: 1 }}>
                    - 완성작은 세상에 하나뿐인 씨앗 예술 액자로 완성
                </Typography>
            </Box>

            {/* 교육적 효과 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    ✨ 체험 포인트
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 과학 + 예술 + 감성이 융합된 교육형 체험
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 관찰과 창작이 연결된 탐구형 학습 경험
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 씨앗의 다양성과 생명 가치에 대한 이해
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 완성작은 기념품·선물용 예술 작품으로 소장 가능
                </Typography>
            </Box>

            {/* 체험 정보 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📌 체험 정보
                </Typography>
                <Stack spacing={1}>
                    <Typography variant="body2">- 운영 인원: 10명 이상</Typography>
                    <Typography variant="body2">- 체험 시간: 약 60~70분 (관찰 20분 + 제작 40분 + 정리 10분)</Typography>
                    <Typography variant="body2">- 체험비: 1인 15,000원 (재료비 포함)</Typography>
                    <Typography variant="body2">- 대상: 초등학생(저학년~고학년 참여 가능)</Typography>
                    <Typography variant="body2">- 제공 자료: 씨앗 10종 이상, 루페, 액자 세트, 양면테이프, 색연필 등</Typography>
                    <Typography variant="body2">- 완성작품: 개인 씨앗 액자 1점 (선물 포장 가능)</Typography>
                </Stack>
            </Box>

            {/* 마무리 */}
            <Box>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', fontWeight: 'bold', fontStyle: "italic" }}
                >
                    “내 그림에 생명을 담다, 씨앗 하나로 펼치는 예술의 세상!”
                </Typography>
            </Box>
        </Paper>
    );

    const Exhibit5 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                🍡 씨앗 떡 만들기 체험
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: "italic", lineHeight: 1.8, mt: 1 }}>
                “한 입의 떡, 한 줌의 이야기”
            </Typography>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    🚩 체험 소개
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    토종씨앗을 활용해 나만의 떡을 만들고, 씨앗과 이야기로 연결하는 감각형 체험입니다.
                    오감으로 씨앗을 경험하며 토종씨앗의 역사와 특징을 배우고,
                    직접 만든 떡을 시식하고 포장하며 창의성과 자존감을 높일 수 있는 특별한 시간입니다.
                </Typography>
            </Box>

            {/* 체험 구성 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📜 체험 구성
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>
                    1️⃣ 오프닝 – 씨앗 이야기 듣기 (5~10분)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 토종씨앗은 단순한 식재료가 아닌, 우리 조상의 지혜와 자연의 선물입니다.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 사용 씨앗: 서리태, 밤콩, 수박태, 참깨, 팥 등
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 씨앗의 쓰임, 모양, 이름 유래를 간단히 소개합니다.
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    2️⃣ 떡 만들기 체험 (15~20분)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 떡 모듈 틀에 쌀가루 반죽을 넣고 다양한 씨앗으로 나만의 고명을 디자인합니다.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - “떡 이름 붙이기” 활동으로 창의력을 발휘합니다.
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    3️⃣ 찌는 시간 – 씨앗 관찰 활동 (10~15분)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 루페와 씨앗 관찰 시트를 이용해 씨앗의 배아, 색, 질감, 크기를 관찰하고 기록합니다.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 씨앗이 어떤 작물에서 유래했는지 상상하며 탐구 활동을 진행합니다.
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    4️⃣ 완성된 떡 시식 & 포장 (10~15분)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 쪄낸 떡을 시식하거나 개별 포장하며 활동을 마무리합니다.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 후기 카드를 작성해 체험의 느낌과 맛, 이야기를 공유합니다.
                </Typography>
            </Box>

            {/* 체험 포인트 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    ✨ 체험 포인트
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 토종씨앗과 식문화를 이해하는 특별한 경험
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 만들기, 관찰, 시식 등 오감을 활용한 통합 체험
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 나만의 떡 만들기를 통해 창의성 및 자존감 향상
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 씨앗 외형과 작물 관계를 탐구하며 식물의 유전자적 특징 이해
                </Typography>
            </Box>


            {/* 체험 정보 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📌 체험 정보
                </Typography>
                <Stack spacing={1}>
                    <Typography variant="body2">- 운영 인원: 10명 이상 그룹 참여 권장</Typography>
                    <Typography variant="body2">- 체험 시간: 약 40~60분</Typography>
                    <Typography variant="body2">- 체험비: 15,000원</Typography>
                    <Typography variant="body2">- 대상: 누구나 참여 가능 (가족 단위, 어린이, 청소년 등)</Typography>
                    <Typography variant="body2">- 제공 구성품: 쌀가루, 떡 모듈 틀, 토종씨앗(고명), 포장용기, 루페 등</Typography>
                </Stack>
            </Box>

            {/* 마무리 */}
            <Box>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', fontWeight: 'bold', fontStyle: "italic" }}
                >
                    “한 입으로 느끼는 씨앗의 이야기, 자연과 역사, 그리고 나의 창의력이 만나는 순간!”
                </Typography>
            </Box>
        </Paper>
    );

    const Exhibit6 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                🌱 콩나물 기르기 키트 체험
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: "italic", lineHeight: 1.8, mt: 1 }}>
                “시간을 키우는 씨앗 한 알”
            </Typography>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    🚩 체험 소개
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                    🏺 신석기 토기에 콩을 담다, 생명을 기르다.
                    이 체험은 토종 쥐눈이콩을 직접 심고 기르며 씨앗의 성장과 생명의 과정을 체험하는 교육형 프로그램입니다.
                    신석기 토기를 재현한 콩나물 시루를 활용해 역사·과학·예술이 결합된 융합 체험으로,
                    아이들이 ‘생명’과 ‘시간’의 가치를 손끝으로 느낄 수 있도록 구성하였습니다.
                </Typography>
            </Box>

            {/* 체험 구성 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📜 체험 구성
                </Typography>

                {/* 오프닝 */}
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>
                    1️⃣ 오프닝 – “콩, 너는 어디서 왔니?”
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 진행자가 들려주는 콩의 역사와 전설
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 선비잡이콩 이야기, 쥐눈이콩의 유래 등
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 콩의 다양성과 상징성을 이해
                </Typography>

                {/* 전시 카드 탐색 */}
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    2️⃣ 전시 카드 탐색 – 콩 카드를 들여다봐요!
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 10종의 콩 카드로 콩의 종류와 특징 탐색
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - “내가 기르고 싶은 콩은?” 짝 토론 진행
                </Typography>

                {/* 콩나물 시루 만들기 */}
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    3️⃣ 콩나물 시루 만들기 – 우리만의 콩나물 시루
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 신석기 빗살무늬 토기의 의미를 학습
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 재현 토기 꾸미기 → 쥐눈이콩 넣기 + 물 주기 + 거름망 덮기
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 어둠 속 생장 원리를 배우며 콩을 기르기 시작
                </Typography>

                {/* 콩나물 기르기 설명 */}
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    4️⃣ 콩나물 기르기 설명 – 씨앗을 키우는 비밀
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 물주기, 관찰 방법, 냄새와 길이 변화 체크법 안내
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 일주일간의 관찰 활동을 시작하며 관찰일지 작성
                </Typography>

                {/* 마무리 활동 */}
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    5️⃣ 마무리 활동 – 씨앗으로 이어지는 이야기
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 내가 기른 콩나물 발표 및 공유
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 쥐눈이콩 요리 소개 (예: 콩나물무침, 국 등)
                </Typography>
            </Box>

            {/* 체험 포인트 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    ✨ 체험 포인트
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 역사 + 생명 + 예술이 융합된 특별한 체험
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 콩의 전설과 유래를 통해 문화적 상징성 학습
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 재현 토기 제작으로 고대인의 지혜와 기술 이해
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 생명의 순환과 성장 원리를 직접 체득
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    - 가정 후속 활동(관찰일지)로 학습 지속 가능
                </Typography>
            </Box>

            {/* 체험 정보 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    📌 체험 정보
                </Typography>
                <Stack spacing={1}>
                    <Typography variant="body2">- 운영 인원: 10명 이상</Typography>
                    <Typography variant="body2">- 체험 시간: 약 60~90분 + 후속 활동(가정 관찰)</Typography>
                    <Typography variant="body2">- 체험비: 20,000원 (재료 포함)</Typography>
                    <Typography variant="body2">- 대상: 초등학생 (10명 이상 단체 진행)</Typography>
                    <Typography variant="body2">- 제공 구성품: 재현 빗살무늬 토기형 시루, 쥐눈이콩, 거름망, 색펜, 콩 카드, 안내서, 관찰일지</Typography>
                </Stack>
            </Box>

            {/* 마무리 */}
            <Box>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', fontWeight: 'bold', fontStyle: "italic" }}
                >
                    “콩나물 시루에서 생명을 키우며 시간과 이야기를 함께 길러요.”
                </Typography>
            </Box>
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
                    체험 프로그램
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs
                    value={mainTab}
                    onChange={handleMainTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="토종벼 미각체험" />
                    <Tab label="토종콩 미각체험" />
                    <Tab label="생명의 정원 키트 꾸미기" />
                    <Tab label="씨앗 예술 체험" />
                    <Tab label="씨앗 떡 만들기 체험" />
                    <Tab label="콩나물 기르기 키트 체험" />
                </Tabs>
                <Box sx={{ mt: 2 }}>
                    {mainTab === 0 && <Exhibit1 />}
                    {mainTab === 1 && <Exhibit2 />}
                    {mainTab === 2 && <Exhibit3 />}
                    {mainTab === 3 && <Exhibit4 />}
                    {mainTab === 4 && <Exhibit5 />}
                    {mainTab === 5 && <Exhibit6 />}
                </Box>
            </Box>
        </Box>
    );
};

export default Experience;