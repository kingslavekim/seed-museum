import {Box, Stack, Typography} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import { grey } from '@mui/material/colors';


export const Footer = () => {
    return (
        <Box sx={{ mt: 3, bgcolor: grey[800] }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                columnGap={2}
                rowGap={5}
                sx={{p: 5}}
            >
                <Stack sx={{
                    flex: '1 1 50%',
                    minWidth: { xs: '100%', sm: '45%' },
                    color: 'white',
                    rowGap: 0.5,
                }}>
                    <Typography sx={{ fontSize: 'body1.fontSize'}}>대표자 : 강희진</Typography>
                    <Typography sx={{ fontSize: 'body1.fontSize'}}>사업자등록번호 : 302-82-73308</Typography>
                    <Typography sx={{ fontSize: 'body1.fontSize'}}>주소 : 충청남도 예산군 대술면 시산동길 68</Typography>
                    <Typography sx={{ fontSize: 'body1.fontSize'}}>이메일 : sisan2022@naver.com</Typography>
                    <Typography sx={{ fontSize: 'body1.fontSize'}}>Copyright © 2022. 씨앗박물관. All right reserved.</Typography>
                </Stack>
                <Box sx={{
                    flex: '1 1 50%',
                    minWidth: { xs: '100%', sm: '45%' },
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'right' },
                    alignItems: 'center',
                    color: 'white',
                }}>
                    <CallIcon sx={{ fontSize: 'h4.fontSize', pr: 2 }}/>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 'h4.fontSize'}}>041-333-2022</Typography>
                </Box>
            </Stack>
        </Box>
    );
};