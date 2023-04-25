import { Box, Typography, useMediaQuery } from "@mui/material";
import { theme2 } from "../../App";
import Navbar from "../../components/Navbar2";
import ContactBar from "../../components/ContactBar";
import { useNavigate } from "react-router-dom";
import Drawer from "../../components/Drawer2";

type ProjectInfo = {
    title: string,
    description: string,
    backgroundColor: string,
    id: string,
}

const Projects = (): JSX.Element => {

    const navigate = useNavigate();
    const isDesktop = useMediaQuery(theme2.breakpoints.up('md'));
    
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
            alignItems: isDesktop ? 'default' : 'center',
            flex: 1,
            pl: isDesktop ? 100 : 10,
            pr: isDesktop ? 100 : 10,
        },
        projects: {
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            mt: isDesktop ? 50 : 30,
        },
        projectContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: isDesktop ? 325 : 300,
            height: isDesktop ? 200 : 150,
            padding: 10,
            mr: isDesktop ? 20 : 0,
            mb: isDesktop ? 0 : 10,
            borderColor: theme2.palette.primary.light,
            borderRadius: 5,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
        title: {
            fontSize: isDesktop ? 75 : 45,
            marginBottom: 15,
        },
        projectTitle: {
            fontSize: isDesktop ? 40 : 25,
        },  
        projectDescription: {
            fontSize: isDesktop ? 20 : 15,
        }
    };

    const projects: Array<ProjectInfo> = [
        {
            title: 'Snail Trail',
            description: 'The first game I published!',
            backgroundColor: '#DCF6E2',
            id: 'snail-trail',
        },
        {
            title: 'Time To Meet',
            description: 'Group Meeting Scheduling Service',
            backgroundColor: '#a7c2eb',
            id: 'time-to-meet'
        },
        {
            title: 'Wicked!',
            description: 'My first iOS game (not published yet)',
            backgroundColor: '#c6b6f2',
            id: 'wicked!',
        },
    ];

    if (!isDesktop) {
        return (
            <Box sx={styles.container}>
                <Box sx={styles.innerContainer}>
                    <Drawer />
                    <Box sx={styles.contentContainer}>
                        <Typography style={{...styles.title, marginBottom: 20, textAlign: 'center'}} fontStyle={'bold'}>Projects</Typography>
                        <ContactBar />
                        <Box sx={styles.projects}>
                            {
                                projects.map((project: ProjectInfo, _index: number) => {
                                    return (
                                        <Box 
                                            key={`projectContainer-${project.title}`}
                                            sx={{
                                                ...styles.projectContainer, 
                                                backgroundColor: project.backgroundColor,
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                }
                                            }}
                                            onClick={() => {
                                                navigate(`/projects/${project.id}`);
                                            }}
                                        >
                                            <Typography style={styles.projectTitle}>{project.title}</Typography>
                                            <Typography style={styles.projectDescription} fontStyle={"italic"}>{project.description}</Typography>
                                        </Box>
                                    );
                                })
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <Box sx={styles.container}>
            <Box sx={styles.innerContainer}>
                <Navbar />
                <Box sx={styles.contentContainer}>
                    <Typography style={styles.title} fontStyle={'bold'}>Projects</Typography>
                    <ContactBar />
                    <Box sx={styles.projects}>
                        {
                            projects.map((project: ProjectInfo, _index: number) => {
                                return (
                                    <Box 
                                        key={`projectContainer-${project.title}`}
                                        sx={{
                                            ...styles.projectContainer, 
                                            backgroundColor: project.backgroundColor,
                                            '&:hover': {
                                                cursor: 'pointer',
                                            }
                                        }}
                                        onClick={() => {
                                            navigate(`/projects/${project.id}`);
                                        }}
                                    >
                                        <Typography style={styles.projectTitle}>{project.title}</Typography>
                                        <Typography style={styles.projectDescription} fontStyle={"italic"}>{project.description}</Typography>
                                    </Box>
                                );
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;