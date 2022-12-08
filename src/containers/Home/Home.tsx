import { Box, Button, Fab, SpeedDial, Typography, useTheme } from "@mui/material";
import Navbar from "../../components/Navbar";
import Typed from "react-typed";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactButton from "../../components/ContactButton.tsx";

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

    const skills: string[] = [
        'html',
        'typescript',
        'javascript',
        'react',
        'ios',
        'android',
        'python',
        'java',
        'mobile dev',
        'web dev',
        'game dev',
        'unity',
        'vr',
    ];

    const createBlocks = (word: string, ix: number): JSX.Element => {

        let x: number = Math.random() * 60 + 10;
        let y: number = Math.random() * 60 + 10;

        while (x < 80 && x > 20 && y < 70 && y > 40) {
            x = Math.random() * 60 + 10;
            y = Math.random() * 60 + 10;
        }

        return (
            <Box 
                key={`${word}-${ix}`} 
                position={'absolute'} 
                left={`${x}vw`} 
                top={`${y}vh`}
                sx={{
                    padding: 100, 
                    borderRadius: '100%',
                    color: theme.palette.background.default,
                    ':hover': {
                        color: 'green',
                    }
                }}
            >
                <Typography sx={{color: 'inherit', userSelect: 'none'}}>{word}</Typography>
            </Box>
        )
    }

    return (
        <Box 
            display={'flex'} 
            flexDirection={'column'} 
            sx={{ height: '100vh', cursor: 'crosshair'}}
        >
            <Navbar />
            <Box display={'flex'} flexGrow={1} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Typed
                        ref={typedRef}
                        style={{ fontSize: theme.typography.h2.fontSize, color: colors[currentColor], userSelect: 'none'}}
                        strings={[
                            "I'm a full stack developer",
                            "I'm a student studying CS and AI",
                            "I'm a soccer player",
                            "I'm a game developer",
                            "I'm a traveller",
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
                    {skills.map((skill, ix) => {
                        return createBlocks(skill, ix)
                    })}
                </Box>
            </Box>
            <ContactButton />
        </Box>
    )
}

export default Home;