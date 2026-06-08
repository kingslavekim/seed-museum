import {
    Box,
    Paper,
    Pagination,
} from "@mui/material";
import React, {useEffect, useState} from "react";

const imageList1 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'];

const Booth = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = imageList1.slice(startIndex, endIndex);


    const totalPages1 = Math.ceil(imageList1.length / itemsPerPage);

    const handlePaginationChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        window.scrollTo(0, 0);
        setCurrentPage(page);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ p: { xs: 1, md: 2 } }}>
            <Box sx={{ mt: 2 }}>
                <Paper elevation={3} sx={{ p: { xs: 1.5, md: 4 }, borderRadius: 2 }}>
                    <Box>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: 'repeat(4, 1fr)',
                                },
                                gap: 2
                            }}
                        >
                            {paginatedData.map((src, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: "100%",
                                        }}
                                    >
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                width: "100%",
                                            }}
                                        >
                                            {/* 이미지 */}
                                            <a
                                                href={`/temp/1/${src}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: 'none', display: 'block', width: '100%' }}
                                            >
                                                <img
                                                    src={`/temp/1/${src}`}
                                                    alt={src}
                                                    loading="lazy"
                                                    style={{
                                                        width: "100%",
                                                        height: 280,
                                                        objectFit: 'cover',
                                                        borderRadius: 8,
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>

                        {imageList1.length === 0 && (
                            <Box sx={{height: 600}}/>
                        )}
                    </Box>

                    <Box>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                            <Pagination
                                count={totalPages1}
                                page={currentPage}
                                onChange={handlePaginationChange}
                                shape="rounded"
                                color="primary"
                            />
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default Booth;