import {Box} from '@mui/material';
import { Header } from '../../../components/layout/common/header.tsx';
import {Footer} from "../../../components/layout/common/footer.tsx";
import Experience from '../../../components/layout/tab3/experience/experience.tsx';

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

                <Experience />

                <Footer />
            </Box>
        </Box>
    );
}

export default Main;
