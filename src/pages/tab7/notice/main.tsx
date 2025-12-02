import {Box} from '@mui/material';
import { Header } from '../../../components/layout/common/header.tsx';
import {Footer} from "../../../components/layout/common/footer.tsx";
import Notice from '../../../components/layout/tab7/notice/notice.tsx';

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
                        xl: '60%',
                    },
                }}
            >
                <Header />

                <Notice />

                <Footer />
            </Box>
        </Box>
    );
}

export default Main;
