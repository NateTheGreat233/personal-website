import { Box, Button, Collapse, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Navbar = (): JSX.Element => {

    const theme = useTheme();
    const [aboutHover, setAboutHover] = useState<boolean>(false);
    const [experienceHover, setExperienceHover] = useState<boolean>(false);
    const [projectsHover, setProjectsHover] = useState<boolean>(false);

    const horizontalPadding: number = 35;
    const verticalPadding: number = 20;
    const collapsedSize: number = 32;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', mt: verticalPadding, mb: verticalPadding}}>
            <Collapse 
                in={!experienceHover && !projectsHover} 
                sx={{ mr: horizontalPadding }}
                collapsedSize={collapsedSize}
            >
                <Button 
                    onMouseOver={() => setAboutHover(true)}
                    onMouseLeave={() => setAboutHover(false)}
                    variant={'text'} 
                    href={'/about'} disableRipple={true} 
                    sx={{ 
                        padding: 0,
                        textTransform: 'none', 
                        fontSize: theme.typography.h3.fontSize,
                        color: experienceHover || projectsHover ? theme.palette.secondary.dark : theme.palette.secondary.main,
                        ':hover': {
                            color: 'white'
                        }
                    }}
                >
                    about
                </Button>
            </Collapse>               
            <Collapse 
                in={!aboutHover && !projectsHover} 
                sx={{ mr: horizontalPadding }}
                collapsedSize={collapsedSize}
            >
                <Button 
                    onMouseOver={() => setExperienceHover(true)}
                    onMouseLeave={() => setExperienceHover(false)}
                    variant={'text'} 
                    href={'/about'} disableRipple={true} 
                    sx={{ 
                        padding: 0,
                        textTransform: 'none', 
                        fontSize: theme.typography.h3.fontSize,
                        color: aboutHover || projectsHover ? theme.palette.secondary.dark : theme.palette.secondary.main,
                        ':hover': {
                            color: 'white'
                        }
                    }}
                >
                    experience
                </Button>
            </Collapse>
            <Collapse 
                in={!aboutHover && !experienceHover} 
                sx={{ mr: horizontalPadding }}
                collapsedSize={collapsedSize}
            >
                <Button 
                    onMouseOver={() => setProjectsHover(true)}
                    onMouseLeave={() => setProjectsHover(false)}
                    variant={'text'} 
                    href={'/about'} disableRipple={true} 
                    sx={{ 
                        padding: 0,
                        textTransform: 'none', 
                        fontSize: theme.typography.h3.fontSize,
                        color: experienceHover || aboutHover ? theme.palette.secondary.dark : theme.palette.secondary.main,
                        ':hover': {
                            color: 'white'
                        }
                    }}
                >
                    projects
                </Button>
            </Collapse>
        </Box>
    )
}

export default Navbar;