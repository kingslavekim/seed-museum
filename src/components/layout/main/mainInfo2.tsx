import {Box, List, ListItemButton, ListItemText, Paper, Stack, Typography} from '@mui/material';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface NoticeItem {
    id: number;
    title: string;
    createdAt: string;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <Typography
        variant="h4"
        sx={{
            fontWeight: 700,
            mb: 3,
            position: 'relative',
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 40,
                height: 3,
                bgcolor: 'primary.main',
                borderRadius: 2,
            }
        }}
    >
        {children}
    </Typography>
);

const BlogCard = ({ title, subtitle, bgColor, bgImage, onClick }: {
    title: string, subtitle: string, bgColor: string, bgImage?: string, onClick: () => void
}) => (
    <Paper
        elevation={0}
        onClick={onClick}
        sx={{
            flex: { xs: '1 1 100%', md: 1 },
            height: { xs: 160, md: 200 },
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            },
            ...(bgImage ? {
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            } : {
                background: bgColor,
            }),
        }}
    >
        <Box sx={{
            position: 'absolute',
            inset: 0,
            background: bgImage ? 'linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))' : 'none',
        }} />
        <Stack
            sx={{
                position: 'relative',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                px: 3,
            }}
        >
            <Typography sx={{ color: '#fff', fontSize: '0.85rem', mb: 0.5, opacity: 0.9, fontWeight: 500 }}>
                {subtitle}
            </Typography>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.8rem', mb: 1.5 }}>
                Blog
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography sx={{ color: '#fff', fontSize: '0.85rem', opacity: 0.85, fontWeight: 500 }}>
                    {title}
                </Typography>
                <OpenInNewIcon sx={{ color: '#fff', fontSize: 14, opacity: 0.85 }} />
            </Stack>
        </Stack>
    </Paper>
);

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

    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
        >
            {/* 공지사항 */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <SectionTitle>공지사항</SectionTitle>
                <Paper
                    elevation={0}
                    sx={{
                        mt: 4,
                        border: '1px solid #eee',
                        borderRadius: 3,
                        overflow: 'hidden',
                    }}
                >
                    {loading ? (
                        <Box sx={{ p: 4, textAlign: 'center' }}>
                            <Typography color="text.secondary">불러오는 중...</Typography>
                        </Box>
                    ) : (
                        <List disablePadding>
                            {rows.slice(0, 6).map((row, index) => (
                                <ListItemButton
                                    key={row.id}
                                    onClick={() => navigate(`/notice/${row.id}`)}
                                    sx={{
                                        py: 1.5,
                                        px: 2.5,
                                        borderBottom: index < Math.min(rows.length, 6) - 1 ? '1px solid #f0f0f0' : 'none',
                                        '&:hover': {
                                            bgcolor: '#f9f8f5',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={row.title}
                                        primaryTypographyProps={{
                                            fontWeight: 500,
                                            fontSize: '0.95rem',
                                            noWrap: true,
                                        }}
                                    />
                                    <Stack direction="row" alignItems="center" spacing={1} sx={{ flexShrink: 0, ml: 2 }}>
                                        <Typography variant="caption" sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}>
                                            {row.createdAt}
                                        </Typography>
                                        <ArrowForwardIosIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
                                    </Stack>
                                </ListItemButton>
                            ))}
                        </List>
                    )}
                </Paper>
            </Box>

            {/* 블로그 */}
            <Box sx={{ flex: { xs: 1, md: '0 0 340px' } }}>
                <SectionTitle>블로그</SectionTitle>
                <Stack spacing={2} sx={{ mt: 4 }}>
                    <BlogCard
                        title="공식 블로그 바로가기"
                        subtitle="한국토종씨앗박물관"
                        bgImage="/main/blog.jpg"
                        bgColor=""
                        onClick={() => window.open('https://blog.naver.com/fsac', '_blank', 'noopener,noreferrer')}
                    />
                    <BlogCard
                        title="블로그 바로가기"
                        subtitle="한국토종씨앗박물관"
                        bgColor="linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)"
                        onClick={() => window.open('https://m.blog.naver.com/sisan347', '_blank', 'noopener,noreferrer')}
                    />
                </Stack>
            </Box>
        </Stack>
    );
};
