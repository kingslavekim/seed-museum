import {Box} from '@mui/material';
import { Header } from '../../../components/layout/common/header.tsx';
import {Footer} from "../../../components/layout/common/footer.tsx";
import Sdisplay from '../../../components/layout/tab2/sdisplay/sdisplay.tsx';

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
                <Header />

                <Sdisplay />

                <Footer />
            </Box>
        </Box>
    );
}

export default Main;
