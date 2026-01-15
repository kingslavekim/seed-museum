import {Typography, Stack, Box, Breadcrumbs, Divider, Link} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {DataGrid, type GridColDef} from "@mui/x-data-grid";

interface NoticeItem {
    id: number;
    title: string;
    createdAt: string;
}


const Notice = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState<NoticeItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
                setError(error instanceof Error ? error.message : '데이터를 불러오는데 실패했습니다.');
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

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {navigate('/');}}>
            Home
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }}>
            소개
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            공지사항
        </Typography>,
    ];

    if (error) {
        return (
            <Box sx={{p: 2}}>
                <Typography color="error" align="center">
                    {error}
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{p: 2}}>
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            <Box sx={{ pt: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    공지사항
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 600 }}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    loading={loading}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 10, page: 0 },
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
        </Box>
    );
}

export default Notice;
