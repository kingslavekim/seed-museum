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

const Fdisplay = () => {
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
            근대 농기구 전시
        </Typography>,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Exhibit1 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                근대 농기구 전시관
            </Typography>

            <Stack spacing={3}>

                {/* 전시 개요 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        1. 전시 개요
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        이곳은 근대 농기구를 전시한 공간입니다. 한 독지가가 몇 점을 기증하면서 모으기 시작한 근대 농기구 약 100여 점이 전시돼 있습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        흔하게 보였던 농기구들이지만, 이곳에 놓인 각각의 도구들은 저마다 독특한 서사를 품고 있어 박물관 전시품이 되었습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        근대 농기구는 농업사회 시절 도구가 어떻게 변화·발전해 왔는지를 보여주는 중요한 자료입니다.
                    </Typography>
                </Box>

                {/* 전시 의도 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        2. 전시 의도
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                        “기계에서 손으로, 농업의 삶을 이룬 도구들”
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        농경이 일상 그 자체였던 시절, 농기구는 사람과 땅을 잇는 매개이자 삶의 연장이었습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        철기 이후 목제 도구는 철제로 발전했고, 근대기에 들어서면서 인력·축력 중심의 농업에서 기계화로 넘어가는 변곡점을 맞이했습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        이 전시는 그러한 변화의 흐름 속에서 농기구가 어떤 역할을 했는지 보여주고자 합니다.
                    </Typography>
                </Box>

                {/* 전시 구성 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        3. 전시 구성
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold' }}>
                        1️⃣ 주요 농기구
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 따비: 밭이나 돌 많은 땅에서 손으로 땅을 가는 기경 도구
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 절구·맷돌: 벼·곡물을 빻는 생활 가공 도구
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 삽·괭이·호미 등 농사 보조 도구들
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 'bold', mt: 1 }}>
                        2️⃣ 전시 의의
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 농업사회에서의 노동 방식과 일상의 변화 과정을 보여줌
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 단순한 도구가 아닌, 사람의 삶과 마을의 기억을 담은 문화유산
                    </Typography>
                </Box>

                {/* 관람 포인트 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        4. 관람 포인트
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 도구의 형태는 왜 그렇게 만들어졌는가?
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 어떤 땅과 작업을 위해 사용되었는가?
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 도구 한 가지가 사라진다는 것은 어떤 방식을 대체했는가?
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, pl: 4 }}>
                        - 근대기 기계화는 농촌의 풍경을 어떻게 바꾸었는가?
                    </Typography>
                </Box>

                {/* 전시 메시지 */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
                        5. 전시 메시지
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: "italic" }}>
                        “도구 하나가 바뀌면 땅의 모든 손길이 바뀌었습니다.
                        기계가 들어오던 그 순간, 농사의 얼굴이 바뀌고 농촌의 시간이 바뀌었습니다.”
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        이 전시의 농기구들은 조용히 놓여 있지만, 그 안에는 우리 농업과 일상의 흔적이 고스란히 담겨 있습니다.
                    </Typography>
                </Box>

            </Stack>
        </Paper>
    );

    const Exhibit2 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                농기구 이야기
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 2 }}>
                국화동 느티나무의 광시곡
            </Typography>

            <Stack spacing={3} sx={{ mt: 2 }}>

                <Typography variant="body1" sx={{ whiteSpace: "pre-line", lineHeight: 1.8 }}>
                    {`마마∼ 마마∼

새벽부터 요즘 유행한다는 보컬 그룹 퀸 음악의 전화벨 소리가 요란하게 울렸습니다. 얼마 전 전화벨 소리를 광시곡(狂詩曲)인 보헤미안 랩소디로 바꾸었더니 간절하게 부르는 소리가 새벽잠을 흔들었습니다. 겨우 새벽잠을 깨우는 퀸의 목청을 잠재우고 전화를 받자마자 내가 뭐랄 것도 없이 한마디 하고 툭 끊겼습니다.

“동상, 바심이 끝났응께 댕겨 가!”

잠결에 듣기는 했지만, 대번에 알아들었습니다. 재 너머 고동골의 형님이었습니다. 나도 그 형님의 가을바심이 끝나길 고대하고 있었기 때문이었습니다.
고동골은 천방산 아랫마을로 그의 집안은 그곳에서만 5대가 살고 있었습니다. 천방산은 예산과 아산을 아우르는 금북정맥의 주 분기점으로 그 아래 수십 개 마을이 있습니다. 그중에 고동골과 국화동은 천방산의 서쪽 마을입니다. 국화동에는 천방산 오형제 고개를 통해 아산으로 넘어가는 오래된 길이 있습니다. 나지막한 산 하나를 두고 고동골이 있습니다.
그런데 그 집안에 대대로 내려온 오래되고 멋들어진 느티나무 절구가 있어 내가 운영하는 박물관 농경 문화원에 기증하자고 졸랐습니다. 그러자 올 바심까지는 하고 내년부터는 농사지을 자식도 없으니 가져가라고 했었는데, 마침 바심이 끝났다는 전화가 온 것이었습니다.
나는 산을 좋아하지만 다리가 시원찮아 산에는 가지 못합니다. 그래서 궁여지책으로 찾기 시작한 것이 나무 여행이었습니다. 산은 올라가 내려다보는 맛이 있다면, 나무 여행은 아래서 올려 보는 경이로움이 있어 좋았습니다.
그중에 노거수를 좋아했는데, 한번 인연을 맺으면 웬만하면 몇 번씩 다니곤 했습니다. 특히 노거수 중에 마을 비보수(裨補樹)를 많이 찾아다녔는데, 거기에 또 한 가지 이득이 있다면 그 비보수에는 마을 사람들의 삶의 향기가 배어있는 많은 사연이 있기 때문이었습니다. 그 사연 중에는 당산목의 목신에 대한 사연이 제일 많았습니다. 아마 엄니의 영향이 컸던 모양입니다.
이 이야기는 천방산 아랫마을 국화동 당산목 이야기입니다. 그러니까 천방산 자락이 곱게 퍼져 내려와 국화꽃같이 예쁘게 내려앉았다 해 국화동이란 이름이 붙여져 골골마다 집들이 들어선 마을의 입구에 홀로 휑하니 서 있는 나무 이야기입니다.
평소에 내가 관심을 가지고 찾아다닌 마을 당산목은 노거수였습니다. 대부분의 당산목은 그 크기가 우람하고 신령스러워 사람들이 우러러봐 마을을 지키는 수호신으로 여기는 데 반해 이 마을 당산나무는 매우 초라해 여름이라도 울창하지 못해 그늘을 주지 못했고 겨울이면 더욱더 보잘것없이 변변치 못한 행색을 하고 있습니다. 기구한 사정으로 인해 수세도 한쪽으로 쏠려있고, 더구나 마을 앞으로 큰길이 나는 바람에 길옆에서 오가는 자동차 바람에 쓸려 점점 여위어 가는 느티나무입니다.
시작은 조그마한 절구에서부터였습니다.
내가 운영하는 박물관에서 얼마 떨어지지 않은 고동골을 우연히 지나다가 잘생긴 절구 하나를 만났는데, 요즘에는 잘 쓰지도 않아 먼지가 낀 채 헌 집 헛간에 있길래 주인이 아는 형님이기도 해서 쓰지 않으면 기증을 해달라고 했더니 대뜸 이렇게 말했습니다.

“감당할 자신 있으면 가져가 봐!”

나는 절구 하나 가지고 오는 데 대체 뭘 감당하라는 것인가 하는 의문과 호기심을 품고 그의 이야기에 귀를 기울이게 됐습니다.
그 절구는 단순히 절구로만 쓰인 것이 아니라 마을 공동 개상이었습니다. 개상이란 벼 타작을 하는 옛 농기구를 말합니다. 일종의 타작 기구였습니다. 벼나 밀, 보리 등을 타작할 때 사람들이 개상에 두드려 타작을 하는 농기구의 일종이었습니다. 예전에는 개상도 귀해 마을에 하나 정도밖에 없어 돌려가며 마을의 모든 바심을 감당했었습니다.
본래 이 개상의 원목은 국화동에 있는 멋진 느티나무였습니다. 이 느티나무는 예전에 장수가 마을을 지나다가 ‘이곳이 허하니 큰 나무 하나 있으면 마을이 부흥하겠다’ 하며 지팡이를 꽂으니 그 지팡이에서 싹이 났다는 흔한 전설의 나무였습니다.
그 장수의 말대로 그 뒤로는 마을이 복되고 윤택해 사람들이 행복했습니다. 그런데 일제 강점기에 접어들면서 사람들이 피폐해지고 마을은 점점 황폐해져 갔습니다. 그때 그들의 마음속에 보인 것이 이 느티나무였습니다. 아마 늘 당하기만 하는 사람들의 마음속에 장수 하나쯤 나타나 일본 놈들 혼내줬으면 하는 맘이 있었는지, 마을 사람들이 이 나무의 전설을 믿고 그 장수의 힘을 빌려 작은 소원들을 이루고자 이 느티나무에 목신을 들이고 당산목으로 위하기 시작했다고 합니다.
그런데 문제는 그다음부터 벌어졌습니다. 목신은 사람들이 들이지만, 일단 들어앉고 나면 사람들이 의식을 지배하고 사람들의 치성을 받아 신의 위력을 나타내기 시작합니다. 그때부터는 오롯이 사람들이 감당해야 하는 것이 신과 인간과의 관계입니다.
이곳의 목신도 처음에는 사람들의 치성을 잘 받아 곧잘 신력을 발휘해 어지간한 병치레는 전부 막아줬고, 크게는 마을의 천재지변도 끄떡없이 막아줬다 합니다.
그런데 이 나무에 들어온 목신은 장군신이라 그런지 아니면 주변에 더 큰 신들이 들어오면서 존재감을 드러내려는지 시간이 갈수록 어지간해서는 치성을 받아들이지 않았고, 그 치성이 맘에 들지 않으면 마을 사람들에게 해코지해댔습니다.
마을 사람들은 고민이 많았습니다. 나무를 베어버리자니 후환이 두려웠고, 놔두자니 마을의 안녕이 늘 목신에게 달려 있어 불안했습니다.
신과 인간과의 관계는 언제나 신이 주체인 듯싶지만, 신은 수동적이고 인간은 능동적입니다. 인간이 필요에 의해 신을 부르지만, 또한 신을 버리는 것도 인간입니다.
마침 그때 고개 너머 고동골에서 절구 만들 나무를 찾는다는 소문이 들려왔습니다. 그래서 자신들의 손을 빌리지 않고 관계없는 다른 동네 사람의 손으로 베어내면 괜찮을 듯해서 그들에게 나무를 베어갈 것을 권했습니다.
고동 사람들은 이런 속사정을 모르고 느티나무를 훌쩍 베어와 절구를 만들었습니다. 그들이 그 소문을 들은 것은 그해 가을 무렵이었습니다. 자꾸 마을에 잔병이 늘고 크고 작은 우환들이 늘어나기 시작해서 알아보니 그 나무에 원인이 있다는 것을 알았던 겁니다.
다시 돌려줄 수도 없었고, 죽은 나무에 치성을 드릴 수도 없었습니다. 방법은 더 이상 목신이 밖으로 나오지 못하게 하는 방법을 찾아야 했습니다.
그들이 생각해낸 것이 바로 개상이었습니다. 콩콩 찧어대는 절구질로는 부족했습니다. 그러니까 신이 발동하지 못하게 볏단으로 후려치며 신의 발동을 막았습니다. 어느 개인 혼자 감당할 수 없었으니 마을 사람들이 돌려가며 개상을 내려치고 훑어댔습니다. 화를 당하더라도 나누어 당하고자 공동으로 바심을 할 때는 누가 친 줄 모르게 번갈아 가며 신을 눌렀습니다.
그들은 평소에는 절구로 신이 나오지 못하게 다졌고, 가을에는 바심하면서 신을 눌렀습니다. 그때야 마을의 안녕이 돌아왔습니다. 대대로 그렇게 해오기를 벌써 150여 년이 지났다 합니다.
그러면서 간신히 마을을 지켜왔는데, 시간이 지나며 타작 기계도 바뀌었고, 개상 쓸 일이 점점 줄어 급기야는 필요 없게 됐습니다. 버릴 수도 없고, 화도 무서워 근근이 그가 지켜오며 가을에 바심을 하며 신을 누르고 있었는데, 이제는 나이 먹어 농사도 지을 수 없는 데다가 농사지을 자식도 없어 그러잖아도 걱정하고 있던 터에 내가 절구를 박물관에 기증하라고 하니까 그것을 감당할 수 있으면 가져가라는 것이었습니다.
내심 뜨거운 감자를 받을 사람이 생겼다니 반가웠는지 모르지만, 나는 그의 맘이 바뀔지도 모를까 봐 아침밥도 거르고 달려갔습니다. 그러나 께름칙한 것은 어쩔 수 없었습니다.
그때 고동 형님은 절구를 차에 실어주고는 신기한 게 있으니 보여주겠다며 데리고 간 곳이 바로 국화동 느티나무였습니다.
고동골에서 베어 가 국화동의 고민은 해결됐으나 이듬해 그 자리에서 다시 느티나무가 싹을 내밀고 자라더라는 것입니다. 그것이 크면 또 같은 일을 겪는 것이 두려워 마을 사람들은 크기 전에 싹을 잘라냈는데, 자르면 또 나고, 또 자르면 옆에서 다시 나고, 또 자르면 또 그 옆에서 싹이 나니 결국 마을 사람들이 지쳐 할 수 없이 그냥 키웠답니다. 키웠다기보다 그냥 천덕꾸러기처럼 구박하고 외면했다는 편이 옳았습니다. 그도 신을 보내는 사람으로 최소한의 배려를 하는 듯했습니다.
그렇게 나온 나무는 제대로 크지 못하고 제대로 수형도 잡지 못한 채 컸는데, 지금은 누구 한 사람 치성을 드리지 않아도 다시 마을 당산목이 돼 그 초라한 행색으로 말없이 국화동을 지키고 있었습니다.
그렇다고 께름칙함이 가신 것은 아니었습니다. 그래서 절구가 들어오던 날 엄니의 힘을 빌리기로 했습니다. 아무래도 이런 데는 엄니의 도움이 필요합니다. 엄니의 노하우가 필요합니다. 뭔가 엄니의 의식이 필요했습니다. 그런데 뜻밖이었습니다.

“얘, 걱정 말어, 아직 거기 있다매.”

이 이야기의 자초지종을 엄니에게 했더니 하신 말씀이었습니다. 거들떠보지도 않았습니다. 그러니까 그 목신이 나무를 쫓아 온 것이 아니라 이사 가는 집 구렁이가 쌀독에 숨듯이 나무 밑동으로 숨었다는 겁니다.
이제 엄니에게 신은 면피 정도의 의미밖에는 없어 보였습니다. 이제 다 거둬들이고 있음이 분명했습니다. 그래서 나는 엄니 말을 믿지 않습니다.
절구는 지금은 우리 박물관에 와 귀하게 모셔져 있으면서 사람들을 만나고 있지만, 나는 내년 봄에 감당할 신의(神意)를 기다리고 있습니다.`}
                </Typography>

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
                    근대 농기구 전시
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs value={mainTab} onChange={handleMainTabChange} centered>
                    <Tab label="전시관" />
                    <Tab label="농기구 이야기" />
                </Tabs>
                <Box sx={{ mt: 2 }}>
                    {mainTab === 0 && <Exhibit1 />}
                    {mainTab === 1 && <Exhibit2 />}
                </Box>
            </Box>
        </Box>
    );
}

export default Fdisplay;
