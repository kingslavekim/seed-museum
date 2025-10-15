import {Box, Button, Stack, Typography} from '@mui/material';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import {useNavigate} from "react-router-dom";

export const MainInfo = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ mt: 3 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Stack rowGap={1}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 0, sm: 2 }}
                    >
                        <Stack
                            direction='row'
                            spacing={2}
                            sx={{textAlign: 'center', alignItems: 'center' }}
                        >
                            <AccessTimeIcon sx={{ fontSize: 'h4.fontSize' }}/>
                            <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize'}}>관람시간</Typography>
                            <Typography sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize'}}>월/화/수/목/금</Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing={2}
                            sx={{textAlign: 'center', alignItems: 'center' }}
                        >
                            <Typography sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize'}}>10:00 ~ 18:00</Typography>
                            <Typography sx={{ fontSize: 'body3.fontSize'}}>* 입장 마감은 폐관 30분 전까지</Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={2}
                        sx={{textAlign: 'center', alignItems: 'center' }}
                    >
                        <ConfirmationNumberOutlinedIcon sx={{ fontSize: 'h4.fontSize' }}/>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize'}}>관람료</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize'}}>무료</Typography>
                    </Stack>
                </Stack>
                <Box sx={{ pr: { xs: 0, sm: 5 }}}>
                    <Button
                        variant='text'
                        color='secondary'
                        sx={{ fontWeight: 'bold', fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize' }}}
                        onClick={() => {navigate('/directions');}}
                    >
                        오시는 길
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};