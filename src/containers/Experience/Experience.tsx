import { Box, Divider, Link, Slide, Typography, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../../components/Navbar";
import SnailTrail from "../../assets/photos/snailTrail.jpg";
import What2Do from "../../assets/photos/what2Do.png";
import Doorvest from "../../assets/photos/doorvest.jpg";
import Roblox from "../../assets/photos/roblox.jpg";
import Hololens from "../../assets/photos/AR.jpeg";
import Wicked from "../../assets/photos/Wickeds.png"
import Typed from 'react-typed';
import { useState } from "react";
import { useEffect } from "react";
import ContactButton from "../../components/ContactButton.tsx";
import Drawer from "../../components/Drawer";

interface IExperience {
    title: string,
    image: string,
    aspectRatio: number,
    about: string,
    link?: string,
    altLink?: {
        link: string,
        caption: string,
        linkText: string,
    }
}

const Experience = (): JSX.Element => {

    const theme = useTheme();
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('md'));
    const maxheight: number = 200;

    const experiences: IExperience[] = [
        {
            title: 'Software Engineering @ Roblox',
            image: Roblox,
            aspectRatio: 1,
            about:
                "I'll be working close to home this summer at Roblox! I will be working as a " +
                "software engineer intern. Not quite sure which team I'll be working with but looking " + 
                "forward to the opportunity!"
        },
        {
            title: 'Wicked!',
            image: Wicked,
            aspectRatio: 1,
            about:
                "Just released version 1.0.0 of Wicked! on Apple's app store, go check it out! It's " +
                "a game inspired by the popular party game, Cards Against Humanity. It was a really good " +
                "first project into mobile development for me."
        },
        {
            title: 'Web Dev @ Doorvest',
            image: Doorvest,
            aspectRatio: 1.25,
            about: 
                "The summer after my freshman year of college I had the opportunity to intern at a fintech startup " +
                "called Doorvest. It was a great experience where I learned a ton about web development, and what it " +
                "looks like to work in a more professional setting with a team. It also gave me the opportunity to live " +
                "in San Fransisco with my friends which I really enjoyed!"
            ,
            link: 'https://doorvest.com/',
        },
        {
            title: 'Snail Trail',
            image: SnailTrail,
            aspectRatio: 685/426,
            about: 
                "Snail trail is a puzzle game I made the summer going into college. The goal of the game is to " + 
                "reach the flags by moving two snails across a grid. Along the way, there are various obstacles that " +
                "make it quite challenging. It was also my first Unity game that I completed start to finish; All my previous projects " +
                "wouldn't make it to a production ready state."
            ,
            link: "https://armorgames.com/snail-trail-game/19222",
            altLink: {
                link: 'https://www.youtube.com/watch?v=GkcV5katWMA&t=2s',
                caption: `Someone also made a walkthrough if you get stuck (It's hard!)`,
                linkText: `Watch it here.`,
            },
        },
        {
            title: 'Undergraduate Researcher',
            image: Hololens,
            aspectRatio: 1170/1236,
            about: 
                "Worked on a research project to help people who are hearing-impaired communicate " +
                "in a more natural way. The goal was to use the Microsoft Hololens to create " +
                "subtitles of your conversation in real-time and display the text next to the person " +
                "you are talking to. I worked on the facial detection part of it. Cool stuff"
            ,
        },
        {
            title: 'What 2 do?',
            image: What2Do,
            aspectRatio: 2870/1460,
            about: 
                "What2do is a website I made shortly after taking a web dev class where it helps you " +
                "pick what you want to eat/listen to etc. It's actually not done, but maybe " +
                "at some point I can find some time to finish it!"
            ,
        },
    ];

    const [shouldAnimate, setShouldAnimate] = useState<boolean>(false); 
    const linkColor: string = '#689bed';

    useEffect(() => {
        setTimeout(() => {
            setShouldAnimate(true);   
        }, 1500)
    }, []);

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', flex: 1 }}>
            {isDesktop ? <Navbar /> : <Drawer />}
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, margin: 20 }}>
                {experiences.map((project: IExperience, ix: number) => {
                    const spacing: number = isDesktop ? 30 : 20;

                    return (
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: isDesktop ? ix % 2 == 0 ? 'flex-start' : 'flex-end' : 'center',
                                justifyContent: 'space-between',
                                backgroundColor: theme.palette.primary.main ,
                                borderRadius: 10,
                                pl: spacing,
                                pr: spacing,
                                pb: spacing,
                                m: spacing/3,
                                mb: spacing
                            }} 
                            key={`${project.title}-${ix}`}
                        >
                            <Typed
                                style={{ fontSize: isDesktop ? theme.typography.h1.fontSize : theme.typography.h4.fontSize, userSelect: 'none', textAlign: 'center'}}
                                strings={[
                                    project.title,
                                ]}
                                typeSpeed={75}
                                loop={false}
                            />
                            <Box sx={{ display: 'flex', flexDirection: isDesktop ? ix % 2 == 0 ? 'row' : 'row-reverse' : 'column', alignItems: 'center'}}>
                                <img 
                                    src={project.image}
                                    style={{ aspectRatio: project.aspectRatio, width: isDesktop ? 250 : 100, height: (isDesktop ? 250 : 100)/project.aspectRatio, margin: isDesktop ? 'inherit' : 10}}
                                >
                                </img>
                                <Slide direction={ix % 2 == 0 ? "left" : "right"} in={shouldAnimate} mountOnEnter unmountOnExit style={{}}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', ml: 20, mr: 20, height: '100%'}}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <Typography variant={isDesktop ? "h4" : "h6"}>{project.about}</Typography>  
                                                {project.link &&    
                                                    <Link href={project.link} target="_blank">
                                                        <Typography sx={{ color: linkColor }}>Click here to check it out!</Typography>
                                                    </Link>  
                                                }
                                            </Box>  
                                            {true && 
                                                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                                                    <Typography>{project.altLink?.caption}</Typography>
                                                    <Link href={project.altLink?.link} target="_blank">
                                                        <Typography sx={{ color: linkColor }}>{project.altLink?.linkText}</Typography>
                                                    </Link>
                                                </Box>
                                            } 
                                    </Box>         
                                </Slide>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            <ContactButton altColor={true}/>
        </Box>
    )
}

export default Experience;