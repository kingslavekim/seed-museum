import {Typography, Stack, Box, Breadcrumbs, Divider, Link, Tab, Tabs, Paper} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Pdisplay = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
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

    // 1관 내용
    const Exhibit1 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                상설전시 1관
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

    // 야생콩
    const Exhibit2 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                야생콩
            </Typography>
            <Stack spacing={3}>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                    콩의 시작, 야생에서 미래까지
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    이 전시관은 크게 세 구역으로 나뉘어 있으며, 그 중심에는 ‘야생콩 전시 구역’이 자리잡고 있습니다.
                </Typography>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        🌱 야생콩, 콩의 원형을 만나다
                    </Typography>
                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                우리가 오늘날 먹는 콩, 팥, 동부는 모두 오랜 세월에 걸쳐 야생콩으로부터 식량작물화 된 것입니다. 야생콩은 지금의 콩보다 크기가 작고, 잘 익지 않으며 사람의 손을 거치지 않아 거친 야생성을 지닌 종자입니다. 그럼에도 일부 품종은 진화를 통해 작물 수준의 크기와 맛으로 가까워지고 있습니다.
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                야생콩은 세계적으로도 다양하게 분포합니다.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                - 아시아: 한반도, 중국, 일본 등지에 자생하는 콩의 조상종
                            </Typography>
                            - 아프리카: 야생동부와 비슷한 종들 다수 존재
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                - 아메리카: 강낭콩, 리마콩의 야생형이 다양한 기후대에 퍼져 있음
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                - 특히 한반도는 야생콩의 유전적 다양성이 매우 높은 지역으로 평가받고 있습니다.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                이러한 야생콩들은 단지 식물학적 가치에 그치지 않고, 기후위기 시대 유전자 자원의 보고로 주목받고 있습니다.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        🏺 전시물 이야기
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        ● 삼국시대 탄화콩: 불에 타 숯처럼 남은 작은 콩, 삼국시대 유적으로부터 출토되었습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        ● 야생콩·야생팥: 연구자의 기증으로 보존된 귀중한 종자들입니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        ● 돌동부: 시산리 마을 하천 둑에서 자생력을 보여준 야생 동부입니다.
                    </Typography>
                </Box>

                <Box>
                    <Divider />
                    <Typography
                        variant="body1"
                        sx={{ textAlign: 'center', fontWeight: 'bold', mt: 3, fontStyle: "italic" }}
                    >
                        야생콩 전시관은 '콩의 원형'을 되돌아보며, 씨앗의 과거를 통해 미래를 상상해보는 공간입니다.
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );

    // 이천여중 기증실 내용
    const DonatedExhibit = () => (
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
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                🏺 기증 유물의 의의
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                - 전체 430여 종의 씨앗 중 다수는 오늘날 유통되거나 재배되지 않는 품종입니다.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                - 이 씨앗들을 보면 단지 농작물이 사라진 것이 아니라, 지역의 생태·식문화·생활사가 함께 사라졌음을 실감하게 됩니다.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                - 이 기증실은 교육과 씨앗, 기억과 보존의 관계를 되돌아보게 하는 공간입니다.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                🧭 관람 포인트
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                - 교사의 손에서 시작된 토종 보존의 씨앗
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                - 학생들과 함께했던 지역 생물다양성 교육의 현장
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                - 잊혀졌지만 살아있는 종자와 문화의 기록
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic", mt: 3, mb: 3 }}>
                한 사람의 교육이, 한 박물관의 미래가 되었습니다.
            </Typography>
            <Divider />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                🌱 헌정 구절
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
    );

    // 콩의 나라 대한민국
    const SoybeanExhibit = () => (
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

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                🌱 한반도, 콩의 고향
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

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                🍚 콩, 식량을 넘어 문화가 되다
            </Typography>
            <Stack spacing={1}>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    시간과 함께 야생콩은 수많은 품종으로 분화·발달하였습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - <strong>장콩</strong>: 간장과 된장을 담그는 데 쓰이며, 우리나라의 장문화 발전에 절대적인 기여를 한 품종입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - <strong>밥밑콩</strong>: 서리태, 선비잡이콩 등 밥에 넣어 단백질을 보완하던 시대의 대표 품종입니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - <strong>가루콩</strong>: 수박태 등 가루를 내어 떡, 부침, 국수 등 다양한 음식에 쓰였습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - <strong>콩나물콩</strong>: 베틀콩, 백태 등은 콩나물 전용 품종으로 쓰였습니다.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - <strong>약용콩</strong>: 쥐눈이콩 등은 민간요법과 약재로 활용되어 왔습니다.
                </Typography>
            </Stack>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                이처럼 콩은 생김새, 쓰임새, 이름, 전통문화까지
                다양하게 분화되어 수백 종에 이릅니다.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                📖 콩에 담긴 이야기
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                우리 민족은 콩을 단지 음식 재료로만 여기지 않았습니다.
                콩에는 전설도 있고, 설화도 있고, 민요도 있습니다.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                씨앗 하나에 계절의 흐름, 가족의 기억, 민중의 생존 지혜가 함께 담겨 있습니다.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                🧭 이 전시관에서 주목하세요
            </Typography>
            <Stack spacing={1}>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - 두만강에서 시작된 콩의 여정
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - 간장·된장·콩나물… 전통 식문화로 이어지는 콩의 진화
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - 서리태, 수박태, 선비잡이콩… 수백 종의 토종콩 실물 전시
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - 콩의 민속 설화와 이름의 아름다움
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    - 야외 특별전시 ‘천개의 이름으로 한반도를 노래하다’ 토종벼와의 연결
                </Typography>
            </Stack>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                🌏 콩의 세계적 분포도
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gap: 2, // 이미지 간의 간격 (theme.spacing 단위 사용 가능)
                    gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(2, 1fr)" }, // 반응형
                }}
            >
                {Array.from({ length: 6 }, (_, i) => (
                    <Box
                        key={i}
                        component="div"
                        sx={{
                            width: "100%",
                        }}
                    >
                        <img
                            src={`/pdisplay/${i + 1}.${i === 3 ? "jpg" : "png"}`} // 4번 이미지는 jpg, 나머지는 png
                            alt={`콩의 세계적 분포도 ${i + 1}`}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "8px",
                                display: "block",
                            }}
                        />
                    </Box>
                ))}
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body1" sx={{textAlign: "center", fontStyle: "italic", fontWeight: "bold", mt: 3}}>
                “콩의 나라 대한민국”은 씨앗을 통해 우리 민족의 음식과 삶, 문화와 뿌리를 돌아보는 자리입니다.
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", fontStyle: "italic", mt: 2 }}>
                이 작고 단단한 콩 한 알이<br />
                우리의 기억을 지키고,<br />
                한반도의 노래를 부릅니다.
            </Typography>
        </Paper>
    );

    // 토종벼 전시관
    const NativeRiceExhibit = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold" }}
            >
                🌾 토종벼
            </Typography>
            <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, fontStyle: "italic", mb: 2 }}
            >
                이 공간은 한 알의 벼가 한반도에서 천 개의 이름을 얻기까지,
                이 전시는 우리 땅의 쌀 이야기입니다.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                🌾 토종벼, 외래에서 우리 것이 되기까지
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                벼는 본래 인도에서 유입된 외래작물이었습니다. 하지만 약 2000년 전
                한반도에 들어온 벼는 우리 땅과 기후, 사람의 손에 따라 변화하며 이
                땅의 고유한 작물, 토종벼로 분화하게 됩니다.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                🧬 천 개의 이름, 천 가지의 생김새
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                조선시대 문헌에 기록된 것만 해도 1000여 종이 넘는 토종벼가
                있었습니다. 이름도 다양하고, 모양도 색도 맛도 제각각이었습니다.
            </Typography>

            <ul>
                <li>짧고 굵은 벼</li>
                <li>키가 크고 휘는 벼</li>
                <li>검은빛을 띤 벼, 붉은빛을 띤 벼</li>
                <li>밥맛이 고소한 벼, 찰기 있는 벼</li>
            </ul>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                토종벼는 단순한 쌀이 아니라, 지역의 자연과 사람의 삶을 담은
                기록이었습니다.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                🧬 사라진 쌀, 바뀐 밥상
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                그러나 일제강점기, 쌀은 수탈의 도구가 되었습니다. 일제는 수확량을
                기준으로 한 육종쌀을 보급하며 다양했던 토종벼는 빠르게 자취를
                감추게 되었습니다. 해방 이후에도 식량자급과 생산성 위주 농정 속에서
                토종벼는 더 이상 시장에서 찾기 어려운 존재가 되었고, 지금은 극소수
                농가만이 이를 지켜오고 있습니다.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                🌾 자광벼, 마지막 토종의 이름
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                마지막까지 남아 있던 토종벼는 **김포 들미 지역**에서 재배되던
                **‘자광벼’**였습니다. 이 이름에는 붉은 색을 띤 벼란 뜻이 담겨
                있지만, 사람들은 이를 “스스로 빛나는 쌀”이라 불렀습니다. 그 한
                알이, 토종벼를 되살리는 씨앗이 되었습니다.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    mt: 3,
                }}
            >
                쌀 한 톨에 이름이 있고,<br/>
                그 이름마다 땅과 계절과 사람이 깃들어 있습니다.<br/>
                지금, 천 개의 이름이<br/>
                한반도를 다시 노래하기 시작합니다.
            </Typography>
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
                    상설 전시
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ mt: 5 }}>
                <Tabs value={currentTab} onChange={handleTabChange} centered>
                    <Tab label="제1관" />
                    <Tab label="야생콩" />
                    <Tab label="이천여중 기증실" />
                    <Tab label="콩의 나라 대한민국" />
                    <Tab label="토종벼" />
                </Tabs>
                <Box sx={{ mt: 3 }}>
                    {currentTab === 0 && <Exhibit1 />}
                    {currentTab === 1 && <Exhibit2 />}
                    {currentTab === 2 && <DonatedExhibit />}
                    {currentTab === 3 && <SoybeanExhibit />}
                    {currentTab === 4 && <NativeRiceExhibit />}
                </Box>
            </Box>
        </Box>
    );
};

export default Pdisplay;