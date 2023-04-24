import { Box, Typography } from "@mui/material";
import { theme2 } from "../../App";
import Navbar from "../../components/Navbar2";
import ContactBar from "../../components/ContactBar";
import { useNavigate } from "react-router-dom";

type ProjectInfo = {
    title: string,
    description: string,
    backgroundColor: string,
    id: string,
}

const Projects = (): JSX.Element => {

    const navigate = useNavigate();
    
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
            flex: 1,
            pl: 100,
            pr: 100
        },
        projects: {
            display: 'flex',
            flexDirection: 'row',
            mt: 50,
        },
        projectContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: 325,
            height: 200,
            padding: 10,
            mr: 20,
            borderColor: theme2.palette.primary.light,
            borderRadius: 5,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
        title: {
            fontSize: 75,
            marginBottom: 15,
        },
        projectTitle: {
            fontSize: 40,
        },  
        projectDescription: {
            fontSize: 20,
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