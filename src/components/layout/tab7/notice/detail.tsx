import { Typography, Stack, Box, Breadcrumbs, Divider, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

interface NoticeItem {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

const NoticeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [notice, setNotice] = useState<NoticeItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await fetch('/notice/notice.json');
                if (!response.ok) {
                    throw new Error('공지사항을 불러오는데 실패했습니다.');
                }
                const data = await response.json();
                const foundNotice = data.notices.find((n: NoticeItem) => n.id === Number(id));
                if (!foundNotice) {
                    throw new Error('해당 공지사항을 찾을 수 없습니다.');
                }
                setNotice(foundNotice);
            } catch (error) {
                setError(error instanceof Error ? error.message : '데이터를 불러오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchNotice();
    }, [id]);

    const breadcrumbs = [
        <Link
            key="1"
            color="inherit"
            to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            Home
        </Link>,
        <Link
            key="2"
            color="inherit"
            to="/notice"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            소개
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            공지사항
        </Typography>,
    ];

    if (loading) {
        return (
            <Box sx={{ p: 2 }}>
                <Typography>로딩 중...</Typography>
            </Box>
        );
    }

    if (error || !notice) {
        return (
            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
                <Typography color="error">{error || '공지사항을 찾을 수 없습니다.'}</Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate('/seed/notice')}
                    sx={{ mt: 2 }}
                >
                    목록으로 돌아가기
                </Button>
            </Box>
        );
    }

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
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    공지사항
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }}/>
            </Box>

            <Box sx={{ pt: 5, minHeight: { xs: 0, sm: 800 }}}>
                <Box sx={{
                    bgcolor: '#f5f5f5',
                    p: 3,
                    borderTop: '2px solid #000',
                    borderBottom: '1px solid #ddd'
                }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {notice.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{mt: 3}}>
                        작성일: {notice.createdAt}
                    </Typography>
                </Box>

                <Box sx={{
                    p: 3,
                    minHeight: '300px',
                    borderBottom: '2px solid #000'
                }}>
                    <Typography
                        component="pre"
                        sx={{
                            whiteSpace: 'pre-wrap',
                            fontFamily: 'inherit',
                            fontSize: '1rem',
                            lineHeight: 1.8
                        }}
                    >
                        {notice.content}
                    </Typography>
                </Box>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/seed/notice')}
                        sx={{
                            minWidth: '120px',
                            bgcolor: '#333',
                            '&:hover': {
                                bgcolor: '#555'
                            }
                        }}
                    >
                        목록
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default NoticeDetail;