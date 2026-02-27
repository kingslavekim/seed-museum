import React, { useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

export const Experience = () => {
    const displayInfo1 = [
        { src: "/temp/1/1.jpg" },
        { src: "/temp/1/2.jpg" },
        { src: "/temp/1/3.jpg" },
        { src: "/temp/1/4.jpg" },
        { src: "/temp/1/5.jpg" },
        { src: "/temp/1/6.jpg" },
        { src: "/temp/1/7.jpg" },
        { src: "/temp/1/8.jpg" },
        { src: "/temp/1/9.jpg" },
        { src: "/temp/1/10.jpg" },
        { src: "/temp/1/11.jpg" },
        { src: "/temp/1/12.jpg" },
        { src: "/temp/1/13.jpg" },
        { src: "/temp/1/14.jpg" },
        { src: "/temp/1/15.jpg" },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null); // 스크롤 컨테이너 레퍼런스
    const [isDragging, setIsDragging] = useState(false); // 드래그 상태
    const [dragStartX, setDragStartX] = useState(0); // 마우스를 누른 시작 X 좌표
    const [scrollStartX, setScrollStartX] = useState(0); // 초기 스크롤 위치

    // 마우스 누름 이벤트 핸들러
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return;

        setIsDragging(true); // 드래그 시작
        setDragStartX(event.pageX); // 현재 마우스 X 좌표 저장
        setScrollStartX(scrollContainerRef.current.scrollLeft); // 현재 스크롤 위치 저장
        scrollContainerRef.current.style.cursor = "grabbing"; // grabbing 커서 설정
    };

    // 마우스 움직임 이벤트 핸들러
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollContainerRef.current) return;

        const deltaX = event.pageX - dragStartX; // 이동 거리 계산
        scrollContainerRef.current.scrollLeft = scrollStartX - deltaX; // 스크롤 위치 업데이트
    };

    // 마우스 떼기 이벤트 핸들러
    const handleMouseUp = () => {
        if (!scrollContainerRef.current) return;

        setIsDragging(false); // 드래그 종료
        scrollContainerRef.current.style.cursor = "grab"; // grab 커서 복구
    };

    return (
        <Box sx={{ mt: 5 }}>
            <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: "h4.fontSize" }}>
                    체험 활동
                </Typography>

                {/* Scrollable && Draggable Container */}
                <Box
                    ref={scrollContainerRef} // 컨테이너 참조
                    onMouseDown={handleMouseDown} // 드래그 시작
                    onMouseMove={handleMouseMove} // 드래그로 스크롤 이동
                    onMouseUp={handleMouseUp} // 드래그 종료
                    onMouseLeave={handleMouseUp} // 컨테이너 밖으로 나갈 때도 드래그 종료
                    sx={{
                        mt: 2,
                        display: "flex",
                        flexDirection: "row",
                        gap: 3,
                        overflowX: "auto", // 가로 스크롤 활성화
                        p: 2,
                        cursor: "grab", // 기본 커서 설정
                        "&::-webkit-scrollbar": {
                            height: 8,
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "#888",
                            borderRadius: 4,
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            background: "#555",
                        },
                    }}
                >
                    {/* 이미지 반복 렌더링 */}
                    {displayInfo1.map((display, index) => (
                        <Stack
                            key={index}
                            direction="column"
                            spacing={2}
                            sx={{
                                alignItems: "flex-start",
                                textAlign: "left",
                            }}
                        >
                            <Box
                                component="img"
                                src={display.src}
                                sx={{
                                    width: 288,
                                    height: 256,
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    transition: "transform 0.3s ease-in-out",
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "scale(1.05)", // 확대 효과
                                    },
                                }}
                            />
                        </Stack>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};