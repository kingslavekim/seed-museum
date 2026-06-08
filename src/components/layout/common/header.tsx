import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box, Typography, IconButton, Drawer, List, ListItemButton,
    ListItemText, Collapse, Stack, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const menuData = [
    {
        label: '관람 정보',
        children: [
            { label: '관람 안내', path: '/info' },
            { label: '예약 안내', path: '/reservation' },
            { label: '오시는 길', path: '/directions' },
        ],
    },
    {
        label: '전시',
        children: [
            { label: '상설 전시', path: '/pdisplay' },
            { label: '특별 전시', path: '/sdisplay' },
            { label: '근대 농기구 전시', path: '/fdisplay' },
            { label: '박물관 속 박물관', path: '/museum' },
        ],
    },
    {
        label: '체험',
        children: [
            { label: '체험 프로그램', path: '/experience' },
            { label: '사회적 농장 프로그램', path: '/socialFarm' },
            { label: '치유 프로그램', path: '/healing' },
            { label: '활동 사진', path: '/experience2' },
        ],
    },
    {
        label: '씨앗유물',
        path: '/seedRelics',
        children: [],
    },
    {
        label: '씨앗이야기',
        path: '/seedStory',
        children: [],
    },
    {
        label: '문화행사',
        children: [
            { label: '박물관 개관식', path: '/open' },
            { label: '씨앗 나눔', path: '/sharing' },
            { label: '슬로푸드', path: '/slowFood' },
            { label: '예산을 담은 식탁', path: '/table' },
            { label: '축제 / 팜파티', path: '/festival' },
        ],
    },
    {
        label: '소개',
        children: [
            { label: '인사말', path: '/greetings' },
            { label: '연혁', path: '/history' },
            { label: '공지사항', path: '/notice' },
        ],
    },
];

