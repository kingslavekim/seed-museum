import {
    Accordion, AccordionSummary,
    Box,
    Breadcrumbs,
    Divider,
    Link, Paper,
    Stack, Tab, Tabs,
    Typography,
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const SeedStory = () => {
    const navigate = useNavigate();
    const [mainTab, setMainTab] = useState(0);

    const handleMainTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Exhibit1 = () => {
        const stories = [
            {'title': '100세 어머니의 노아의 방주 속에서 찾아낸 참깨', body: '1.pdf'},
            {'title': '백제울 ‘씨토쟁이’ 정근형의 쥐눈이콩', body: '2.pdf'},
            {'title': '자린고비 ‘장호생이 닮은 놈‘이 지킨 오이', body: '3.pdf'},
            {'title': '추사가 사랑했던 서산의 생강', body: '4.pdf'},
            {'title': '장마 홍수 속에서 건져낸 씨종자, 울릉도 황금 옥수수 (울릉도 토종 수집기 (1))', body: '5.pdf'},
            {'title': '부끄러워 감춰버린 홍감자를 찾아라. (울릉도 토종씨앗 수집기 (2))', body: '6.pdf'},
            {'title': '종콩밥이 웬수여, 묘순이의 살인사건에 연루된 종콩', body: '7.pdf'},
            {'title': '곰태곤이 쓰러지자 나타난 돌동부', body: '8.pdf'},
            {'title': '짐을 버려야 사는 1.4 후퇴, 그리고 봇짐 속의 감참외', body: '9.pdf'},
            {'title': '비주류들이 지켜낸 마늘, 가의도 육 쪽 마늘', body: '10.pdf'},
            {'title': '김숙자 할머니의 회한의 토종 텃밭', body: '11.pdf'},
            {'title': '마루 틈새에 남아있는 부룩빼기 그루팥 두 알', body: '12.pdf'},
            {'title': '베틀콩 할머니, 시장을 장악하다. 단골들이 지켜낸 베틀콩', body: '13.pdf'},
            {'title': '메밀꽃 무렵에 없어진 토종 메밀', body: '14.pdf'},
            {'title': '화려한 제주 방언의 마법사, 조', body: '15.pdf'},
            {'title': '그는 내게로 와서 꽃이 되었다. 구억배추', body: '16.pdf'},
            {'title': '감저, 제주도를 닮다.', body: '17.pdf'},
            {'title': '하동의 야생차는 작설이 아니라 ‘잭설’이다.', body: '18.pdf'},
            {'title': '조선의 두유, 세모승. 하나가리 콩을 지키는 사람들 ', body: '19.pdf'},
            {'title': '정감록의 신념이 지켜낸 토종 밀', body: '20.pdf'},
            {'title': '홀아비 밤콩은 그리움이다.', body: '21.pdf'},
            {'title': '가마와 함께 시집온 씨앗 세 알, 연지동제의 멋쩍은 웃음을 닮은 정 할머니', body: '22.pdf'},
            {'title': '자연이 지키고 있는 산청에서 온 의성배추', body: '23.pdf'},
            {'title': '집성촌에서 지켜낸 씨, 성환 개구리참외', body: '24.pdf'},
            {'title': '집성촌에서 지켜낸 씨, 성환 개구리참외', body: '25.pdf'},
            {'title': '설렘이 세 번이면 그것은 사랑이 된다. 이육사 고추', body: '26.pdf'},
            {'title': '지독한 농사꾼을 만나 정체성을 바꿔버린 매꼬지 상추', body: '27.pdf'},
            {'title': '만리포 사랑, 백도라지에 공들인 자식 사랑', body: '28.pdf'},
            {'title': '애오라지 정선의 삶, 김종복 할아버지의 단미콩', body: '29.pdf'},
            {'title': '너와 지붕에서 지켜낸 백두산 최 씨 일가의 대파 이야기', body: '30.pdf'},
            {'title': '지못미, 돌산갓 뒤에 숨어 버린 토종 돌산갓', body: '31.pdf'},
            {'title': '지못미 자광벼, 마지막 토종벼의 이삭 한 터럭', body: '32.pdf'},
            {'title': '지못미, 순채. 30년 된 순채 순 하나 얻다. 끝내 지켜내지 못한 예산의 순채', body: '33.pdf'},


        ];

        return (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Box
                    sx={{
                        display: 'flex', // Flexbox 레이아웃 적용
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4, // Box 간 간격
                    }}
                >
                    {/* 왼쪽: 책 이미지 */}
                    <Box
                        component="img"
                        src="/seedStory/book.png"
                        alt="책 이미지"
                        sx={{
                            width: { xs: '100%', md: 400 },
                            height: { xs: 'auto', md: 600 },
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />

                    {/* 오른쪽: 이야기 리스트 */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                        }}
                    >
                        {stories.map((story, index) => (
                            <Accordion key={index} sx={{ mb: 1 }}>
                                <AccordionSummary
                                    expandIcon={<NavigateNextIcon />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    onClick={() => window.open(`/seedStory/${story.body}`, '_blank')}
                                >
                                    <Typography>{story.title}</Typography>
                                </AccordionSummary>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Paper>
        )
    };

    const Exhibit2 = () => {
        const stories = [
            {'title': '구만리 포구의 사라져가는 디미방, 덤벙김치', body: '100.pdf'},
            {'title': '금치리의 썩은 김치를 잇고 있는 할머니들의 디미방', body: '101.pdf'},
            {'title': '대천리 마실 놀이와 그늘장', body: '102.pdf'},
            {'title': '복놀이와 변해가는 어죽의 디미방', body: '103.pdf'},
            {'title': '사라진 백제, 사라진 놀이, 공마당 놀이', body: '104.pdf'},
            {'title': '시목리의 숨겨징 디미방 맨간장', body: '105.pdf'},
            {'title': '식탐의 군침이 속절없이 흐르는 생강의 디미방', body: '106.pdf'},
            {'title': '예산읍 대회리의 상여 놀이와 으름음식', body: '107.pdf'},
            {'title': '조선시대 컬러푸드의 진수가 남아 있는 음청(飮淸) 디미방, 청보리 수단', body: '108.pdf'},
            {'title': '환경에 밀려 사라진 삽교 순채 디미방', body: '109.pdf'},
        ];

        return (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Box
                    sx={{
                        display: 'flex', // Flexbox 레이아웃 적용
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4, // Box 간 간격
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                        }}
                    >
                        {stories.map((story, index) => (
                            <Accordion key={index} sx={{ mb: 1 }}>
                                <AccordionSummary
                                    expandIcon={<NavigateNextIcon />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    onClick={() => window.open(`/seedStory/${story.body}`, '_blank')}
                                >
                                    <Typography>{story.title}</Typography>
                                </AccordionSummary>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Paper>
        )
    };

    const Exhibit3 = () => {
        return (
            <Paper elevation={3} sx={{p: 4, borderRadius: 2}}>
            </Paper>
        );
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => {
            navigate('/seed/'); }}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            씨앗이야기
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
                    씨앗이야기
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs
                    value={mainTab}
                    onChange={handleMainTabChange}
                    centered
                >
                    <Tab label="수집 이야기 - 책 이야기" />
                    <Tab label="수집 이야기 - 음식 이야기" />
                    <Tab label="수집 이야기 - 수집 사진" />
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

export default SeedStory;