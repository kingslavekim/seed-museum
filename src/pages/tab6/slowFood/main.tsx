import {Box} from '@mui/material';
import { Header } from '../../../components/layout/common/header.tsx';
import {Footer} from "../../../components/layout/common/footer.tsx";
import SlowFood from '../../../components/layout/tab6/slowFood/slowFood.tsx';

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
                        xl: '70%',
                    },
                }}
            >
                <Header />

                <SlowFood />

                <Footer />
            </Box>
        </Box>
    );
}

export default Main;
