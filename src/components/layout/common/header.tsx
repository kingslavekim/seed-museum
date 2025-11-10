import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Accordion, AccordionDetails, AccordionSummary, Box, Tab, Tabs, Typography} from '@mui/material';
import { green } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number | false;
    value: number | false;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            hidden={value !== index}
            {...other}
        >
            {
                value === index && <Box sx={{ p: 1 }}>{children}</Box>
            }
        </Box>
    );
}

export const Header = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [value1, setValue1] = React.useState<false | number>(false);
    const [value2, setValue2] = React.useState<false | number>(false);

    const handleMobileMenuOpen = () => {
        setIsMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false);
    };


    const handleChange1 = (_event: React.SyntheticEvent, newValue: number) => {
        setValue1(newValue);
    };

    const handleChange2 = (_event: React.SyntheticEvent, newValue: number) => {
        setValue2(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'row',
                        md: 'column',
                    },
                    justifyContent: {
                        xs: 'space-between',
                        md: 'flex-start',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: {
                            xs: 'space-between',
                            md: 'flex-start',
                        },
                        flexDirection: {
                            xs: 'row',
                            md: 'column',
                        },
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="/common/seedLogo.jpg"
                        alt="씨앗 로고"
                        onClick={() => {navigate('/seed/');}}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: {
                                xs: 'flex-start',
                                md: 'center',
                            },
                            maxWidth: {
                                xs: '240px',
                                md: '600px',
                            },
                            mt: '20px',
                            mb: '20px',
                            cursor: 'pointer'
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: {
                            xs: 'flex',
                            md: 'none'
                        },
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        size="large"
                        onClick={handleMobileMenuOpen}
                    >
                        <MenuIcon sx={{
                            fontSize: 32
                        }} />

                    </IconButton>

                </Box>
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <Tabs
                        value={value1}
                        onChange={handleChange1}
                        sx={{
                            mb: value2 === false ? 8 : 0,
                            '& .MuiTab-root': {
                                color: 'grey.800',
                                fontWeight: 'bold',
                                fontSize: 'h5.fontSize',
                                '&:hover': {
                                    color: green[400],
                                    transition: 'color 0.3s',
                                },
                                '&.Mui-selected': {
                                    color: green[400],
                                }
                            }
                        }}
                    >
                        <Tab
                            label="관람 정보"
                            onClick={() => {setValue2(0)}}
                            onMouseEnter={() => {
                                setValue1(0);
                                setValue2(0);
                            }}
                        />
                        <Tab
                            label="전시"
                            onClick={() => {setValue2(0)}}
                            onMouseEnter={() => {
                                setValue1(1);
                                setValue2(0);
                            }}
                        />
                        <Tab
                            label="체험"
                            onClick={() => {setValue2(0)}}
                            onMouseEnter={() => {
                                setValue1(2);
                                setValue2(0);
                            }}
                        />
                        <Tab
                            label="씨앗유물"
                            onClick={() => {setValue2(0)}}
                            onMouseEnter={() => {
                                setValue1(3);
                                setValue2(0);
                            }}
                        />
                        <Tab
                            label="씨앗이야기"
                            onClick={() => {setValue2(0)}}
                            onMouseEnter={() => {
                                setValue1(4);
                                setValue2(0);
                            }}
                        />
                        <Tab
                            label="문화행사"
                            onClick={() => {setValue2(0)}}
                            onMouseEnter={() => {
                                setValue1(5);
                                setValue2(0);
                            }}
                        />
                        <Tab
                            label="소개"
                            onClick={() => {setValue2(0)}}
                            onMouseEnter={() => {
                                setValue1(6);
                                setValue2(0);
                            }}
                        />
                    </Tabs>
                </Box>
            </Box>

            <CustomTabPanel value={value1} index={0}>
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        backgroundColor: 'black',
                    }}
                >
                    <Tabs
                        value={value2}
                        onChange={handleChange2}
                        sx={{
                            '& .MuiTab-root': {
                                color: 'grey.300',
                                fontSize: 'subtitle1.fontSize',
                                '&:hover': {
                                    color: green[400],
                                    transition: 'color 0.3s',
                                },
                                '&.Mui-selected': {
                                    color: green[400],
                                }
                            }
                        }}
                    >
                        <Tab label='관람 안내' onMouseEnter={() => {setValue2(0)}} onClick={() => {navigate('/seed/info');}}/>
                        <Tab label='예약 안내' onMouseEnter={() => {setValue2(1)}} onClick={() => {navigate('/seed/reservation');}}/>
                        <Tab label='오시는 길' onMouseEnter={() => {setValue2(2)}} onClick={() => {navigate('/seed/directions');}}/>
                    </Tabs>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value1} index={1}>
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        backgroundColor: 'black',
                    }}
                >
                    <Tabs
                        value={value2}
                        onChange={handleChange2}
                        sx={{
                            '& .MuiTab-root': {
                                color: 'grey.300',
                                fontSize: 'subtitle1.fontSize',
                                '&:hover': {
                                    color: green[400],
                                    transition: 'color 0.3s',
                                },
                                '&.Mui-selected': {
                                    color: green[400],
                                }
                            }
                        }}
                    >
                        <Tab label='상설 전시' onMouseEnter={() => {setValue2(0)}} onClick={() => {navigate('/seed/pdisplay');}}/>
                        <Tab label='특별 전시' onMouseEnter={() => {setValue2(1)}} onClick={() => {navigate('/seed/sdisplay');}}/>
                        <Tab label='근대 농기구 전시' onMouseEnter={() => {setValue2(2)}} onClick={() => {navigate('/seed/fdisplay');}}/>
                        <Tab label='박물관 속의 박물관' onMouseEnter={() => {setValue2(3)}} onClick={() => {navigate('/seed/museum');}}/>
                        <Tab label='영상관' onMouseEnter={() => {setValue2(4)}} onClick={() => {navigate('/seed/video');}}/>
                    </Tabs>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value1} index={2}>
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        backgroundColor: 'black',
                    }}
                >
                    <Tabs
                        value={value2}
                        onChange={handleChange2}
                        sx={{
                            '& .MuiTab-root': {
                                color: 'grey.300',
                                fontSize: 'subtitle1.fontSize',
                                '&:hover': {
                                    color: green[400],
                                    transition: 'color 0.3s',
                                },
                                '&.Mui-selected': {
                                    color: green[400],
                                }
                            }
                        }}
                    >
                        <Tab label='체험 프로그램' onMouseEnter={() => {setValue2(0)}} onClick={() => {navigate('/seed/experience');}}/>
                        <Tab label='사회적 농장 프로그램' onMouseEnter={() => {setValue2(1)}}/>
                        <Tab label='치유 프로그램' onMouseEnter={() => {setValue2(2)}}/>
                    </Tabs>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value1} index={3}>
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        backgroundColor: 'black',
                    }}
                >
                    <Tabs
                        value={value2}
                        onChange={handleChange2}
                        sx={{
                            '& .MuiTab-root': {
                                color: 'grey.300',
                                '&:hover': {
                                    color: green[400],
                                    transition: 'color 0.3s',
                                },
                                '&.Mui-selected': {
                                    color: green[400],
                                }
                            }
                        }}
                    >
                        <Tab label='화류' onMouseEnter={() => {setValue2(0)}}/>
                        <Tab label='맥류' onMouseEnter={() => {setValue2(1)}}/>
                        <Tab label='두류' onMouseEnter={() => {setValue2(2)}}/>
                    </Tabs>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value1} index={4}>
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        backgroundColor: 'white',
                        height: '48px',
                    }}
                >
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value1} index={5}>
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        backgroundColor: 'black',
                    }}
                >
                    <Tabs
                        value={value2}
                        onChange={handleChange2}
                        sx={{
                            '& .MuiTab-root': {
                                color: 'grey.300',
                                fontSize: 'subtitle1.fontSize',
                                '&:hover': {
                                    color: green[400],
                                    transition: 'color 0.3s',
                                },
                                '&.Mui-selected': {
                                    color: green[400],
                                }
                            }
                        }}
                    >
                        <Tab label='씨앗나눔' onMouseEnter={() => {setValue2(0)}}/>
                        <Tab label='박/미 주간 행사' onMouseEnter={() => {setValue2(1)}}/>
                    </Tabs>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value1} index={6}>
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        backgroundColor: 'black',
                    }}
                >
                    <Tabs
                        value={value2}
                        onChange={handleChange2}
                        sx={{
                            '& .MuiTab-root': {
                                color: 'grey.300',
                                fontSize: 'subtitle1.fontSize',
                                '&:hover': {
                                    color: green[400],
                                    transition: 'color 0.3s',
                                },
                                '&.Mui-selected': {
                                    color: green[400],
                                }
                            }
                        }}
                    >
                        <Tab label='인사말' onMouseEnter={() => {setValue2(0)}} onClick={() => {navigate('/seed/greetings');}}/>
                        <Tab label='연혁' onMouseEnter={() => {setValue2(1)}} onClick={() => {navigate('/seed/history');}}/>
                        <Tab label='시설 소개' onMouseEnter={() => {setValue2(2)}} onClick={() => {navigate('/seed/facilities');}}/>
                        <Tab label='공지사항' onMouseEnter={() => {setValue2(3)}} onClick={() => {navigate('/seed/notice');}}/>
                    </Tabs>
                </Box>
            </CustomTabPanel>

            <Box
                sx={{
                    display: isMobileMenuOpen ? 'flex' : 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    backgroundColor: 'white',
                    width: '100%',
                    height: '100%',
                    overflowY: 'auto',

                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="close"
                            onClick={handleMobileMenuClose}
                            sx={{
                                color: 'grey.800',
                                '&:hover': {
                                    color: 'green.400'
                                }
                            }}
                        >
                            <CloseIcon sx={{fontSize: 40,}}/>
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Accordion sx={{width: '100%'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize'}}>관람 정보</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%'
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>관람 안내</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>예약 안내</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>오시는 길</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{width: '100%'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize'}}>전시</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%'
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>상설 전시</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>특별 전시</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>근대 농기구 전시</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>박물관 속의 박물관</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>영상관</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{width: '100%'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize'}}>체험</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%'
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>체험 프로그램</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>사회적 농장 프로그램</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>치유 프로그램</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{width: '100%'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize'}}>씨앗유물</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%'
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>화류</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>맥류</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>두류</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{width: '100%'}}>
                            <AccordionSummary>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize'}}>씨앗이야기</Typography>
                            </AccordionSummary>
                        </Accordion>
                        <Accordion sx={{width: '100%'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize'}}>문화행사</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%'
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>씨앗나눔</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>박/미 주관 행사</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{width: '100%'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize'}}>소개</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%'
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>인사말</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>연혁</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>시설 소개</Typography>
                                    <Typography sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', pb: 2, pl: 3}}>공지사항</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};