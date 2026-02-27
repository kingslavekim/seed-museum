import {Box} from '@mui/material';
import Booth from '../../../components/layout/tab8/booth/booth.tsx';

function Main() {

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%'
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: '100%',
                        xl: 1400,
                    },
                }}
            >
                <Booth />
            </Box>
        </Box>
    );
}

export default Main;