export const Header = () => {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleNavClick = (path: string) => {
        navigate(path);
        setActiveMenu(null);
        setDrawerOpen(false);
    };

    const handleMenuEnter = (index: number) => {
        if (menuData[index].children.length > 0) {
            setActiveMenu(index);
        } else {
            setActiveMenu(null);
        }
    };

    const handleHeaderLeave = (e: React.MouseEvent) => {
        const relatedTarget = e.relatedTarget as HTMLElement | null;
        if (
            headerRef.current && !headerRef.current.contains(relatedTarget) &&
            dropdownRef.current && !dropdownRef.current.contains(relatedTarget)
        ) {
            setActiveMenu(null);
        }
    };

    const handleDropdownLeave = (e: React.MouseEvent) => {
        const relatedTarget = e.relatedTarget as HTMLElement | null;
        if (
            headerRef.current && !headerRef.current.contains(relatedTarget) &&
            dropdownRef.current && !dropdownRef.current.contains(relatedTarget)
        ) {
            setActiveMenu(null);
        }
    };

    const toggleMobileMenu = (index: number) => {
        if (menuData[index].children.length === 0 && menuData[index].path) {
            handleNavClick(menuData[index].path!);
            return;
        }
        setMobileExpanded(mobileExpanded === index ? null : index);
    };

    return (
        <>
            {/* Desktop Header */}
            <Box
                ref={headerRef}
                onMouseLeave={handleHeaderLeave}
                sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'relative',
                    zIndex: 1100,
                    bgcolor: '#fff',
                }}
            >
                {/* Logo */}
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                    <Box
                        component="img"
                        src="/common/seedLogo.jpg"
                        alt="한국토종씨앗박물관"
                        onClick={() => handleNavClick('/')}
                        sx={{
                            maxWidth: 500,
                            cursor: 'pointer',
                        }}
                    />
                </Box>

                {/* Main Nav */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        borderTop: '1px solid #eee',
                        borderBottom: '1px solid #eee',
                    }}
                >
                    {menuData.map((menu, index) => (
                        <Box
                            key={index}
                            onMouseEnter={() => handleMenuEnter(index)}
                            onClick={() => {
                                if (menu.path) handleNavClick(menu.path);
                            }}
                            sx={{
                                px: { md: 2, lg: 3 },
                                py: 1.8,
                                cursor: 'pointer',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: activeMenu === index ? '100%' : 0,
                                    height: 2,
                                    bgcolor: 'primary.main',
                                    transition: 'width 0.3s ease',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { md: '0.95rem', lg: '1.05rem' },
                                    color: activeMenu === index ? 'primary.main' : 'text.primary',
                                    transition: 'color 0.2s ease',
                                    whiteSpace: 'nowrap',
                                    '&:hover': { color: 'primary.main' },
                                }}
                            >
                                {menu.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Dropdown */}
                <Box
                    ref={dropdownRef}
                    onMouseLeave={handleDropdownLeave}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bgcolor: 'rgba(255,255,255,0.98)',
                        backdropFilter: 'blur(12px)',
                        borderBottom: activeMenu !== null ? '1px solid #eee' : 'none',
                        boxShadow: activeMenu !== null ? '0 8px 30px rgba(0,0,0,0.08)' : 'none',
                        maxHeight: activeMenu !== null ? 300 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease, box-shadow 0.3s ease',
                        zIndex: 1099,
                    }}
                >
                    {activeMenu !== null && menuData[activeMenu].children.length > 0 && (
                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="center"
                            sx={{ py: 2 }}
                        >
                            {menuData[activeMenu].children.map((child, idx) => (
                                <Box
                                    key={idx}
                                    onClick={() => handleNavClick(child.path)}
                                    sx={{
                                        px: 3,
                                        py: 1,
                                        borderRadius: 2,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            bgcolor: '#f5f3ee',
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
                                        {child.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    )}
                </Box>
            </Box>

            {/* Mobile Header */}
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    bgcolor: '#fff',
                    px: 2,
                    py: 1,
                }}
            >
                <Box
                    component="img"
                    src="/common/seedLogo.jpg"
                    alt="한국토종씨앗박물관"
                    onClick={() => handleNavClick('/')}
                    sx={{ maxWidth: 200, cursor: 'pointer' }}
                />
                <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
                    <MenuIcon sx={{ fontSize: 28 }} />
                </IconButton>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: { xs: '85%', sm: 360 },
                        bgcolor: '#fff',
                    },
                }}
            >
                {/* Drawer Header */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2.5,
                    py: 2,
                    borderBottom: '1px solid #f0f0f0',
                }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'primary.main' }}>
                        메뉴
                    </Typography>
                    <IconButton onClick={() => setDrawerOpen(false)} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Menu List */}
                <List disablePadding sx={{ py: 1 }}>
                    {menuData.map((menu, index) => (
                        <Box key={index}>
                            <ListItemButton
                                onClick={() => toggleMobileMenu(index)}
                                sx={{
                                    px: 3,
                                    py: 1.8,
                                    '&:hover': { bgcolor: '#f9f8f5' },
                                }}
                            >
                                <ListItemText
                                    primary={menu.label}
                                    primaryTypographyProps={{
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        color: mobileExpanded === index ? 'primary.main' : 'text.primary',
                                    }}
                                />
                                {menu.children.length > 0 && (
                                    <ExpandMoreIcon
                                        sx={{
                                            fontSize: 20,
                                            color: 'text.secondary',
                                            transform: mobileExpanded === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    />
                                )}
                            </ListItemButton>

                            {menu.children.length > 0 && (
                                <Collapse in={mobileExpanded === index}>
                                    <List disablePadding sx={{ bgcolor: '#fafaf7' }}>
                                        {menu.children.map((child, idx) => (
                                            <ListItemButton
                                                key={idx}
                                                onClick={() => handleNavClick(child.path)}
                                                sx={{
                                                    pl: 5,
                                                    pr: 3,
                                                    py: 1.3,
                                                    '&:hover': { bgcolor: '#f0ede5' },
                                                }}
                                            >
                                                <ChevronRightIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                                                <ListItemText
                                                    primary={child.label}
                                                    primaryTypographyProps={{
                                                        fontSize: '0.9rem',
                                                        fontWeight: 500,
                                                        color: 'text.secondary',
                                                    }}
                                                />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                    <Divider sx={{ borderColor: '#f0f0f0' }} />
                                </Collapse>
                            )}
                        </Box>
                    ))}
                </List>

                {/* Drawer Footer */}
                <Box sx={{ mt: 'auto', p: 3, borderTop: '1px solid #f0f0f0' }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                        한국토종씨앗박물관
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                        041-333-5613
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
};
