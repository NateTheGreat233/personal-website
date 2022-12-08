import { Avatar, Box, Slide, Typography, useTheme } from "@mui/material";
import Navbar from "../../components/Navbar";
import Greece from "../../assets/people/greece.png";
import Soccer from "../../assets/people/soccer.jpg";
import Typed from "react-typed";
import { useState } from "react";
import ContactButton from "../../components/ContactButton.tsx";

const About = (): JSX.Element => {

    const [typingDone, setTypingDone] = useState<boolean>(false);
    const [secondShouldCome, setSecondShouldCome] = useState<boolean>(false);

    const imageSize: number = 200;
    const margin: number = 40;
    const theme = useTheme();


    return (
        <Box sx={{ display: 'flex', height: '100vh', width: '100vw', flexDirection: 'column' }}>
            <Navbar />
            <Box sx={{ display: 'flex', flex: 1, flexDirection: 'row', m: margin,}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mr: margin}}>
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
                        style={{ fontSize: theme.typography.h1.fontSize, userSelect: 'none'}}
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
                    <Slide direction="up" in={typingDone} mountOnEnter unmountOnExit>
                            <Typography variant={'h4'} sx={{ mt: margin/2 }}>
                                {
                                    `I'm a 19 year old from Santa Clara, CA. More recently, I moved to the east coast for college ` +
                                    `where I now study computer science and artificial intelligence at MIT. On campus, I'm part ` +
                                    `of the men's varsity soccer team, AR/VR MIT, and MIT Entrepreneurship Club. Outside the ` +
                                    `classroom, I enjoy working on side projects (such as this), spending time with friends and ` +
                                    `family, playing soccer, and traveling.`
                                }
                            </Typography>
                    </Slide>
                    <Slide direction="up" in={secondShouldCome} mountOnEnter unmountOnExit>
                        <Typography variant={'h4'} sx={{ mt: margin/2 }}>
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
            </Box>
            <ContactButton />
        </Box>
    )
}

export default About;