import { Box, Button, styled, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../../components/Navbar";
import Typed from "react-typed";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactButton from "../../components/ContactButton.tsx";
import Drawer from "../../components/Drawer";

const Home = (): JSX.Element => {

    const theme = useTheme();
    const navigate = useNavigate();

    const typedRef = useRef(null);
    const colors: string[] = [
        '#d9a1ff',
        '#57ba60',
        '#7a83ff',
        '#f7ff8c',
    ];
    const [currentColor, setCurrentColor] = useState<number>(0);
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box 
            display={'flex'} 
            flexDirection={'column'} 
            sx={{ height: '100vh'}}
        >
            <Box sx={{ height: '100vh'}}>
                {isDesktop ? <Navbar /> : <Drawer />}
                <Box display={'flex'} flexGrow={1} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sx={{ height: '100%'}}>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', mb: '10%' }}>
                        <Typed
                            ref={typedRef}
                            style={{ textAlign: 'center', fontSize: isDesktop ? theme.typography.h2.fontSize : theme.typography.h5.fontSize, color: colors[currentColor], userSelect: 'none'}}
                            strings={[
                                "I'm a full stack developer",
                                "I'm a student studying CS and AI",
                                "I'm a soccer player",
                                "I'm a game developer",
                                "I'm a traveler",
                                "I'm a creator",
                            ]}
                            shuffle={true}
                            typeSpeed={150}
                            backSpeed={50}
                            onStringTyped={() => {
                                setCurrentColor(currentColor == colors.length - 1 ? 0 : currentColor + 1)
                            }}
                            loop
                        />
                        <Button 
                            variant={'text'} 
                            href={'/experience'} 
                            disableRipple={true} 
                            sx={{ 
                                padding: 0,
                                textTransform: 'none', 
                                fontSize: theme.typography.h4.fontSize,
                                zIndex: 1,
                                ':hover': {
                                    color: theme.palette.secondary.main,
                                }
                            }}
                        >
                            see what I'm up to
                        </Button>
                    </Box>
                </Box>
            </Box>
            <ContactButton altColor={false}/>
        </Box>
    )
}

export default Home;