import {Box, Stack, Typography} from '@mui/material';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { DataGrid, type GridColDef} from '@mui/x-data-grid';

interface NoticeItem {
    id: number;
    title: string;
    createdAt: string;
}

export const MainInfo2 = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState<NoticeItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await fetch('/notice/notice.json');
                if (!response.ok) {
                    throw new Error('공지사항을 불러오는데 실패했습니다.');
                }
                const data = await response.json();
                setRows(data.notices);
            } catch (error) {
                console.error('Error fetching notices:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotices();
    }, []);

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'No',
            width: 100,
            align: 'center',
            headerAlign: 'center',
            sortable: false

        },
        {
            field: 'title',
            headerName: '제목',
            flex: 1,
            minWidth: 300,
            headerAlign: 'center',
            sortable: false
        },
        {
            field: 'createdAt',
            headerName: '작성일',
            width: 150,
            align: 'center',
            headerAlign: 'center',
            sortable: false
        }
    ];

    return (
        <Box sx={{ mt: 5 }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                columnGap={2}
                rowGap={5}
            >
                <Box sx={{
                    flex: '1 1 50%',
                    minWidth: { xs: '100%', sm: '45%' }
                }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 'h4.fontSize', mb: 2, pl: '10px'}}>공지사항</Typography>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        loading={loading}
                        hideFooter={true}
                        autoHeight

                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 6, page: 0 },
                            },
                        }}
                        disableRowSelectionOnClick
                        sx={{
                            '& .MuiDataGrid-cell': {
                                cursor: 'pointer'
                            },
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#f5f5f5',
                                borderBottom: '2px solid #ddd'
                            }
                        }}
                        onRowClick={(params) => {
                            navigate(`/notice/${params.id}`);
                        }}
                    />
                </Box>
                <Box sx={{
                    flex: '1 1 50%',
                    minWidth: { xs: '100%', sm: '45%' }
                }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 'h4.fontSize', mb: 2, pl: '10px'}}>블로그</Typography>
                    <Stack direction="row" spacing={2}>
                        <Box
                            component='img'
                            src={'/main/blog.jpg'}
                            sx={{
                                flex: 1,
                                height: 370,
                                objectFit: 'fill',
                                objectPosition: 'center',
                                transition: 'transform 0.5s ease-in-out',
                                cursor: 'pointer',
                                borderRadius: 1
                            }}
                            onClick={() => {window.open('https://blog.naver.com/fsac', '_blank', 'noopener,noreferrer');}}
                        />
                        <Box
                            sx={{
                                flex: 1,
                                height: 370,
                                background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
                                borderRadius: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': { transform: 'scale(1.02)' },
                                px: 3
                            }}
                            onClick={() => {window.open('https://m.blog.naver.com/sisan347', '_blank', 'noopener,noreferrer');}}
                        >
                            <Typography sx={{ color: '#fff', fontFamily: 'serif', fontSize: '1rem', mb: 1, opacity: 0.9 }}>
                                한국토종씨앗박물관
                            </Typography>
                            <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: '2rem', mb: 2 }}>
                                Blog
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '0.95rem', opacity: 0.85 }}>
                                씨앗박물관 블로그 바로가기 &gt;
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};