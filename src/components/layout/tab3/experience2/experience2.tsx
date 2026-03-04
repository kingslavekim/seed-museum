import {
    Typography,
    Stack,
    Box,
    Breadcrumbs,
    Divider,
    Link, Card,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ImageListItem, ImageList } from "@mui/material";
import {grey} from "@mui/material/colors"; // MUI ImageList 사용

const Experience2 = () => {
    const navigate = useNavigate();

    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={() => {
                navigate("/");
            }}
        >
            Home
        </Link>,
        <Typography key="2" sx={{ color: "text.primary" }}>
            체험
        </Typography>,
        <Typography key="3" sx={{ color: "text.primary" }}>
            활동 사진
        </Typography>,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = Array.from({ length: 13 }, (_, i) => `/temp/1/${i + 1}.jpg`);

    return (
        <Box>
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
                        sx={{ fontWeight: "bold" }}
                    >
                        활동 사진
                    </Typography>
                    <Divider
                        sx={{ mt: 3, borderBottomWidth: 3, bgcolor: "black" }}
                    />
                </Box>

                {/* 이미지 Masonry 레이아웃 */}
                <Box sx={{ mt: 4 }}>
                    <Card sx={{ p: 2, bgcolor: grey[100], borderRadius: 4 }}>
                        <Typography sx={{ textAlign: "center", lineHeight: "2", fontWeight: 600, fontSize: "1.2rem" }}>
                            한국 토종씨앗 박물관
                        </Typography>
                        <Typography sx={{ textAlign: "center", lineHeight: "2", mt: 3 }}>
                            국내 유일한 토종씨앗 박물관으로
                        </Typography>
                        <Typography sx={{ textAlign: "center", lineHeight: "2" }}>
                            "토종씨앗은 과거가 아니라 우리의 미래다" 라는 슬로건 아래
                        </Typography>
                        <Typography sx={{ textAlign: "center", lineHeight: "2", mt: 3 }}>
                            씨앗관찰, 미각체험 등 다양한 체험활동과 생태학습을 통해 기후위기에 대응하는 미래지향적인 박물관입니다.
                        </Typography>
                    </Card>
                    <Card sx={{ mt: 4, p: 2, py: 0, bgcolor: grey[100], borderRadius: 4 }}>
                        <ImageList
                            variant="masonry"
                            cols={2} // Masonry 열 수
                            gap={8} // 이미지 간격
                        >
                            {images.map((src, index) => (
                                <ImageListItem key={index}>
                                    <img
                                        src={src}
                                        alt={`활동 사진 ${index + 1}`}
                                        loading="lazy"
                                        style={{
                                            borderRadius: "8px", // 이미지 모서리 둥글게
                                        }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default Experience2;