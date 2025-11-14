import {
    Typography,
    Stack,
    Box,
    Breadcrumbs,
    Divider,
    Link,
    Paper,
    Tabs, Tab,
    TableContainer,
    TableCell,
    TableBody, TableHead, TableRow, Table
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const Museum = () => {
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
            박물관 속의 박물관
        </Typography>,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const wildRosesData = [
        {
            no: 1,
            name: 'Rosa gallica L.',
            distribution: '서·남유럽, 소아시아',
            morphology: '저관목형, 높이 0.5–1.5 m / 잎 우상복엽 / 적자색 홑꽃',
            ecology: '가장 오래된 재배종 중 하나, 다배체(2n = 14) 구조 연구 多',
            cultural: '로마·중세 약용·향료 ‘갈리카 장미’',
            exhibit: '“재배장미의 기원”으로 소개 가능 – 고대씨앗 연계 전시'
        },
        {
            no: 2,
            name: 'Rosa canina L. (개장미, Dog Rose)',
            distribution: '유럽·서아시아·북아프리카',
            morphology: '반덩굴형 / 연홍색 홑꽃 / 가시 많음',
            ecology: '광범위 적응성, 모계 불균형 배수성 종 연구 중요',
            cultural: '열매 (Rose hips) 비타민 C 풍부, 민간약용',
            exhibit: '“생태계 공헌 – 열매의 이야기” 패널에 적합'
        },
        {
            no: 3,
            name: 'Rosa rugosa Thunb. (해당화)',
            distribution: '동북아 (한국·일본·중국 해안)',
            morphology: '잎 두껍고 광택, 꽃 진분홍, 열매 둥근형',
            ecology: '염분 내성 강, 냉지 적응 / 아시아 유전형 연구 중심 자료',
            cultural: '향료·약용·관상 모두 활용, 한국 해안 문화 연계',
            exhibit: '“한·일 공통 해안 유전형 비교” 테마 가능'
        },
        {
            no: 4,
            name: 'Rosa foetida Herrm. (노랑장미)',
            distribution: '중앙아시아 (이란·캅카스)',
            morphology: '황색 홑꽃 / 잎 작고 가시 적음',
            ecology: '황색 색소 (카로티노이드) 유전 원천 종',
            cultural: '‘페르시아 장미’ 전설, 향수 기원 식물',
            exhibit: '“색의 유전 기원” 섹션 적합'
        },
        {
            no: 5,
            name: 'Rosa chinensis Jacq. (월계)',
            distribution: '중국 중남부',
            morphology: '반상록 관목 / 다년생 개화 특성',
            ecology: '반복개화 (recurrent blooming) 유전자 기원 종',
            cultural: '동아시아 재배장미의 시초, 유럽 품종과 교잡',
            exhibit: '“연속개화 유전자의 발견” 주제 가능'
        },
        {
            no: 6,
            name: 'Rosa moschata Herrm. (머스크 장미)',
            distribution: '히말라야–중앙아시아–지중해',
            morphology: '덩굴형 / 흰색 향기꽃 / 열매 타원형',
            ecology: '고산지대 기원, 향기 유전자의 모체 중 하나',
            cultural: '향수 · 유럽 장미원 근원',
            exhibit: '“향기의 진화” 테마 적합'
        },
        {
            no: 7,
            name: 'Rosa damascena Mill. (다마스크 장미)',
            distribution: '시리아 · 불가리아 · 이란',
            morphology: '대형 겹꽃 / 분홍~홍색',
            ecology: '다배체 교잡종 (R. gallica × R. moschata × R. phoenicia 추정)',
            cultural: '로즈오일 산업의 기원, ‘불가리아 장미밸리’ 상징',
            exhibit: '“향료와 문명” 섹션 핵심 사례'
        },
        {
            no: 8,
            name: 'Rosa californica Cham. & Schltdl.',
            distribution: '북미 서부 (캘리포니아 등)',
            morphology: '직립형 / 연분홍 홑꽃 / 향 강함',
            ecology: '건조·온난 기후 적응 형질 / 곤충매개 연구',
            cultural: '토착민 약용 및 식용 이력 있음',
            exhibit: '“북미 건조지 적응 형질” 전시 적합'
        },
        {
            no: 9,
            name: 'Rosa arkansana Porter (프레리 로즈)',
            distribution: '북미 중부 평원지대',
            morphology: '저관목 / 분홍 홑꽃 / 지하경 발달',
            ecology: '한랭·풍식 토양 적응, 토양 고정 기여',
            cultural: '북미 주정부 상징 식물 (아이오와 州)',
            exhibit: '“생태복원 식물로서의 장미” 활용'
        },
        {
            no: 10,
            name: 'Rosa pendulina L. (알프스 로즈)',
            distribution: '유럽 알프스–카르파티아',
            morphology: '직립 / 홍자색 꽃 / 열매 매우 길음',
            ecology: '고산 적응성 강 / 광합성 한계온도 연구 자료',
            cultural: '알프스 민속화 · 자연보호 상징',
            exhibit: '“고산 생태 적응 – 한계의 꽃” 주제 적합'
        }
    ];

    const koreanWildRosesData = [
        {
            name: 'Rosa rugosa (해당화)',
            seedHypothesis:
                '해안 모래언덕 출토 가능성 있음: 씨앗 유물이 해안가 유적지나 염분 함유지대에서 발견되었다면 해당화 씨앗일 가능성 있음.',
            usageHistory:
                '동아시아 전통 약용 식물로 활용됨. 근대 이후 유럽·북미로 전파되어 해안녹화용으로 사용.',
        },
        {
            name: 'Rosa multiflora (찔레)',
            seedHypothesis:
                '들판·숲가장자리 씨앗 유물과 연계 가능: 접목 대목으로 쓰인 기록이 있어, 씨앗 유물이 원예적 변종으로 이어졌을 가능성 있음.',
            usageHistory:
                '아시아권 민간 약용·차용 이용. 근현대 원예육종의 뿌리로 작용.',
        },
        {
            name: 'Rosa koreana (흰인가목)',
            seedHypothesis:
                '고산지·한반도 북부 자생지 출토 가능성 있음.',
            usageHistory:
                '민간에서 열매·뿌리 이용 기록 존재. 최근 보전식물로 지정.',
        },
        {
            name: 'Rosa maximowicziana (용가시나무 계열)',
            seedHypothesis:
                '매우 희소한 종으로 유물 발견 시 희귀 자생종 스토리 가능.',
            usageHistory:
                '전통 활용문헌 적음. 현대 유전자 자원·보전관점 연구.',
        },
        {
            name: 'Rosa acicularis (인가목 계열)',
            seedHypothesis: '산악지대 자생형으로, 고지대 유적지에서 출토 가능.',
            usageHistory: '민속적 이용 제한적, 생태·기후 적응형 연구 대상.',
        },
        {
            name: 'Rosa wichuraiana (돌가시나무 계열)',
            seedHypothesis:
                '덩굴성 자생형으로 섬·해안 암석지 유적에서 씨앗/열매 흔적 가능.',
            usageHistory:
                '원예장미 육종에 야생 덩굴형 모체로 활용됨. 한국 자생 기록은 적음.',
        },
        {
            name: 'Rosa xanthina (노랑장미 계열)',
            seedHypothesis:
                '노랑 색채 특징으로 유물 식별 시 시각적 포인트 가능.',
            usageHistory: '원예 품종 육종사에서 색 유전원으로 활용.',
        },
        {
            name: 'Rosa davurica (생열귀나무 계열)',
            seedHypothesis:
                '냉한대림변두리 자생형으로 한반도 북부·접경 산지 유출토에서 출토 가능.',
            usageHistory:
                '보전 위주 연구 대상. 민속적 이용보다는 생태학적·식물지리학적 의미 큼.',
        },
    ];

    const Exhibit1 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                고대장미 씨앗유물관
            </Typography>

            {/* 이미지 갤러리 */}
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                    mt: 4
                }}
            >
                <Box
                    component="div"
                    sx={{
                        width: '100%',
                        height: 250,
                        overflow: 'hidden',
                        borderRadius: 2
                    }}
                >
                    <img
                        src="/museum/1.webp"
                        alt="고대 장미 이미지 1"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </Box>

                {/* 이미지 2 */}
                <Box
                    component="div"
                    sx={{
                        width: '100%',
                        height: 250,
                        overflow: 'hidden',
                        borderRadius: 2
                    }}
                >
                    <img
                        src="/museum/2.jpg"
                        alt="고대 장미 이미지 2"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </Box>

                {/* 이미지 3 */}
                <Box
                    component="div"
                    sx={{
                        width: '100%',
                        height: 250,
                        overflow: 'hidden',
                        borderRadius: 2
                    }}
                >
                    <img
                        src="/museum/3.jpg"
                        alt="고대 장미 이미지 3"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </Box>
            </Box>

            {/* 전시 소개 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    1. 전시 개요
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    『고대장미 씨앗유물관』에서는 인류가 장미를 씨앗 단계에서부터 가꾸고 저장해왔던 삶의 흔적을 탐구합니다. 전시관은 약 20여 종의 고대 장미 씨앗 유물을 통해 ‘씨앗으로 본 장미의 시간’을 선보입니다.
                </Typography>
            </Box>

            {/* 왜 씨앗인가 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    2. 왜 '씨앗'인가
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    장미는 흔히 꽃으로서 사랑·미·향기를 상징하지만, 그 근간에는 ‘씨앗’이라는 생명의 시작이 있습니다. 씨앗은 과거로부터 현재로 이어지는 연속성의 매개이자, 장미가 다양한 문화권에서 어떻게 자리잡았는지를 보여주는 핵심 단서입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 야생 장미가 인류 곁으로 와 재배의 단계로 진입할 때 씨앗이 중요한 역할을 했습니다.
                </Typography>
            </Box>

            {/* 역사 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    3. 고대부터 이어진 장미의 역사
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 장미속(Genus Rosa)의 식물은 화석 증거 상 약 3,500만 년 전부터 존재한 것으로 보입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 재배는 약 5,000년 전 중국에서 시작된 것으로 알려져 있습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 유럽에서는 Rosa gallica(갈리카장미)가 기원전 12세기경부터 재배되었을 가능성이 제기됩니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 고대 로마 시대에는 장미가 향수·제례·연회 등 다양한 용도로 사용되었습니다.
                </Typography>
            </Box>

            {/* 전시 흐름 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    4. 전시의 주요 흐름
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 기원과 자연상태: 야생 장미의 등장과 씨앗·식물 형태로 본 자연상태
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 고대 재배와 활용: 고대 중국·중동·유럽의 재배와 문화·경제적 활용 양상
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 씨앗 → 변종 → 현대 품종: 번식과 교배의 흐름을 통해 현대 장미가 형성된 과정
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 한국·아시아 맥락: (해당 유물이 있는 경우) 지역적 의미와 생태·문화적 특성 소개
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 미래를 위한 보존과 가능성: 복원 가능성, 기후변화와 유전자 다양성 관점에서의 논의
                </Typography>
            </Box>

            {/* 유물 관찰 포인트 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    5. 유물 관찰 포인트
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 씨앗의 형태·크기·색상: 외형을 통해 종 또는 품종군을 추정합니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 발견 지리·연대적 배경: 어떤 문화권에서 어떻게 인식되었는지 힌트를 제공합니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 씨앗이 지닌 스토리: 약용·제례·향료용 등 품종별 배경을 함께 소개합니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 재배 가능성: 일부 씨앗은 복원·재배 실험으로 생명력을 되살릴 수 있습니다.
                </Typography>
            </Box>

            {/* 전시 중요성 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                    6. 전시의 중요성
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    장미는 단순한 '꽃'을 넘어 인류 문명과 깊이 얽혀온 식물입니다. 씨앗 유물은 과거와 현재를 잇는 연결고리로, 생물다양성과 문화다양성의 관점에서 중요한 자료가 됩니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - '고대장미'는 현대 품종과 다른 향·형태·생태적 특징을 지니며, 잃어버린 유전자 자원과 자연의 지혜를 드러냅니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 관람객은 씨앗 → 식물 → 문화로 이어지는 흐름을 통해 '생명의 시간'을 체험할 수 있습니다.
                </Typography>
            </Box>

            {/* 메시지 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                    7. 방문자에게 전하고 싶은 메시지
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: 'italic' }}>
                    “씨앗 하나에 담긴 수천 년의 기억, 그 위에 오늘 우리의 장미가 피어납니다.”
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    전시를 통해 장미가 어떻게 사람과 함께 숨쉬어 왔는지 느껴보시고, 이 씨앗이 다시 싹을 틔울 가능성을 상상하며 생태와 문화가 함께 살아가는 미래를 그려보시길 바랍니다.
                </Typography>
            </Box>
        </Paper>
    );

    const Exhibit2 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                세계의 야생장미(野生薔薇, wild roses)
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                세계의 야생장미, 인류 문명과 자연이 만나는 씨앗
            </Typography>

            {/* 이미지 갤러리 */}
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                    mt: 4,
                }}
            >
                {[
                    '/museum/4.jpg',
                    '/museum/5.jpg',
                    '/museum/6.webp',
                    '/museum/7.jpg',
                    '/museum/8.jpg',
                    '/museum/9.jpg',
                ].map((src, index) => (
                    <Box key={index} sx={{ width: '100%', height: 200, overflow: 'hidden', borderRadius: 2 }}>
                        <img
                            src={src}
                            alt={`야생장미 이미지 ${index + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </Box>
                ))}
            </Box>

            {/* 야생장미란 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    1. 야생장미란
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    야생장미(영어: species roses 또는 wild roses)는 사람의 인위적 육종 없이 자연 상태에서 자생하는 Rosa 속 식물입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    일반적으로 꽃잎이 5장인 홑꽃이며, 과 → 열매(장미열매/hips)로 번식하고, 다양한 기후와 지형에 적응했습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    전 세계적으로 약 130~250종이 존재하며, 유전적 다양성으로 자연환경 적응, 번식 전략, 품종 육종의 기초 자료로 중요합니다.
                </Typography>
            </Box>

            {/* 분포와 특징 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    2. 분포와 주요 특징
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gap: 2,
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                        mt: 2,
                    }}
                >
                    {[
                        '/museum/10.png',
                        '/museum/11.png',
                        '/museum/12.webp',
                        '/museum/13.jpg',
                        '/museum/14.jpg',
                        '/museum/15.jpg',
                    ].map((src, index) => (
                        <Box key={index} sx={{ width: '100%', height: 200, overflow: 'hidden', borderRadius: 2 }}>
                            <img
                                src={src}
                                alt={`야생장미 이미지 ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </Box>
                    ))}
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    아시아 지역에서 가장 많은 종이 발견되며, 유럽과 북미에도 일부 분포합니다. 산지, 들판, 해안가, 고지대, 숲 가장자리 등 다양한 환경에 적응합니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    강인성이 높고 병충해 및 기후변화에 비교적 잘 적응하며, 홑꽃 구조와 장미열매(rose hips)가 특징입니다.
                </Typography>
            </Box>

            {/* 생태·문화적 의미 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    3. 생태·문화적 의미
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gap: 2,
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                        mt: 2,
                    }}
                >
                    {[
                        '/museum/16.jpg',
                        '/museum/17.webp',
                        '/museum/18.jpg',
                        '/museum/19.jpg',
                        '/museum/20.jpg',
                        '/museum/21.webp',
                    ].map((src, index) => (
                        <Box key={index} sx={{ width: '100%', height: 200, overflow: 'hidden', borderRadius: 2 }}>
                            <img
                                src={src}
                                alt={`야생장미 이미지 ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </Box>
                    ))}
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    야생장미는 토양 고정, 침식 방지, 생물 다양성 유지에 기여합니다. 또한 Rosa canina 등은 전통적으로 약용·식용으로 사용되어 왔으며, 현대 원예장미의 조상 역할도 합니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    반복개화 등 육종적 특성 연구에 중요한 자료가 됩니다.
                </Typography>
            </Box>

            {/* 세계 주요 야생장미 10종 */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    4. 세계 주요 야생장미 10종
                </Typography>

                <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>학명</TableCell>
                                <TableCell>주요 자생지</TableCell>
                                <TableCell>형태 형질</TableCell>
                                <TableCell>생태·유전 특징</TableCell>
                                <TableCell>문화·역사 이용</TableCell>
                                <TableCell>전시 활용 포인트</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {wildRosesData.map((row) => (
                                <TableRow key={row.no}>
                                    <TableCell>{row.no}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.distribution}</TableCell>
                                    <TableCell>{row.morphology}</TableCell>
                                    <TableCell>{row.ecology}</TableCell>
                                    <TableCell>{row.cultural}</TableCell>
                                    <TableCell>{row.exhibit}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                        5. 요약 학술 해설 포인트
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 종다양성(Diversity) : 전 세계 약 130–250 야생 Rosa 종 기록, 약 50% 아시아 기원 (중국·히말라야·한국 포함)
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 형태학적 특징 : 대부분 홑꽃 (5 petals), 작은 잎, 가시 발달, 장미열매(hip) 형성
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 유전적 의의 : 현대 재배장미(Rosa hybrida)의 모계 라인 = R. chinensis, R. gallica, R. moschata, R. damascena
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 문화적 연속성 : 고대 페르시아–로마–중세–동아시아까지 향료·약용·상징 식물로 전파
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 보존·연구 가치 : 야생 유전자는 기후위기 대응형 육종, 내병성 품종 개발 핵심 자원
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );

    const Exhibit3 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                한국의 야생장미
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                한국 산야에서 자생하는 다양한 야생장미 종과 그 생태·문화적 의미를 살펴봅니다.
            </Typography>

            {/* 이미지 갤러리 */}
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                    mt: 4,
                }}
            >
                {[
                    '/museum/22.jpg',
                    '/museum/23.jpg',
                    '/museum/24.jpg',
                ].map((src, index) => (
                    <Box key={index} sx={{ width: '100%', height: 200, overflow: 'hidden', borderRadius: 2 }}>
                        <img
                            src={src}
                            alt={`한국 야생장미 이미지 ${index + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </Box>
                ))}
            </Box>

            {/* 1. 주요 자생종 예시 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    1. 주요 자생종 예시
                </Typography>
                <ul>
                    <li>
                        <strong>Rosa multiflora (찔레)</strong> - 한국 산야에 널리 분포, 접목용 대목으로도 활용됨.
                    </li>
                    <li>
                        <strong>Rosa rugosa (해당화)</strong> - 해안가 모래밭 등에서 자주 발견.
                    </li>
                    <li>
                        <strong>Rosa davurica (생열귀나무)</strong> - 북부·고지대 직립형 자생종.
                    </li>
                    <li>
                        <strong>Rosa banksiae (목향장미)</strong> - 한국 식재, 원산지는 중국.
                    </li>
                </ul>
            </Box>

            {/* 2. 자생환경 및 특징 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    2. 자생환경 및 특징
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    자생지는 산야, 들판, 해안가, 고지대 등 다양하며, 형태적으로 가시가 있고, 잎은 우상복엽, 꽃은 홑꽃 또는 겹꽃 형태를 가집니다. 찔레는 접목용 대목으로 쓰이는 실용적 가치가 있습니다.
                </Typography>
            </Box>

            {/* 3. 문화·역사적 맥락 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    3. 문화·역사적 맥락
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    한국에서는 옛 문헌과 민속에서 해당화, 찔레 등을 장미 계열로 인식해왔으며, ‘민괴(玟瑰)’라는 명칭도 사용되었습니다. 자생 장미는 현대 원예품종의 기초가 되기도 합니다.
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                        [1] <a href="https://beautynury.com/hnc/printing_ajax/21917/cat/40/page/1?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">토종의 야생장미, 찔레와 해당화 (Beautynury)</a>
                        <br />
                        [2] <a href="https://agri.jeju.go.kr/files/board/%EB%8C%80%EB%AA%A9%EC%9D%98%20%EC%A2%85%EB%A5%98%EC%99%80%20%ED%8A%B9%EC%84%B1.pdf?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">절화장미에 이용하는 대목의 종류와 특성 (제주농업기술원)</a>
                        <br />
                        [3] <a href="https://tnknam.tistory.com/751?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">327 생열귀나무 - 우리나라 토종 장미 (낙은재)</a>
                        <br />
                        [4] <a href="https://species.nibr.go.kr/home/mainHome.do?contCd=009002&cont_link=009&ktsn=120000061879&subMenu=009002&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">목향장미 - 한반도의 생물다양성 (국립생물자원관)</a>
                        <br />
                        [5] <a href="https://domountain.tistory.com/17958688?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">장미 Rose - 산에는 꽃이 피네 (티스토리)</a>
                        <br />
                        [6] <a href="https://www.gardening.news/news/articleView.html?idxno=20165&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">현대 장미 육종에 의미 있는 역할, 동북아 야생 장미</a>
                    </Typography>
                </Box>
            </Box>

            {/* 4. 씨앗 및 열매 사진 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    4. 씨앗 및 열매 사진자료
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gap: 2,
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                        mt: 2,
                    }}
                >
                    {[
                        '/museum/25.jpg',
                        '/museum/26.jpg',
                        '/museum/27.gif',
                        '/museum/28.webp',
                        '/museum/29.png',
                        '/museum/30.jpg',
                        '/museum/31.jpg',
                        '/museum/32.jpg',
                    ].map((src, index) => (
                        <Box key={index} sx={{ width: '100%', height: 200, overflow: 'hidden', borderRadius: 2 }}>
                            <img
                                src={src}
                                alt={`한국 야생장미 씨앗/열매 ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* 5. 고대 씨앗 유물 가설 + 역사적 이용 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    5. 고대 씨앗 유물 가설 및 연대별 역사적 이용사례
                </Typography>
                <TableContainer component={Paper} sx={{ maxHeight: 500, mt: 2 }}>
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>종명</TableCell>
                                <TableCell>고대 씨앗 유물 가설</TableCell>
                                <TableCell>연대별 이용사례</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {koreanWildRosesData.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.seedHypothesis}</TableCell>
                                    <TableCell>{row.usageHistory}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    [1] <a href="https://stock.adobe.com/search?k=rosehip+seed&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                    Rosehip Seed Images – Browse 7703
                </a>
                    <br />
                    [2] <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10758878/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                    Beneficial medicinal effects and material applications of rose – PMC
                </a>
                    <br />
                    [3] <a href="https://www.motherearthliving.com/gardening/plant-profile/wild-rose-history-and-benefits-zm0z18jazols/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                    Wild Roses: History & Health Benefits – Mother Earth Living
                </a>
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
                    박물관 속의 박물관
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs value={mainTab} onChange={handleMainTabChange} centered>
                    <Tab label="고대장미의 역사" />
                    <Tab label="세계의 야생장미" />
                    <Tab label="한국의 야생장미" />
                    <Tab label="유물" />
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

export default Museum;
