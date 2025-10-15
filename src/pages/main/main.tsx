import {Box, Divider} from '@mui/material';
import { Header } from '../../components/layout/common/header.tsx';
import { Banner } from '../../components/layout/main/banner.tsx';
import {Display} from "../../components/layout/main/display.tsx";
import {MainInfo} from "../../components/layout/main/mainInfo.tsx";
import {MainInfo2} from "../../components/layout/main/mainInfo2.tsx";
import {Footer} from "../../components/layout/common/footer.tsx";

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

                <Banner />

                <MainInfo/>

                <Divider sx={{ mt: 2, borderBottomWidth: 3, bgcolor: 'black' }}/>

                <Display/>

                <MainInfo2/>

                <Footer />
            </Box>
        </Box>
    );
}

export default Main;
