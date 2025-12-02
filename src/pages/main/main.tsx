import {Box, Divider, Typography} from '@mui/material';
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
                width: '100%',
                // background: 'linear-gradient(to right, #001f3f60, #ffffff)',
                minHeight: '100vh',
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

                <Typography sx={{ fontWeight: 'bold', fontSize: 'h4.fontSize', mt: 3}}>박물관 둘러보기</Typography>

                <Box
                    sx={{
                        width: '100%',
                        aspectRatio: '4 / 3',
                        overflow: 'hidden',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                    }}
                >
                    <iframe
                        src="http://3.36.174.240/index.htm"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        title="Museum External Content"
                    />
                </Box>

                <Footer />
            </Box>
        </Box>
    );
}

export default Main;
