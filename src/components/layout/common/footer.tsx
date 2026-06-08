import {Box, Divider, Stack, Typography} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

export const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#1a1a1a' }}>
            <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 3, md: 4 }, py: { xs: 4, md: 5 } }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                    spacing={3}
                >
                    <Box>
                        <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', mb: 2 }}>
                            한국토종씨앗박물관
                        </Typography>
                        <Stack spacing={1}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <PlaceIcon sx={{ fontSize: 16, color: '#999' }} />
                                <Typography variant="body2" sx={{ color: '#aaa' }}>
                                    충남 예산군 대술면 시산 서길 64-11
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <EmailIcon sx={{ fontSize: 16, color: '#999' }} />
                                <Typography variant="body2" sx={{ color: '#aaa' }}>
                                    fs-ac@hanmail.net
                                </Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                                대표자 : 강희진 | 사업자등록번호 : 143-90-15456
                            </Typography>
                        </Stack>
                    </Box>

                    <Stack alignItems={{ xs: 'flex-start', md: 'flex-end' }} spacing={1}>
                        <Stack direction="row" alignItems="center" spacing={1.5}>
                            <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                bgcolor: 'primary.main',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <CallIcon sx={{ fontSize: 20, color: '#fff' }} />
                            </Box>
                            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '1.5rem', md: '1.8rem' } }}>
                                041-333-5613
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Divider sx={{ my: 3, borderColor: '#333' }} />

                <Typography variant="caption" sx={{ color: '#555' }}>
                    Copyright © 2015. 한국토종씨앗박물관. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};
