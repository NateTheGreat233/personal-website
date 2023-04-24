import { Box, SxProps, Theme, Typography, useMediaQuery } from "@mui/material";
import { theme2 } from "../../App";
import Navbar from "../../components/Navbar2";
import ContactBar from "../../components/ContactBar";
import { calculateAge, calculateStudentStatus } from "../../util/functions";
import Drawer from "../../components/Drawer2";
import { useState } from "react";

enum MobileSection {
    ME,
    EDUCATION,
    PORTFOLIO
}

type TabInfo = {
    text: string,
    type: MobileSection
}

const About = (): JSX.Element => {

    const isDesktop = useMediaQuery(theme2.breakpoints.up('md'));
    const [mobileSelected, setMobileSelected] = useState<MobileSection>(MobileSection.ME);

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
        contentContainer: {
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            flex: 1,
            pl: isDesktop ? 100 : 20,
            pr: isDesktop ? 100 : 20,
        },
        title: {
            fontSize: isDesktop ? 75 : 40,
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            width: '25vw',
            minWidth: 300,
            height: '25vh',
            minHeight: 150,
            backgroundColor: theme2.palette.primary.main,
            border: 1,
            borderColor: theme2.palette.primary.light,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: 10,
            borderRadius: 5,
        },
        headerText: {
            fontSize: 20,
        },
        text: {
            fontSize: 15,
        },
        tabBox: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            mb: 20,
        },
        tabTextWrapper: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                cursor: 'pointer',
            }
        },
        tabText: {
            fontSize: 16,
        },
        mobileTextBox: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'scroll',
        }
    };

    const tabs: Array<TabInfo> = [
        {
            text: 'Me',
            type: MobileSection.ME
        },
        {
            text: 'Education',
            type: MobileSection.EDUCATION
        },
        {
            text: 'Portfolio',
            type: MobileSection.PORTFOLIO
        },
    ];

    const sectionMap: Map<MobileSection, JSX.Element> = new Map([
        [MobileSection.ME, <Typography sx={styles.text}>{`I’m a ${calculateAge()}-year-old from the San Francisco Bay Area. Growing up as the child of two software engineers in the heart of Silicon Valley, I was surrounded by technology and developed a passion for programming at a young age. Aside from my interest in tech, I also have a love for sports. I played high-level youth soccer throughout my childhood, and I still play today for my college varsity team. Additionally, I’ve recently developed an interest in climbing and traveling, which I find to be great ways to challenge myself and explore the world around me.`}</Typography>],
        [MobileSection.EDUCATION,  <Typography sx={styles.text}>{`I started my undergraduate studies in 2021, and I’m currently a ${calculateStudentStatus()}. I’ve been really enjoying my academic experience so far, and I’ve learned a lot in a short amount of time. In addition to my academic pursuits, I’m also an active member of the campus community. I'm a part of the men’s soccer team, which allows me to continue pursuing my passion for the sport. I’m also involved in VR/AR MIT and MIT Entrepreneurship Club, where I enjoy exploring innovative ideas and networking with other like-minded individuals. Outside of my extracurricular activities, I'm currently doing research with the MIT Media Lab on time-of-flight imaging. It's an exciting opportunity to work alongside talented researchers and contribute to cutting-edge advancements in the field. Overall, I’m grateful for the opportunities that MIT has provided me, and I'm excited to see what the future holds as I continue to grow and learn.`}</Typography>],
        [MobileSection.PORTFOLIO, <Typography sx={styles.text}>{`I made this website to showcase some of the cool things I’ve been working on outside the classroom & work experiences. I’ve always enjoyed creating side projects, and here is a place I can put them all together! Thanks for checking out the website, and if you have any questions, ideas, or just want to get in touch please reach out!`}</Typography>]
    ]);

    if (!isDesktop) {
        return (
            <Box sx={styles.container}>
                <Box sx={styles.innerContainer}>
                    <Drawer />
                    <Box sx={styles.contentContainer}>
                        <Typography style={{...styles.title, marginBottom: 20, textAlign: 'center'}} fontStyle={'bold'}>About Me</Typography>
                        <Box sx={styles.tabBox}>
                            {
                                tabs.map((tab: TabInfo, index: number) => {
                                    return (
                                        <Box 
                                            key={index} 
                                            sx={styles.tabTextWrapper}
                                            onClick={() => {
                                                setMobileSelected(tab.type);
                                            }}
                                        >
                                            <Typography 
                                                sx={{
                                                    ...styles.tabText,
                                                    color: tab.type === mobileSelected ? theme2.palette.secondary.main : 'default',
                                                    textDecoration: tab.type === mobileSelected ? 'underline' : 'default',
                                                }}
                                            >{tab.text}</Typography>
                                        </Box>
                                    );
                                })
                            }
                        </Box>
                        <Box sx={styles.mobileTextBox}>
                            {sectionMap.get(mobileSelected)}
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={styles.container}>
            <Box sx={styles.innerContainer}>
                <Navbar />
                <Box sx={styles.contentContainer}>
                    <Typography style={styles.title} fontStyle={'bold'}>About Me</Typography>
                    <Box sx={{...styles.card, top: 250,}}>
                        <Typography sx={styles.headerText}>{`Hey there! I’m Nathan.`}</Typography>
                        <Box sx={{overflowY: 'scroll'}}>
                            <Typography sx={styles.text}>{`I’m a ${calculateAge()}-year-old from the San Francisco Bay Area. Growing up as the child of two software engineers in the heart of Silicon Valley, I was surrounded by technology and developed a passion for programming at a young age. Aside from my interest in tech, I also have a love for sports. I played high-level youth soccer throughout my childhood, and I still play today for my college varsity team. Additionally, I’ve recently developed an interest in climbing and traveling, which I find to be great ways to challenge myself and explore the world around me.`}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{...styles.card, top: 200, left: `clamp(850px, 60vw, 100vw)`}}>
                        <Typography sx={styles.headerText}>{`I’m a CS student at MIT.`}</Typography>
                        <Box sx={{flex: 1, overflow: 'scroll'}}>
                            <Typography sx={styles.text}>{`I started my undergraduate studies in 2021, and I’m currently a ${calculateStudentStatus()}. I’ve been really enjoying my academic experience so far, and I’ve learned a lot in a short amount of time. In addition to my academic pursuits, I’m also an active member of the campus community. I'm a part of the men’s soccer team, which allows me to continue pursuing my passion for the sport. I’m also involved in VR/AR MIT and MIT Entrepreneurship Club, where I enjoy exploring innovative ideas and networking with other like-minded individuals. Outside of my extracurricular activities, I'm currently doing research with the MIT Media Lab on time-of-flight imaging. It's an exciting opportunity to work alongside talented researchers and contribute to cutting-edge advancements in the field. Overall, I’m grateful for the opportunities that MIT has provided me, and I'm excited to see what the future holds as I continue to grow and learn.`}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{...styles.card, top: `clamp(400px, 60vh, 100vh)`, left: `clamp(500px, 35vw, 100vw)`}}>
                        <Typography sx={styles.headerText}>{`What’s this about?`}</Typography>
                        <Box sx={{flex: 1, overflow: 'scroll'}}>
                            <Typography sx={styles.text}>{`I made this website to showcase some of the cool things I’ve been working on outside the classroom & work experiences. I’ve always enjoyed creating side projects, and here is a place I can put them all together! Thanks for checking out the website, and if you have any questions, ideas, or just want to get in touch please reach out!`}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{position: 'absolute', top: `clamp(200px + clamp(150px, 25vh, 100vh) + 20px, 25vh + 200px + 20px, 100vh)`, left: `clamp(850px, 60vw, 100vw)`}}>
                        <ContactBar />
                    </Box>
                    {/* <Arrow1 style={{...styles.arrow1, position: 'absolute'}} />
                    <Arrow2 style={{...styles.arrow2, position: 'absolute'}} />
                    <Arrow3 style={{...styles.arrow3, position: 'absolute'}} /> */}
                </Box>
            </Box>
        </Box>
    );
}

export default About;