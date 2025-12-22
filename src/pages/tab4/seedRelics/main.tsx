import {Box} from '@mui/material';
import { Header } from '../../../components/layout/common/header.tsx';
import {Footer} from "../../../components/layout/common/footer.tsx";
import SeedRelics from '../../../components/layout/tab4/seedRelics/seedRelics.tsx';

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

                <SeedRelics />

                <Footer />
            </Box>
        </Box>
    );
}

export default Main;
