import {Box, Chip, Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <Typography
        variant="h4"
        sx={{
            fontWeight: 700,
            fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
            mb: { xs: 2, md: 3 },
            position: 'relative',
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -6,
                left: 0,
                width: { xs: 30, md: 40 },
                height: 3,
                bgcolor: 'primary.main',
                borderRadius: 2,
            }
        }}
    >
        {children}
    </Typography>
);

const DisplayCard = ({ src, label, title, link, navigate }: {
    src: string, label: string, title: string, link: string,
    navigate: (path: string) => void
}) => (
    <Box
        onClick={() => navigate(link)}
        sx={{
            cursor: 'pointer',
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            },
            '&:hover .card-overlay': {
                opacity: 1,
            },
        }}
    >
        <Box
            component="img"
            src={src}
            alt={title}
            loading="lazy"
            sx={{
                width: '100%',
                height: { xs: 180, sm: 200, md: 240 },
                objectFit: 'cover',
                display: 'block',
            }}
        />
        <Box
            className="card-overlay"
            sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                opacity: { xs: 1, md: 0 },
                transition: 'opacity 0.3s ease',
            }}
        />
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
            }}
        >
            <Stack direction="row" spacing={1} alignItems="center">
                <Chip
                    label={label}
                    size="small"
                    sx={{
                        bgcolor: 'primary.main',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                    }}
                />
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                    {title}
                </Typography>
            </Stack>
        </Box>
    </Box>
);

const ExperienceCard = ({ src, title, link, navigate }: {
    src: string, title: string, link: string,
    navigate: (path: string) => void
}) => (
    <Box
        onClick={() => navigate(link)}
        sx={{
            cursor: 'pointer',
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            },
        }}
    >
        <Box
            component="img"
            src={src}
            alt={title}
            loading="lazy"
            sx={{
                width: '100%',
                height: { xs: 180, sm: 200, md: 240 },
                objectFit: 'cover',
                display: 'block',
            }}
        />
        <Box
            sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
            }}
        />
        <Typography
            sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}
        >
            {title}
        </Typography>
    </Box>
);

export const Display = () => {
    const navigate = useNavigate();

    const displayInfo1 = [
        {src: '/display/1.jpg', label: '상설전시', title: '상설전시', link: '/pdisplay'},
        {src: '/display/2.jpg', label: '상설전시', title: '근대 농기구 전시', link: '/fdisplay'},
        {src: '/display/3.jpg', label: '상설전시', title: '박물관 속 박물관', link: '/museum'},
        {src: '/display/5.jpg', label: '특별전시', title: '특별전시', link: '/sdisplay'},
    ];

    const displayInfo2 = [
        {src: '/display/6.jpg', title: '체험 프로그램', link: '/experience'},
        {src: '/display/7.jpg', title: '사회적 농장 프로그램', link: '/socialFarm'},
        {src: '/display/8.jpg', title: '치유 프로그램', link: '/healing'},
    ];

    return (
        <Box>
            <SectionTitle>전시</SectionTitle>
            <Box
                sx={{
                    mt: { xs: 2, md: 4 },
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                    gap: { xs: 2, md: 3 },
                }}
            >
                {displayInfo1.map((display, index) => (
                    <DisplayCard key={index} {...display} navigate={navigate} />
                ))}
            </Box>

            <Box sx={{ mt: { xs: 5, md: 6 } }}>
                <SectionTitle>체험</SectionTitle>
                <Box
                    sx={{
                        mt: 4,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                        gap: { xs: 2, md: 3 },
                    }}
                >
                    {displayInfo2.map((display, index) => (
                        <ExperienceCard key={index} {...display} navigate={navigate} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
