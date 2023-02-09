import { Avatar, Box, Slide, Typography, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../../components/Navbar";
import Greece from "../../assets/people/greece.png";
import Soccer from "../../assets/people/soccer.jpg";
import Typed from "react-typed";
import { useState } from "react";
import ContactButton from "../../components/ContactButton.tsx";
import Drawer from "../../components/Drawer";

const About = (): JSX.Element => {

    const [typingDone, setTypingDone] = useState<boolean>(false);
    const [secondShouldCome, setSecondShouldCome] = useState<boolean>(false);
    const theme = useTheme();
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('md'));

    const imageSize: number = isDesktop ? 200 : 100;
    const margin: number = 40;


    return (
        <Box sx={{ display: 'flex', height: '100vh', width: '100vw', flexDirection: 'column' }}>
            {isDesktop ? <Navbar /> : <Drawer />}
            <Box sx={{ display: 'flex', flex: 1, flexDirection: 'row', m: margin,}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mr: margin }}>
                    <Avatar
                        alt="Me!"
                        src={Greece}
                        sx={{ width: imageSize, height: imageSize }}
                    />
                    <Avatar
                        alt="Me!"
                        src={Soccer}
                        sx={{ width: imageSize, height: imageSize, position: 'relative', bottom: margin/2, left: margin, mr: margin, }}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <Typed
                        style={{ fontSize: isDesktop ? theme.typography.h1.fontSize : theme.typography.h3.fontSize, userSelect: 'none'}}
                        strings={[
                            "Hi, I'm Nathan.",
                        ]}
                        onComplete={() => {
                            setTypingDone(true);
                            setTimeout(() => {
                                setSecondShouldCome(true);
                            }, 100);
                        }}
                        typeSpeed={100}
                        loop={false}
                    />
                    {isDesktop && 
                        <Box>
                            <Slide direction="up" in={typingDone} mountOnEnter unmountOnExit>
                                <Typography variant={isDesktop ? 'h4' : 'h6'} sx={{ mt: margin/2 }}>
                                    {
                                        `I'm a 20 year old from Santa Clara, CA. More recently, I moved to the east coast for college ` +
                                        `where I now study computer science and artificial intelligence at MIT. On campus, I'm part ` +
                                        `of the men's varsity soccer team, AR/VR MIT, and MIT Entrepreneurship Club. Outside the ` +
                                        `classroom, I enjoy working on side projects (such as this), spending time with friends and ` +
                                        `family, playing soccer, and traveling.`
                                    }
                                </Typography>
                            </Slide>
                            <Slide direction="up" in={secondShouldCome} mountOnEnter unmountOnExit>
                                <Typography variant={isDesktop ? 'h4' : 'h6'} sx={{ mt: margin/2, pb: 30 }}>
                                    {
                                        `Growing up I loved playing video games; In fact, I still do. So when I ` +
                                        `learned how to code, naturally I wanted to make my own games. I started making ` +
                                        `small games (like pong) in Java, and eventually began using game engines such as Unity to make ` +
                                        `more complicated projects. ` +
                                        `I think the experimentation with making games has allowed me to grow exponentially as a developer, ` +
                                        `and as I grew older, I eventually moved on from just making games. After taking a web development class, I realized ` +
                                        `I really enjoy making cool, interactive websites. My most recent job working as a web developer has allowed me to ` +
                                        `learn and continue to grow that skillset. However, ` +
                                        `most recently I've been working on a mobile app which ` +
                                        `has been a cool learning experience as well. Hopefully it'll be finished by the summer!`
                                    }
                                </Typography>
                            </Slide>
                        </Box>
                    }
                </Box>
            </Box>
            {!isDesktop &&
                <Box sx={{ml: 20, mr: 20, display: 'flex', flexDirection: 'column'}}>
                    <Slide direction="up" in={typingDone} mountOnEnter unmountOnExit>
                        <Typography variant={isDesktop ? 'h4' : 'h6'}>
                            {
                                `I'm a 20 from Santa Clara, CA. More recently, I moved to the east coast for college ` +
                                `where I now study computer science and artificial intelligence at MIT. On campus, I'm part ` +
                                `of the men's varsity soccer team, AR/VR MIT, and MIT Entrepreneurship Club. Outside the ` +
                                `classroom, I enjoy working on side projects (such as this), spending time with friends and ` +
                                `family, playing soccer, and traveling.`
                            }
                        </Typography>
                    </Slide>
                    <Slide direction="up" in={secondShouldCome} mountOnEnter unmountOnExit>
                        <Typography variant={isDesktop ? 'h4' : 'h6'} sx={{ mt: margin/2, pb: 30 }}>
                            {
                                `Growing up I loved playing video games; In fact, I still do. So when I ` +
                                `learned how to code, naturally I wanted to make my own games. I started making ` +
                                `small games (like pong) in Java, and eventually began using game engines such as Unity. ` +
                                `I think the experimentation with making games has allowed me to grow exponentially as a developer, ` +
                                `and as I grew older, I eventually moved on from just making games. I got into web development, ` +
                                `which is what I was doing in my previous job. Most recently, I've been working on a mobile app which ` +
                                `has been a cool learning experience as well.`
                            }
                        </Typography>
                    </Slide>
                </Box>
            }
            <ContactButton altColor={false} />
        </Box>
    )
}

export default About;