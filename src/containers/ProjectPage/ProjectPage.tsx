import { useLocation, useNavigate } from "react-router-dom";
import { theme2 } from "../../App";
import { Box, Link, Typography } from "@mui/material";
import Navbar from "../../components/Navbar2";
import ContactBar from "../../components/ContactBar";
import { useEffect, useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

enum Project {
    SNAIL_TRAIL = 'snail-trail',
    TIME_TO_MEET = 'time-to-meet'
}

enum NavigateType {
    LEFT,
    RIGHT
}

type ProjectDetails = {
    title: string,
    images: Array<any>,
    description: JSX.Element,
    tags: Array<string>
}

const ProjectPage = (): JSX.Element => {

    const [projectInfo, setProjectInfo] = useState<ProjectDetails>();
    const [mediaIndex, setMediaIndex] = useState<number>(0);
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.pathname.split('/').reverse()[0];
    
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
            flexDirection: 'column',
            flex: 0.9,
            pl: 40,
            pr: 40,
        },
        dataContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        pictureContainer: {
            flex: 1.1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            mr: 40,
        },
        underPicture: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        textContainer: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: theme2.palette.primary.main,
            border: 1,
            borderColor: theme2.palette.primary.light,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: 10,
            borderRadius: 5,
            maxHeight: '50vh',
            overflowY: 'scroll',
        },
        imageWrapper: {
            flex: 1,
            width: '100%',
        },  
        picture: {
            borderRadius: 5,
            marginBottom: 20,
            height: '50vh',
            width: '100%',
            pointerEvents: 'none',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            border: 1,
            borderColor: theme2.palette.primary.light,
            objectFit: 'contain',
            backgroundColor: theme2.palette.primary.main,
        },
        title: {
            fontSize: 75,
            marginLeft: 80,
        },
        description: {
            fontSize: 20,
            whiteSpace: 'pre-line',
            display: 'inline',
        },
        tag: {
            fontSize: 16,
        },
        arrow: {
            fontSize: 75,
            marginTop: '22vh',
            color: 'black',
        },
    };

    const projectMap = new Map<Project, ProjectDetails>([
        [Project.SNAIL_TRAIL, {
            title: 'Snail Trail',
            images: [
                require('../../assets/photos/snailTrail.jpg'),
                require('../../assets/gifs/snailTrailGameplay.gif')
            ],
            description: (
                <Typography sx={styles.description}>
                    {'Snail Trail is a puzzle game I made back in high school (and published in my first year of college) where you control two different snails with the objective to move both of them to their desired square. This is the first project that thousands of people have interacted with (20k+), and most of them seem to like it! I made it using Unity and C#. (I did the artwork, too!)\n\nYou can play it '}
                    <Link href="https://armorgames.com/snail-trail-game/19222" color='inherit' underline={"none"} target="_blank" sx={{ mb: 10}}>
                            <Typography sx={{...styles.description, color: 'blue'}} component={"span"}>
                                {"here"}
                            </Typography>
                    </Link>
                    {'!\n\n'}
                    <Link href="https://www.youtube.com/watch?v=GkcV5katWMA" color='inherit' underline={"none"} target="_blank" sx={{ mb: 10}}>
                            <Typography sx={{...styles.description, color: 'blue'}} component={"span"}>
                                {"Here"}
                            </Typography>
                    </Link>
                    {' is a tutorial someone made for the game (it’s hard!)'}
                </Typography>
            ),
            tags: ['Unity', 'C#', 'OOP', 'Game Dev']
        }],
        [Project.TIME_TO_MEET, {
            title: 'Time To Meet',
            images: [
                require('../../assets/gifs/timeToMeet.gif'),
                require('../../assets/photos/timeToMeet.png')
            ],
            description: (
                <Typography sx={styles.description}>
                    {'Time To Meet is a website I made in my sophomore year of college. I learned a ton about web development through taking a web-dev class + my freshman year internship and have been making websites ever since. This site helps you and your group find a time that works well for everyone. Simply create an event and add your personal availability. Then, send the event to your group and have them enter their availabilities. The time with the darkest shade fits best for everyone!\n\nTry it '}
                    <Link href="https://www.timetomeet.net" color='inherit' underline={"none"} target="_blank" sx={{ mb: 10}}>
                            <Typography sx={{...styles.description, color: 'blue'}} component={"span"}>
                                {"here"}
                            </Typography>
                    </Link>
                    {'!'}
                </Typography>
            ),
            tags: ['React', 'Typescript', 'AWS Lambda', 'DynamoDB', 'Redux', 'Web Dev']
        }] 
    ]);

    useEffect(() => {
        const projectDetails = projectMap.get(id as Project);
        setProjectInfo(projectDetails);

        if (projectDetails === undefined) {
            navigate('/');
        }
    }, []);

    const click = (type: NavigateType, media: Array<any> | undefined): void => {
        if (media === undefined) return;
        
        if (type === NavigateType.LEFT) {
            setMediaIndex(Math.max(0, mediaIndex - 1));
        } else {
            setMediaIndex(Math.min(media.length - 1, mediaIndex + 1));
        }
    }

    return (
        <Box sx={styles.container}>
            <Box sx={styles.innerContainer}>
                <Navbar />
                <Box sx={styles.contentContainer}>
                    <Typography style={styles.title} fontStyle={'bold'}>{projectInfo?.title}</Typography>
                    <Box sx={styles.dataContainer}>
                        <Box sx={styles.pictureContainer}>
                            <NavigateBeforeIcon 
                                sx={{
                                    ...styles.arrow,
                                    opacity: mediaIndex > 0 ? 1 : 0.2,
                                    ':hover': {
                                        cursor: mediaIndex > 0 ? 'pointer' : 'inherit',
                                    }
                                }} 
                                onClick={() => click(NavigateType.LEFT, projectInfo?.images)}
                            />
                            <Box style={styles.imageWrapper}>
                                <Box component={"img"} src={projectInfo?.images[mediaIndex]} sx={styles.picture}/>
                                <Box sx={styles.underPicture}>
                                    <ContactBar />
                                    <Typography style={styles.tag} fontStyle={'italic'}>
                                        {projectInfo?.tags.join(', ')}
                                    </Typography>
                                </Box>
                            </Box>
                            <NavigateNextIcon 
                                sx={{
                                    ...styles.arrow,
                                    opacity: mediaIndex < (projectInfo?.images.length ?? 0) - 1 ? 1 : 0.2,
                                    ':hover': {
                                        cursor: mediaIndex < (projectInfo?.images.length ?? 0) - 1 ? 'pointer' : 'inherit',
                                    }
                                }} 
                                onClick={() => click(NavigateType.RIGHT, projectInfo?.images)}
                            />
                        </Box>
                        <Box sx={styles.textContainer}>
                            {projectInfo?.description}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectPage;