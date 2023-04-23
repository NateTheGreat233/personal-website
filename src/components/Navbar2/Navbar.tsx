import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { theme2 } from "../../App";

type LinkInfo = {
    text: string,
    path: string
};

enum PageState {
    HOME,
    ABOUT,
    PROJECTS_PAGE,
    IN_PROJECT
};

const Navbar = (): JSX.Element => {

    const navigate = useNavigate();
    const location = useLocation();

    const linkMap = new Map<PageState, Array<LinkInfo>>([
        [PageState.HOME, [
            {text: 'Home', path: '/'},
            {text: 'About', path: '/about'},
            {text: 'Projects', path: '/projects'}
        ]],
        [PageState.ABOUT, [
            {text: 'Home', path: '/'},
            {text: 'About', path: '/about'},
            {text: 'Projects', path: '/projects'}
        ]],
        [PageState.PROJECTS_PAGE, [
            {text: 'Home', path: '/'},
            {text: 'About', path: '/about'},
            {text: 'Projects', path: '/projects'}
        ]],
        [PageState.IN_PROJECT, [
            {text: 'Home', path: '/'},
            {text: 'About', path: '/about'},
            {text: 'Projects', path: '/projects'},
        ]]
    ]);

    const path = location.pathname;
    let pageState: PageState = PageState.HOME;
    if (path === '/about') {
        pageState = PageState.ABOUT
    } else if (path === '/projects') {
        pageState = PageState.PROJECTS_PAGE;
    } else if (path !== '/') {
        pageState = PageState.IN_PROJECT;
    }

    const styles = {
        container: {
            height: 100,
            minHeight: 100,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        text: {
            fontSize: 40,
            mr: 50,
            p: 10,
            '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
            }
        }
    };

    return (
        <Box sx={styles.container}>
            {
                linkMap.get(pageState)?.map((info: LinkInfo, _index: number) => {
                    return (
                        <Typography 
                            key={`navbarLink-${info.text}`}
                            sx={{
                                ...styles.text, 
                                '&:hover': {
                                    cursor: location.pathname === info.path ? 'default' : 'pointer',
                                    textDecoration: location.pathname === info.path ? 'none' : 'underline',
                                },
                                color: location.pathname === info.path ? theme2.palette.secondary.main : 'default',
                            }}
                            onClick={() => {
                                if (location.pathname !== info.path) {
                                    navigate(info.path);
                                }
                            }}
                        >{info.text}</Typography>
                    )
                })
            }
        </Box>
    );
};

export default Navbar;