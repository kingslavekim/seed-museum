import {Box, Button, Paper, Stack, Typography} from '@mui/material';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsIcon from "@mui/icons-material/Directions";
import {useNavigate} from "react-router-dom";

const InfoCard = ({ icon, title, value, sub }: { icon: React.ReactNode, title: string, value: string, sub?: string }) => (
    <Paper
        elevation={0}
        sx={{
            flex: 1,
            p: { xs: 2.5, md: 3 },
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: '#f9f8f5',
            border: '1px solid #eee',
            borderRadius: 3,
            minWidth: { xs: '100%', sm: 'auto' },
        }}
    >
        <Box sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            flexShrink: 0,
        }}>
            {icon}
        </Box>
        <Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mb: 0.3 }}>
                {title}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                {value}
            </Typography>
            {sub && (
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {sub}
                </Typography>
            )}
        </Box>
    </Paper>
);

export const MainInfo = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ py: { xs: 3, md: 4 } }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                alignItems="stretch"
            >
                <InfoCard
                    icon={<AccessTimeIcon />}
                    title="관람시간"
                    value="09:00 ~ 18:00"
                />
                <InfoCard
                    icon={<CalendarMonthIcon />}
                    title="운영일"
                    value="화 ~ 일"
                    sub="예약 시 월요일도 관람 가능"
                />
                <InfoCard
                    icon={<ConfirmationNumberOutlinedIcon />}
                    title="관람료"
                    value="5,000원"
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<DirectionsIcon />}
                    onClick={() => navigate('/directions')}
                    sx={{
                        px: 4,
                        py: { xs: 2, md: 0 },
                        fontSize: { xs: 16, md: 18 },
                        borderRadius: 3,
                        minHeight: { md: '100%' },
                        whiteSpace: 'nowrap',
                    }}
                >
                    오시는 길
                </Button>
            </Stack>
        </Box>
    );
};
