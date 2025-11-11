import {Typography, Stack, Box, Breadcrumbs, Divider, Link, Tab, Tabs, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Pdisplay = () => {
    const navigate = useNavigate();
    const [mainTab, setMainTab] = useState(0); // 상위 탭 (제1관, 제2관 등) 관리
    const [subTab, setSubTab] = useState(0); // 하위 탭 (제2관 내부 야생콩, 기증실 등) 관리

    const handleMainTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
        setSubTab(0); // 메인 탭 이동 시, 항상 첫 번째 하위 탭으로 초기화
    };

    const handleSubTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setSubTab(newValue);
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => { navigate('/seed/'); }}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            전시
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            상설 전시
        </Typography>,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 제1관 내용
    const Exhibit1 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                제1관
            </Typography>
            <Stack spacing={3}>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                    작지만 깊은 생명의 이야기, 씨앗 속에 담긴 시간과 맛의 풍경
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    제1 상설전시관은 팥, 녹두, 강낭콩을 중심으로 구성되어 있습니다. 이 작고 평범한 듯 보이는 씨앗들은 지역과 사람, 기후와 문화에 따라 모양도, 색도, 크기도, 맛도 놀라울 만큼 다양합니다. 바로 그 '차이'의 이야기, 그리고 '변화의 흔적'이 바로 토종이고, 이 공간은 그것을 들여다보는 공간입니다.
                </Typography>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        🌱 지역에 따라 달라지는 씨앗의 얼굴
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 팥 하나에도 충청도 팥, 강원도 팥, 제주 팥이 서로 다른 색과 크기를 지닙니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 녹두도 어떤 지역은 둥글고, 어떤 지역은 타원형에 가까우며, 강낭콩의 줄무늬 패턴도 지역마다 다릅니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 그 차이는 땅의 기후, 재배자의 선택, 전통 음식 문화와도 연결되어 있습니다.
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        🌾 분화의 흔적, 맛의 다양성
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 씨앗은 같은 종이더라도 시간이 지나며 환경에 적응하고 스스로 분화합니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 맛 또한 미묘하게 다릅니다. 어떤 팥은 단맛이 더 감돌고, 어떤 강낭콩은 밥 넣었을 때 풍미가 더 짙습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 맛의 차이는 단지 혀로 느끼는 것이 아니라, 조리법, 기후, 먹는 방식 등과도 관련이 있습니다.
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        📖 씨앗에 깃든 서사, 이야기가 된 종자
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 어떤 씨앗은 조상의 혼례 음식에, 어떤 씨앗은 가뭄을 견디던 시절의 생존 음식으로 남아있습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 누군가의 기억 속 토종씨앗은 단지 생물학적 재료가 아니라, 가문과 마을의 역사이자 '살아있는 기록'입니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 상설전시관은 그 이야기 하나하나를 귀 기울여 듣고 연결하는 공간입니다.
                    </Typography>
                </Box>

                <Box>
                    <Divider />
                    <Typography
                        variant="body1"
                        sx={{ textAlign: 'center', fontWeight: 'bold', mt: 3, fontStyle: "italic" }}
                    >
                        씨앗 하나에도, 마을 하나가 담겨 있다. 상설전시관은 씨앗을 통해 시간을 걷고, 문화를 만나는 여정을 제공합니다.
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );

    // 제2관 내용
    const Exhibit2: { [key: number]: () => React.ReactNode } = {
        0: () => (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    야생콩
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                    콩의 시작, 야생에서 미래까지
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    이 전시관은 크게 세 구역으로 나뉘어 있으며, 그 중심에는 ‘야생콩 전시 구역’이 자리잡고 있습니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    야생콩, 콩의 원형을 만나다
                </Typography>
                <Stack spacing={3}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        우리가 오늘날 먹는 콩, 팥, 동부는 모두 오랜 세월에 걸쳐 야생콩으로부터 식량작물화 된 것입니다. 야생콩은 지금의 콩보다 크기가 작고, 잘 익지 않으며 사람의 손을 거치지 않아 거친 야생성을 지닌 종자입니다. 그럼에도 일부 품종은 진화를 통해 작물 수준의 크기와 맛으로 가까워지고 있습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        야생콩은 세계적으로도 다양하게 분포합니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 아시아: 한반도, 중국, 일본 등지에 자생하는 콩의 조상종
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 아프리카: 야생동부와 비슷한 종들 다수 존재
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 아메리카: 강낭콩, 리마콩의 야생형이 다양한 기후대에 퍼져 있음
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 특히 한반도는 야생콩의 유전적 다양성이 매우 높은 지역으로 평가받고 있습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        이러한 야생콩들은 단지 식물학적 가치에 그치지 않고, 기후위기 시대 유전자 자원의 보고로 주목받고 있습니다.
                    </Typography>
                </Stack>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    전시물 이야기
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 삼국시대 탄화콩: 불에 타 숯처럼 남은 작은 콩, 삼국시대 유적으로부터 출토되었습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 야생콩·야생팥: 연구자의 기증으로 보존된 귀중한 종자들입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 돌동부: 시산리 마을 하천 둑에서 자생력을 보여준 야생 동부입니다.
                </Typography>

                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', fontWeight: 'bold', mt: 4, fontStyle: "italic" }}
                >
                    야생콩 전시관은 '콩의 원형'을 되돌아보며, 씨앗의 과거를 통해 미래를 상상해보는 공간입니다.
                </Typography>
            </Paper>
        ),

        1: () => (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    이천여중 기증실
                </Typography>
                <Stack spacing={3}>
                    <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                        “한 교사의 씨앗 수업, 시간이 지나 박물관이 되다”
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        이 공간은 이천여자중학교의 과학 선생님께서 1993년 수집한 토종씨앗 유물을 전시하고 있는 특별한 장소입니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        당시 선생님은 학생들에게
                        “우리가 사는 지역에서 어떤 작물이 자라고 있었는지,
                        그 작물 하나하나가 왜 소중한지” 알려주고자
                        직접 이천 일대의 토종작물을 찾아
                        학생들과 함께 채집·분류·보관하셨습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        그 결과, 과학실에는
                        430여 종의 토종작물 씨앗이
                        교육 자료로 보관되기 시작했습니다.
                        이 씨앗들은 단순한 표본이 아니라,
                        지역의 농업과 생물다양성, 그리고 교육의 현장을 담은
                        살아 있는 기록이었습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        시간이 흐르며 선생님은 작고하시고,
                        이천 지역은 빠르게 도시화되며
                        학교는 공간을 새롭게 정비하게 되었습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        그때, 박물관으로 연락하여 기증하게 된 것입니다.
                        바로 이 씨앗들입니다.
                        교육을 위한 수집품이, 지금은 유물로서 박물관에 자리하게 된것입니다.
                    </Typography>
                </Stack>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    기증 유물의 의의
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 전체 430여 종의 씨앗 중 다수는 오늘날 유통되거나 재배되지 않는 품종입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 이 씨앗들을 보면 단지 농작물이 사라진 것이 아니라, 지역의 생태·식문화·생활사가 함께 사라졌음을 실감하게 됩니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 이 기증실은 교육과 씨앗, 기억과 보존의 관계를 되돌아보게 하는 공간입니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    관람 포인트
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 교사의 손에서 시작된 토종 보존의 씨앗
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 학생들과 함께했던 지역 생물다양성 교육의 현장
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 잊혀졌지만 살아있는 종자와 문화의 기록
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic", mt: 3, mb: 3 }}>
                    한 사람의 교육이, 한 박물관의 미래가 되었습니다.
                </Typography>
                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    헌정 구절
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                    이 전시는 한 선생님께 바칩니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    지역의 토종을 수업으로 품고, 아이들과 함께 이름 없는 씨앗 하나하나에 생명을 불어넣으셨던 분.
                    그 가르침은 이제 미래 세대의 씨앗이 되어 자라고 있습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic", mt: 1, textAlign: "center" }}>
                    “지켜야 한다고 배운 씨앗은, 결국 지켜지게 됩니다.”
                </Typography>
            </Paper>
        ),

        2: () => (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    콩의 나라 대한민국
                </Typography>
                <Stack spacing={3}>
                    <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                        “천 년의 기억. 콩으로 읽는 한반도”
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        이 전시관은 ‘콩의 나라 대한민국’을 주제로
                        한반도의 주곡이자 삶의 밥상이었던 콩의 역사와 다양성,
                        그리고 콩과 함께 걸어온 우리 민족의 지혜와 문화를 전시하고 있습니다.
                    </Typography>
                </Stack>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    한반도, 콩의 고향
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    콩은 한반도의 대표 식량작물입니다.
                    그 뿌리는 깊고도 오래되었으며,
                    한반도 북단 두만강 유역은 야생콩이 자생하던 콩의 원산지로 알려져 있습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    두만강(豆滿江)이라는 이름 자체가
                    ‘콩으로 가득 찬 강’이라는 뜻을 담고 있을 만큼,
                    콩은 이 땅에서 수천 년 동안 재배되어 왔습니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    콩, 식량을 넘어 문화가 되다
                </Typography>
                <Stack spacing={1}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 장콩: 간장과 된장을 담그는 데 쓰이며, 우리나라의 장문화 발전에 절대적인 기여를 한 품종입니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 밥밑콩: 서리태, 선비잡이콩 등 밥에 넣어 단백질을 보완하던 시대의 대표 품종입니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 가루콩: 수박태 등 가루를 내어 떡, 부침, 국수 등 다양한 음식에 쓰였습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 콩나물콩: 베틀콩, 백태 등은 콩나물 전용 품종으로 쓰였습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 약용콩: 쥐눈이콩 등은 민간요법과 약재로 활용되어 왔습니다.
                    </Typography>
                </Stack>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                    이처럼 콩은 생김새, 쓰임새, 이름, 전통문화까지
                    다양하게 분화되어 수백 종에 이릅니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    콩에 담긴 이야기
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    우리 민족은 콩을 단지 음식 재료로만 여기지 않았습니다.
                    콩에는 전설도 있고, 설화도 있고, 민요도 있습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    씨앗 하나에 계절의 흐름, 가족의 기억, 민중의 생존 지혜가 함께 담겨 있습니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    이 전시관에서 주목하세요
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 두만강에서 시작된 콩의 여정
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 간장·된장·콩나물… 전통 식문화로 이어지는 콩의 진화
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 서리태, 수박태, 선비잡이콩… 수백 종의 토종콩 실물 전시
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 콩의 민속 설화와 이름의 아름다움
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 야외 특별전시 ‘천개의 이름으로 한반도를 노래하다’ 토종벼와의 연결
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    콩의 세계적 분포도
                </Typography>
                <Box
                    sx={{
                        display: "grid",
                        gap: 2,
                        gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(2, 1fr)" },
                    }}
                >
                    {Array.from({ length: 6 }, (_, i) => (
                        <Box key={i} component="div" sx={{ width: "100%" }}>
                            <img
                                src={`/pdisplay/${i + 1}.${i === 3 ? "jpg" : "png"}`}
                                alt={`콩의 세계적 분포도 ${i + 1}`}
                                style={{ width: "100%", height: "auto", borderRadius: "8px", display: "block" }}
                            />
                        </Box>
                    ))}
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography variant="body1" sx={{ textAlign: "center", fontStyle: "italic", fontWeight: "bold", mt: 3 }}>
                    “콩의 나라 대한민국”은 씨앗을 통해 우리 민족의 음식과 삶, 문화와 뿌리를 돌아보는 자리입니다.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center", fontStyle: "italic", mt: 2 }}>
                    이 작고 단단한 콩 한 알이<br/>
                    우리의 기억을 지키고,<br/>
                    한반도의 노래를 부릅니다.
                </Typography>
            </Paper>
        ),

        3: () => (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                    토종벼
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic", mb: 2 }}>
                    이 공간은 한 알의 벼가 한반도에서 천 개의 이름을 얻기까지,
                    이 전시는 우리 땅의 쌀 이야기입니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    토종벼, 외래에서 우리 것이 되기까지
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    벼는 본래 인도에서 유입된 외래작물이었습니다. 하지만 약 2000년 전
                    한반도에 들어온 벼는 우리 땅과 기후, 사람의 손에 따라 변화하며 이
                    땅의 고유한 작물, 토종벼로 분화하게 됩니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    천 개의 이름, 천 가지의 생김새
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                    조선시대 문헌에 기록된 것만 해도 1000여 종이 넘는 토종벼가
                    있었습니다. 이름도 다양하고, 모양도 색도 맛도 제각각이었습니다.
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 조·적·청·황색으로 나뉘는 색상
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 찰기·길이·수확시기 다양한 특성
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 각 마을과 지역 이름을 딴 토종벼 존재
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    보존과 기록의 중요성
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    오늘날 대부분의 토종벼는 상업용 벼에 밀려 사라졌습니다.
                    이 전시는 남아 있는 토종벼를 보존하고 기록하여 미래 세대에
                    전달하기 위한 공간입니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    관람 포인트
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 전통 농경지에서 자라던 토종벼 사진과 실물 전시
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 벼 이름과 지역 이름의 유래 설명
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                    - 한반도 농업의 역사와 토종벼의 변화 과정
                </Typography>
            </Paper>
        ),

        4: () => (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                    토종보리와 앉은뱅이밀
                </Typography>

                <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
                    오래된 곡식, 오늘의 가치
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    토종보리 — 인내와 생명의 씨앗
                </Typography>
                <Stack spacing={2}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        보리는 우리 민족의 시작과 함께해온 가장 오래된 곡식입니다.
                        『삼국유사』에는 기원전 1세기, 주몽이 부여의 핍박을 피해 남하할 때
                        어머니 유화가 비둘기 목에 보리를 매달아 아들에게 보냈다는 이야기가 전해집니다.
                        이는 보리가 단순한 식량이 아니라 생명과 사랑의 상징으로 전해졌음을 보여줍니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        『삼국사기』에서도 보리는 쌀과 함께 오곡 중 하나로 기록되어 있으며,
                        실제 유적 발굴에서도 경기도 여주 점동유적에서 기원전 5~6세기경의 보리 흔적이 출토되어,
                        우리 땅에서 재배된 역사가 이미 2천 년을 넘어섰음을 증명합니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        그러나 보리는 풍요의 상징이자 동시에 민중의 애환을 품은 곡식이기도 합니다.
                        가난을 표현할 때 우리는 "보리피죽도 못 먹었다.", "보리고개를 넘기 힘들었다."라고 말해왔습니다.
                        그만큼 보리는 결핍의 시절을 견뎌낸 생명력의 상징이었습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        겨울의 냉기를 이겨내고 봄 햇살 속에 다시 푸르게 일어나는 보리밭은
                        우리 조상들의 인내와 생명의 의지를 닮았습니다.
                        그래서 보리는 늘 "가난했지만 꺾이지 않은 삶"의 상징으로 기억됩니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        오늘날 토종보리는 건강식으로 다시 주목받고 있습니다.
                        그 향과 색, 그리고 단단한 알맹이는 우리 몸과 마음을 단단하게 해주는 자연의 선물입니다.
                        한국토종씨앗박물관은 이 오래된 곡식, 토종보리를 통해
                        지속 가능한 생명과 농업의 미래를 함께 이야기합니다.
                    </Typography>
                </Stack>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    앉은뱅이밀 — 우리 땅의 토종밀 이야기
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    우리 민족이 시작부터 함께해 온 밀, 그 가운데 특히 '앉은뱅이밀'이라 불리는 토종밀은
                    작지만 의미가 큰 작물입니다.
                </Typography>
                <Stack spacing={2} sx={{ pl: 4 }}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 앉은뱅이밀은 키가 작아 약 50~80cm에 불과해 '앉은뱅이'라는 이름이 붙었습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 이 밀은 병해충에 강하고 도복에 덜 약해 우리 땅의 기후와 토양에 잘 적응해 왔습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 재배 역사는 오래되어, 기원전 300년경부터 한반도에서 밀 재배가 시작되었다는 기록이 있습니다.
                    </Typography>
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    역사와 문화
                </Typography>
                <Stack spacing={2} sx={{ pl: 4 }}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 한반도 들녘에서 자라며 벼 다음으로 중요한 주식 중 하나였고, 서민의 식탁을 지켜왔습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 20세기 들어 수입 밀에 밀려 재배가 급격히 줄었고, 우리 밀 산업이 위기를 맞았습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 최근에는 건강식·토종식물로서 재평가받아, 농업유산으로서의 가치가 다시 주목받고 있습니다.
                    </Typography>

                </Stack>
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    특징
                </Typography>
                <Stack spacing={2} sx={{ pl: 4 }}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 키가 작고 대가 단단하며, 거센 바람이나 비바람에 쓰러질 위험이 적습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 껍질이 얇고 낱알이 작아 제분했을 때 나오는 가루가 부드럽습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        - 글루텐 함량이 낮아 소화가 잘되고, 건강식으로 주목받고 있는 작물입니다.
                    </Typography>
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Typography variant="body1" sx={{ textAlign: "center", fontStyle: "italic", fontWeight: "bold", mt: 3 }}>
                    앉은뱅이밀은 단순히 과거의 곡식이 아니라,
                    농업생태계와 식량안보, 그리고 로컬 식문화 측면에서 의미 있는 자산입니다.
                    박물관에서는 이 밀을 통해 잊혀진 농업유산이 오늘의 식탁과 미래세대에 어떻게 이어질 수 있는지를 이야기합니다.
                </Typography>
            </Paper>
        ),

        5: () => (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                    땅의 다양성이 빚어낸 생명의 곡식들
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    잡곡은 단순히 밥에 섞어 먹는 곡식이 아닙니다.
                    그 속에는 우리 땅의 생명력, 지역의 기후, 사람의 손길이 함께 깃들어 있습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    한국토종씨앗박물관의 1관 잡곡류 전시실에서는
                    녹두, 팥, 강낭콩, 콩을 비롯하여 수수, 옥수수, 조, 기장, 동부, 완두 등
                    우리 민족의 식생활과 농업문화를 지탱해 온 곡식들을 만날 수 있습니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    잡곡의 역사
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    잡곡은 벼나 보리보다 먼저 재배된 곡식으로,
                    우리 조상들은 기후와 토양에 맞춰 여러 작물을 함께 심으며 다품종 혼합농법을 이어왔습니다.
                    이러한 농사는 흙의 생태 균형을 유지하고, 기근 속에서도 생명을 잇게 한 지혜였습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    신석기 시대 토기 속에서도 조, 기장, 수수의 흔적이 발견되며,
                    삼국시대와 고려, 조선에 이르기까지 잡곡은 늘 서민의 밥상과 절기의 음식에 함께했습니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    잡곡의 종류와 의미
                </Typography>
                <TableContainer component={Paper} sx={{ mt: 1 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>구분</TableCell>
                                <TableCell>주요 작물</TableCell>
                                <TableCell>상징 의미</TableCell>
                                <TableCell>문화적 활용</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>녹두</TableCell>
                                <TableCell>녹색의 두(豆), 해독과 회복의 곡식</TableCell>
                                <TableCell>빈대떡, 청포묵 등 전통 음식</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>팥</TableCell>
                                <TableCell>붉은색이 액운을 막는다고 믿어 새해와 제사에 사용</TableCell>
                                <TableCell>팥죽, 시루떡, 백중 명절 음식</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>강낭콩</TableCell>
                                <TableCell>서양에서 들어왔지만 이제는 우리 밥상의 일부</TableCell>
                                <TableCell>밥, 콩빵, 콩조림</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>콩</TableCell>
                                <TableCell>단백질의 근원, 공동체와 나눔의 상징</TableCell>
                                <TableCell>된장, 두부, 간장, 메주 등</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>수수</TableCell>
                                <TableCell>붉은 빛으로 악귀를 막고 풍년을 기원</TableCell>
                                <TableCell>수수부꾸미, 제사 음식</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>옥수수</TableCell>
                                <TableCell>척박한 땅에서도 잘 자라는 생명력의 작물</TableCell>
                                <TableCell>죽, 전, 간식, 구황작물</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>조·기장</TableCell>
                                <TableCell>인내와 검소함의 상징</TableCell>
                                <TableCell>약식, 절식용 곡물</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>동부</TableCell>
                                <TableCell>덩굴식물로 여름의 녹색 생명력 상징</TableCell>
                                <TableCell>동부콩밥, 청국장 원료</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>완두</TableCell>
                                <TableCell>봄의 작물, 생명 순환의 첫 신호</TableCell>
                                <TableCell>완두죽, 완두조림</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    전시의 구성
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    이 전시관은 곡식 하나하나의 형태와 색, 질감을 그대로 살려
                    손으로 느끼는 씨앗의 다양성을 중심으로 꾸며져 있습니다.
                    각 곡식 옆에는 씨앗의 이름, 재배 지역, 용도, 전통 음식 사진이 함께 전시되어 있어
                    한눈에 씨앗이 밥상으로 이어지는 과정을 이해할 수 있습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    특히 팥과 조의 색채 대비, 콩과 동부의 질감 차이,
                    수수와 옥수수의 구조 비교 등은
                    자연이 만든 디자인이자 생명 다양성의 미학을 보여줍니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    잡곡이 주는 메시지
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    보리나 쌀이 부족하던 시절,
                    잡곡은 사람들의 허기를 달래주고 생명을 이어준 곡식이었습니다.
                    오늘날 우리는 이 곡식들을 건강식으로 다시 찾고 있지만,
                    그 속에는 여전히 땀과 기억, 그리고 땅의 역사가 남아 있습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    잡곡류 전시는 사라져가는 씨앗을 기억하고,
                    다양성이 주는 생명의 힘을 다시 일깨우는 공간입니다.
                </Typography>
            </Paper>
        ),

        6: () => (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                    동부, 여름과 가을을 잇는 씨앗
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    동부는 여름의 더위 속에서도 덩굴을 뻗어
                    하늘을 향해 자라는 강인한 생명력을 지닌 콩입니다.
                    예부터 마을 곳곳 담장 아래, 울타리 옆, 장독대 주변에서
                    그늘과 바람을 타고 자라던 모습은
                    많은 이들의 여름의 기억으로 남아 있습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    덩굴 위에 주렁주렁 열린 꼬투리,
                    검은 눈을 가진 동부콩 한 알은
                    그저 곡식이 아니라
                    계절과 사람, 마을의 기억을 담은 씨앗입니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    지역별 토종 동부의 이야기
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    한국에는 오래전부터 지역마다 다양한 동부콩이 자생하고 재배되어 왔습니다.
                    이 전시는 그런 토종 동부들의 고유한 특징과 아름다움을
                    지역별로 소개합니다.
                </Typography>

                <Stack spacing={1} sx={{ pl: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
                        갓끈동부 (전라남도 순천 등 남해안권)
                    </Typography>
                    <Typography variant="body1">- 자줏빛을 띠는 긴 꼬투리와 작은 씨앗이 특징입니다.</Typography>
                    <Typography variant="body1">- 이름처럼 옛날 갓끈처럼 생겨 붙여진 이름입니다.</Typography>
                    <Typography variant="body1">- 순천에서 오랫동안 재배되었지만, 지금은 거의 사라진 품종입니다.</Typography>
                    <Typography variant="body1">
                        - 현재는 슬로푸드국제재단의 ‘맛의 방주(Ark of Taste)’에 등재되어
                        세계적인 보존 품종으로 주목받고 있습니다.
                    </Typography>
                </Stack>

                <Stack spacing={1} sx={{ pl: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
                        제주 동부콩 (제주도 일대)
                    </Typography>
                    <Typography variant="body1">
                        - 제주도 특유의 따뜻한 해양성 기후에서 자란 품종입니다.
                    </Typography>
                    <Typography variant="body1">
                        - 흰색 또는 얼룩무늬를 가진 작은 씨앗들이 많으며,
                        떡 고명, 밥 고명 등 제주 향토 음식에 널리 쓰였습니다.
                    </Typography>
                    <Typography variant="body1">
                        - 섬의 여름을 닮은, 조용하지만 강한 생명력을 지닌 콩입니다.
                    </Typography>
                </Stack>

                <Stack spacing={1} sx={{ pl: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
                        검은 동부콩 (남부 내륙 및 해안 지역 전역)
                    </Typography>
                    <Typography variant="body1">- 씨앗 껍질이 짙은 갈색 또는 검은빛을 띱니다.</Typography>
                    <Typography variant="body1">
                        - “돈부”, “돔부”, “동부” 등 다양한 이름으로 불리며,
                        나물이나 밥밑콩으로 많이 이용되었습니다.
                    </Typography>
                    <Typography variant="body1">
                        - 여름 내내 자라다가 가을밥상에 오르는
                        농가의 중요한 단백질 공급원이었습니다.
                    </Typography>
                </Stack>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    관람 포인트
                </Typography>
                <Stack spacing={1} sx={{ pl: 4 }}>
                    <Typography variant="body1">
                        - 지역이 달라지면 이름도, 색도, 맛도 달라진다는 점에 주목해보세요.
                    </Typography>
                    <Typography variant="body1">
                        - 단지 작물의 차이를 넘어,
                        지역의 기후와 음식문화, 말의 습관과 이름 짓는 방식이 함께 담겨 있습니다.
                    </Typography>
                    <Typography variant="body1">
                        - 한 알의 콩이, 얼마나 많은 사람들의 삶과 계절, 기억을 담고 있는지
                        느껴보시기 바랍니다.
                    </Typography>
                </Stack>
            </Paper>
        ),

        7: () => (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                    잎으로 피어난 생명의 밥상
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    엽경채류는 잎과 줄기를 먹는 채소를 말합니다.
                    배추, 갓, 상추, 쑥갓, 근대, 시금치, 아욱 등은
                    우리 밥상 위의 가장 친숙한 식물이자,
                    계절과 삶을 잇는 푸른 생명의 상징입니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    우리 밥상의 뿌리, 엽경채류의 역사
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    우리 민족이 곡식을 심기 전부터 키워온 가장 오래된 작물이 바로 잎채소입니다.
                    조선 시대 문헌 『농가집성』과 『산림경제』에도
                    배추, 갓, 상추 등 다양한 엽채가 기록되어 있으며,
                    이는 밥상과 제사, 절기 음식에 없어서는 안 될 존재였습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    봄에는 아욱과 근대가 부드럽게 새순을 틔우고,
                    여름에는 상추와 갓이 밥상의 중심에 오르며,
                    가을과 겨울에는 배추와 시금치가 김장과 국거리로 삶의 끼니를 이어주었습니다.
                    이처럼 엽경채류는 사계절의 순환을 품은 채소, 즉 시간의 채소라 불러도 좋습니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    전시의 구성과 의미
                </Typography>
                <Stack spacing={1} sx={{ pl: 4 }}>
                    <Typography variant="body1">- 배추와 갓 : 김장의 주인공, 저장과 나눔의 상징</Typography>
                    <Typography variant="body1">- 상추와 쑥갓 : 식탁의 신선함, 나눔과 평화의 상징</Typography>
                    <Typography variant="body1">- 근대와 시금치 : 겨울의 생명력, 강인함의 상징</Typography>
                    <Typography variant="body1">- 아욱 : 봄철 입맛을 깨우는 순한 채소, 회복과 치유의 상징</Typography>
                </Stack>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    엽경채류가 전하는 메시지
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    엽경채류는 “매일의 식사 속에 깃든 생명의 철학”을 보여줍니다.
                    한 잎의 초록은 흙과 햇빛, 바람과 물의 조화로 자라며
                    사람의 손을 통해 다시 밥상 위로 돌아옵니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    씨앗에서 잎으로, 잎에서 사람으로 이어지는 그 여정은
                    생명과 돌봄의 순환 그 자체입니다.
                    그래서 엽경채류 전시는 우리에게 이렇게 말합니다.
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: "italic"}}>
                    “하루의 밥상 속에도, 흙의 생명과 계절의 시간이 흐르고 있습니다.”
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    전시 감상 포인트
                </Typography>
                <Stack spacing={1} sx={{ pl: 4 }}>
                    <Typography variant="body1">- 식물별 씨앗 전시와 생장 단계별 영상</Typography>
                    <Typography variant="body1">- 토종배추의 잎맥 모양, 시금치의 결, 아욱 잎의 질감 비교</Typography>
                    <Typography variant="body1">- 김장과 제철 음식 문화에 얽힌 이야기</Typography>
                    <Typography variant="body1">- 어린잎 체험존: 직접 씨앗을 심고 잎을 관찰하는 코너</Typography>
                </Stack>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    전시 의의
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    엽경채류는 눈에 보이는 한 끼의 채소가 아니라,
                    흙과 사람을 이어주는 생명의 언어입니다.
                    한국토종씨앗박물관은
                    이 작물들을 통해 “지속 가능한 먹거리 문화”와
                    “토종식물의 생태적 가치”를 함께 전하고 있습니다.
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="body1" sx={{ textAlign: "center", fontStyle: "italic", fontWeight: "bold", mt: 3 }}>
                    “한 잎의 초록 속에는, 봄의 숨결과 사람의 마음이 함께 피어 있습니다.”
                </Typography>
            </Paper>
        ),

        8: () => (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                    과채·유지·섬유작물 전시관
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    이곳은 수박, 참외, 오이, 박, 호박, 동아 같은 과채류,
                    참깨, 들깨, 땅콩과 같은 유지작물,
                    그리고 목화로 대표되는 섬유작물이 함께 전시된 공간입니다.
                    이 전시관은 “씨앗이 만든 우리의 삶”이라는 주제 아래,
                    우리 조상들의 식탁과 생활, 그리고 문화의 완전한 순환을 보여줍니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    과채류 – 여름의 생명, 달콤한 기억
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    과채류는 열매를 통해 생명을 전하는 식물입니다.
                    수박과 참외는 여름의 달콤한 기억,
                    오이와 박, 호박, 동아는 더운 계절을 견디게 한 생활의 지혜였습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    박은 말려서 그릇과 물통으로,
                    호박은 국거리와 저장식으로,
                    오이는 더위를 식히는 생명의 물로 쓰였습니다.
                    이들은 모두 먹음으로써 자연과 하나가 되는 작물이었습니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    유지작물 – 빛과 향을 담은 씨앗
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    참깨, 들깨, 땅콩은 기름과 향을 선물하는 씨앗입니다.
                    참깨는 고소함으로, 들깨는 향기로, 땅콩은 영양으로
                    우리 식탁과 제사상, 그리고 의례의 공간에 빠지지 않았습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    참깨와 들깨에서 짜낸 기름은
                    음식뿐 아니라 등잔의 불빛으로 사람들의 밤을 밝혔습니다.
                    그 불빛 속에는 씨앗에서 나온 생명의 에너지가 깃들어 있습니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    섬유작물 – 씨앗으로 지은 옷
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    목화는 씨앗에서 솜을 내어
                    우리 몸을 덮고, 집안을 꾸미고, 새로운 문화를 만들어낸 작물입니다.
                    한 톨의 씨앗이 흰 솜이 되고,
                    그 솜이 실이 되어 옷과 이불, 생활의 온기를 전했습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    섬유작물은 먹고 바르는 작물과 함께
                    씨앗이 인간의 삶 전체를 이룬다는 사실을 보여줍니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    전시 구성과 감상 포인트
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    이 전시관에서는
                    씨앗에서 열매·기름·섬유로 이어지는 생명의 순환,
                    과실의 색과 향, 섬유의 질감, 기름의 빛을 함께 느낄 수 있습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    유리관 속의 참깨와 들깨 씨앗은 작은 별처럼 반짝이고,
                    박과 호박의 껍질은 자연의 조형미를 보여줍니다.
                    목화솜은 부드럽게, 그리고 따뜻하게 생명의 완성을 이야기합니다.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                    전시 메시지
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                    “먹고, 바르고, 입는 모든 삶의 시작은 한 톨의 씨앗이었습니다.”
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    씨앗은 우리의 음식이 되고, 빛이 되고, 옷이 되었습니다.
                    이 작은 생명이야말로 인간의 삶을 지탱해온 가장 오래된 동반자입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    이곳에서, 씨앗이 완성한 삶의 순환을 느껴보세요.
                </Typography>
            </Paper>
        )


    };



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
                    상설 전시
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs value={mainTab} onChange={handleMainTabChange} centered>
                    <Tab label="제 1 관" />
                    <Tab label="제 2 관" />
                    <Tab label="기증관" />
                </Tabs>
                <Box sx={{ mt: 2 }}>
                    {mainTab === 0 && <Exhibit1 />}
                    {mainTab === 1 && (
                        <>
                            {/* 제2관 하위 탭 */}
                            <Tabs
                                value={subTab}
                                onChange={handleSubTabChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                sx={{
                                    borderBottom: 1,
                                    borderColor: "divider",
                                    mb: 2,
                                }}
                            >
                                <Tab label="콩" />
                                <Tab label="이천여중 기증" />
                                <Tab label="콩의나라 대한민국" />
                                <Tab label="벼" />
                                <Tab label="보리와 밀" />
                                <Tab label="잡곡류" />
                                <Tab label="동부" />
                                <Tab label="엽경채류 및 근채류" />
                                <Tab label="과채류 및 유지작물" />
                            </Tabs>
                            {Exhibit2[subTab]()}
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Pdisplay;