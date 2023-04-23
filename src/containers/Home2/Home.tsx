import { Box, SxProps, Theme, Typography } from "@mui/material";
import { theme2 } from "../../App";
import Navbar from "../../components/Navbar2";
import ContactBar from "../../components/ContactBar";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import CycleText from "../../components/CycleText";
import Float from "../../components/Float";

const Home = (): JSX.Element => {
    const imageScale = 0.75;

    const styles = {
        container: {
            display: 'flex',
            flex: 1,
            height: '100vh',
            width: '100vw',
            backgroundColor: theme2.palette.background.default,
            padding: 30,
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
            minWidth: 500,
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
        },
        helloText: {
            fontSize: 45,
        },
        nameText: {
            fontSize: 100,
        },
        andText: {
            fontSize: 20,
        },
        meText: {
            fontSize: 50,
            marginTop: 0,
            marginRight: 0,
            marginLeft: 0,
        },
        imageContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 600,
            pt: 20,
            mr: 100,
        },
        image: {
            position: 'absolute',
            width: 453*imageScale,
            height: 615*imageScale,
            pointerEvents: 'none',
        },
        decorationBox: {
            position: 'absolute',
            width: 450,
            height: 210,
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
                <Navbar />
                <Box sx={styles.contentContainer}>
                    <Box sx={styles.textContainer}>
                        <Typography sx={styles.helloText}>Hello, my name is</Typography>
                        <Typography sx={styles.nameText} fontStyle={'bold'}>Nathan</Typography>
                        <Typography sx={styles.andText}>And I'm a</Typography>
                        {
                            <Box sx={{marginBottom: 50, height: 100,}}>
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
                        {/* <Float 
                            floatStrength={20}
                            duration={10000}
                            style={{position: 'absolute', transform: `translateX(45px) translateY(-140px)`}}
                            element={<Box sx={{...styles.decorationBox, height: 250, rotate: '3deg'}} />}
                        /> */}
                        <Box sx={{...styles.decorationBox, height: 250, transform: `translateX(45px) translateY(-140px)`, rotate: '3deg'}} />
                        <Box sx={{...styles.decorationBox, height: 250, transform: `translateX(-65px) translateY(60px)`, rotate: '-2deg'}} />
                        <Box sx={{...styles.image}} component="img" src={require('../../assets/people/meCartoon.png')} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;