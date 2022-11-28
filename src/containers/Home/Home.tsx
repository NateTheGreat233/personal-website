import { Box, Button, Typography, useTheme } from "@mui/material";
import Navbar from "../../components/Navbar";
import Typed from "react-typed";
import { useRef, useState } from "react";

const Home = (): JSX.Element => {

    const theme = useTheme();
    const typedRef = useRef(null);
    const colors: string[] = [
        '#d9a1ff',
        '#57ba60',
        '#7a83ff',
        '#f7ff8c',
    ];
    const [currentColor, setCurrentColor] = useState<number>(0);

    return (
        <Box display={'flex'} flexDirection={'column'} sx={{height: '100vh'}}>
            <Navbar />
            <Box display={'flex'} flexGrow={1} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Typed
                    ref={typedRef}
                    style={{ fontSize: theme.typography.h2.fontSize, color: colors[currentColor]}}
                    strings={[
                        "I'm a full stack developer",
                        "I'm a student studying cs and AI",
                        "I'm a soccer player",
                        "I'm a game developer",
                    ]}
                    typeSpeed={150}
                    backSpeed={50}
                    onStringTyped={() => {
                        setCurrentColor(currentColor == colors.length - 1 ? 0 : currentColor + 1)
                    }}
                    loop
                />
                <Button 
                    variant={'text'} 
                    href={'/about'} 
                    disableRipple={true} 
                    sx={{ 
                        padding: 0,
                        textTransform: 'none', 
                        fontSize: theme.typography.h4.fontSize,
                        ':hover': {
                            color: theme.palette.secondary.main,
                        }
                    }}
                >
                    see what I'm up to
                </Button>
            </Box>
        </Box>
    )
}

export default Home;