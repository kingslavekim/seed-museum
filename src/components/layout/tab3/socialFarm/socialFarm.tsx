import {useEffect} from "react";
import {Box, Stack, Breadcrumbs, Typography, Card, CardContent, Link, Divider } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate} from "react-router-dom";

const SocialFarm = () => {
    const navigate = useNavigate();

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => { navigate('/seed/'); }}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            체험
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            사회적 농장 프로그램
        </Typography>,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    사회적 농장 프로그램
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            {/* 본문 섹션 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    🏡 시산리아리랑돌봄공동체협동조합 소개
                </Typography>
                <Typography variant="body1">
                    시산리아리랑돌봄공동체협동조합은 충남 예산군 시산리에 위치한 사회적 농장으로, 농업을
                    매개로 한 돌봄·치유·교육 프로그램을 운영합니다.
                </Typography>
                <Typography variant="body1">
                    농사는 단순한 노동이 아니라, 사람과 자연, 세대를 잇는 삶의 회복 과정입니다.
                    우리 농장은 어르신, 발달장애인, 다문화가정 어린이 등 다양한 사회적 약자들이 농사와
                    원예활동을 통해 자존감과 행복을 회복할 수 있도록 돕고 있습니다.
                </Typography>
            </Box>

            {/* 주요 프로그램 카드 섹션 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    🧩 주요 프로그램
                </Typography>
                <Stack spacing={2}>
                    {[
                        {
                            icon: "🌸",
                            title: "꽃, 함께 피우다",
                            description:
                                "어르신 대상 원예치유 프로그램으로, 꽃을 심고 가꾸며 기억을 되살리고 마음을 안정시키는 시간입니다. 작은 씨앗 하나가 피어날 때, 웃음도 함께 피어납니다.",
                        },
                        {
                            icon: "🌞",
                            title: "새로운 시작",
                            description:
                                "고령자가 다시 농업활동에 참여함으로써 사회적 고립감을 줄이고, 활력을 회복하는 프로그램입니다. “흙을 만지는 손끝에서 삶의 의욕이 되살아납니다.”",
                        },
                        {
                            icon: "👩‍🌾",
                            title: "손잡고 밭으로",
                            description:
                                "발달장애인과 함께 작물을 재배하며 협동·교육·성취의 기쁨을 경험합니다. 서로의 손을 잡고 밭으로 나가는 길, 그 자체가 배움입니다.",
                        },
                        {
                            icon: "🤝",
                            title: "동행",
                            description:
                                "발달장애인과 농업인이 하루를 함께 보내며 일의 의미와 삶의 리듬을 배우는 체험형 고용 프로그램입니다. 작은 일상이지만, 진심으로 연결되는 사회적 일터를 만듭니다.",
                        },
                        {
                            icon: "🌿",
                            title: "텃밭, 즐거운 놀이터",
                            description:
                                "다문화가정 어린이와 함께하는 농업문화 체험으로, 자연 속 놀이와 농작업을 통해 정서적 치유와 문화 교류를 이끕니다. 아이들이 흙을 만지며 웃는 그 순간, 서로의 마음도 자랍니다.",
                        },
                    ].map((program, index) => (
                        <Card key={index} variant="outlined" sx={{ p: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {program.icon} {program.title}
                                </Typography>
                                <Typography variant="body1">
                                    {program.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Box>

            {/* 협력 기관 및 목표 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    🤝 협력 기관
                </Typography>
                <Typography variant="body1">
                    예산군 노인회, 장애인보호작업장, 구세군지역아동센터, 연성대학교, 순천향대학교 등 다양한
                    기관과 함께 지역 기반의 농촌 돌봄 네트워크를 만들어가고 있습니다.
                    참여를 원하는 기관은 언제든 문의하실 수 있으며, MOU 체결 후 상호 협력 프로그램 운영이
                    가능합니다.
                </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    🎯 우리의 목표
                </Typography>
                <Typography variant="body1" >
                    “노동이 아닌, 삶의 기쁨으로서의 농업.”
                    농업을 통해 몸과 마음을 치유하고, 세대를 잇는 돌봄의 공동체를 꿈꿉니다. 작은 밭에서
                    시작된 변화가 지역사회의 따뜻한 회복으로 이어지길 바랍니다.
                </Typography>
            </Box>
        </Box>
    );
};

export default SocialFarm;