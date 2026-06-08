import {Box, Typography} from '@mui/material';
import { Header } from '../../components/layout/common/header.tsx';
import { Banner } from '../../components/layout/main/banner.tsx';
import {Display} from "../../components/layout/main/display.tsx";
import {MainInfo} from "../../components/layout/main/mainInfo.tsx";
import {MainInfo2} from "../../components/layout/main/mainInfo2.tsx";
import {Footer} from "../../components/layout/common/footer.tsx";

const Section = ({ children, bgcolor = 'transparent', ...props }: { children: React.ReactNode, bgcolor?: string, [key: string]: unknown }) => (
    <Box sx={{ bgcolor, width: '100%', display: 'flex', justifyContent: 'center' }} {...props}>
        <Box sx={{ width: { xs: '100%', xl: 1400 }, px: { xs: 2, sm: 3, md: 4 } }}>
            {children}
        </Box>
    </Box>
);

function Main() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                minHeight: '100vh',
                bgcolor: 'background.default',
            }}
        >
            <Box sx={{ width: { xs: '100%', xl: 1400 } }}>
                <Header />
            </Box>

            <Box sx={{ width: '100%' }}>
                <Banner />
            </Box>

            <Section bgcolor="#fff">
                <MainInfo/>
            </Section>

            <Section bgcolor="#f7f5f0">
                <Box sx={{ py: { xs: 4, md: 6 } }}>
                    <Display/>
                </Box>
            </Section>

            <Section bgcolor="#fff">
                <Box sx={{ py: { xs: 4, md: 6 } }}>
                    <MainInfo2/>
                </Box>
            </Section>

            <Section bgcolor="#f7f5f0">
                <Box sx={{ py: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -8,
                                left: 0,
                                width: 40,
                                height: 3,
                                bgcolor: 'primary.main',
                                borderRadius: 2,
                            }
                        }}
                    >
                        박물관 둘러보기
                    </Typography>

                    <Box
                        sx={{
                            mt: 3,
                            width: '100%',
                            aspectRatio: '16 / 9',
                            overflow: 'hidden',
                            borderRadius: 2,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        }}
                    >
                        <iframe
                            src="http://3.36.174.240:8080/index.htm"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                            }}
                            title="박물관 둘러보기"
                        />
                    </Box>
                </Box>
            </Section>

            <Box sx={{ width: '100%' }}>
                <Footer />
            </Box>
        </Box>
    );
}

export default Main;
