import { Box, SxProps, Theme, Typography, useMediaQuery } from "@mui/material";
import { theme2 } from "../../App";
import Navbar from "../../components/Navbar2";
import ContactBar from "../../components/ContactBar";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import CycleText from "../../components/CycleText";
import Float from "../../components/Float";
import Drawer from "../../components/Drawer2";

const Home = (): JSX.Element => {
    const isDesktop = useMediaQuery(theme2.breakpoints.up('md'));
    const mobileImageShrink = 2;
    const imageScale = isDesktop ? 0.75 : 0.75/mobileImageShrink;

    const styles = {
        container: {
            display: 'flex',
            flex: 1,
            height: '100vh',
            width: '100vw',
            backgroundColor: theme2.palette.background.default,
            padding: isDesktop ? 30 : 15,
        },
        innerContainer: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            backgroundColor: theme2.palette.primary.light,
        },
        textContainer: {
            display: 'flex',
            pt: '5%',
            pl: 20,
            flexDirection: 'column',
            minWidth: isDesktop ? 500 : 0,
        },
        contentContainer: {
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            justifyContent: isDesktop ? 'space-around' : 'flex-start',
            alignItems: isDesktop ? 'default' : 'flex-start',
            flex: 1,
        },
        helloText: {
            fontSize: isDesktop ? 45 : 25,
        },
        nameText: {
            fontSize: isDesktop ? 100 : 50,
        },
        andText: {
            fontSize: isDesktop ? 20 : 15,
        },
        meText: {
            fontSize: isDesktop ? 50 : 35,
        },
        imageContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isDesktop ? 600 : '100%',
            pt: isDesktop ? 20 : 100,
            mr: isDesktop ? 100 : 0,
        },
        image: {
            position: isDesktop ? 'absolute' : 'relative',
            width: 453*imageScale,
            height: 615*imageScale,
            pointerEvents: 'none',
        },
        decorationBox: {
            position: isDesktop ? 'absolute' : 'absolute',
            width: isDesktop ? 450 : 450/mobileImageShrink,
            height: isDesktop ? 250 : 250/mobileImageShrink,
            backgroundColor: theme2.palette.primary.main,
            border: 1,
            borderColor: theme2.palette.primary.light,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
    };

    const thingsIAm: Array<string> = [
        'Software Developer',
        'Game Developer',
        'Student',
        'Soccer Player',
        'Creator',
        'Researcher',
        'Mobile Developer',
        'Web Developer',
        'Designer',
        'Fullstack Engineer'
    ];

    return (
        <Box sx={styles.container}>
            <Box sx={styles.innerContainer}>
                {isDesktop ? <Navbar /> : <Drawer />}
                <Box sx={styles.contentContainer}>
                    <Box sx={styles.textContainer}>
                        <Typography sx={styles.helloText}>Hello, my name is</Typography>
                        <Typography sx={styles.nameText} fontStyle={'bold'}>Nathan</Typography>
                        <Typography sx={styles.andText}>And I'm a</Typography>
                        {
                            <Box sx={{marginBottom: isDesktop ? 50 : 50, height: isDesktop ? 100 : 50,}}>
                                <CycleText 
                                    text={thingsIAm} 
                                    duration={5000} 
                                    transitionTime={500} 
                                    style={styles.meText}                                    
                                />
                            </Box>
                        }
                        <ContactBar/>
                    </Box>
                    <Box sx={styles.imageContainer}>
                        <Box sx={{...styles.decorationBox, transform: `translateX(${isDesktop ? 45 : 30}px) translateY(${isDesktop ? -140 : -60}px)`, rotate: '3deg'}} />
                        <Box sx={{...styles.decorationBox, transform: `translateX(${isDesktop ? -65 : -35}px) translateY(${isDesktop ? 60 : 20}px)`, rotate: '-2deg'}} />
                        <Box sx={{...styles.image}} component="img" src={require('../../assets/people/meCartoon.png')} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;