import { Box, Button, useTheme, Drawer as D, styled } from "@mui/material";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from "react-router-dom";
import { theme2 } from "../../App";

type TabLink = {
    route: string,
    text: string,
}

const Drawer = (): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    const tabs: Array<TabLink> = [
        {
            route: '/',
            text: 'Home'
        },
        {
            route: '/about',
            text: 'About'
        },
        {
            route: '/projects',
            text: 'Projects'
        }
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => setDrawerOpen(true)}
                sx={{ ...(drawerOpen && { display: 'none' }), mr: 10, mt: 10}}
            >
                <MenuIcon fontSize="large"/>
            </IconButton>
            <D
                sx={{
                    width: '100%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        backgroundColor: theme2.palette.primary.main,
                    },
                }}
                variant="temporary"
                anchor="right"
                open={drawerOpen} 
                onClose={() => {setDrawerOpen(false)}}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', m: 20 }}>
                    <DrawerHeader sx={{ mb: 40}}>
                        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'black', }}>
                            {theme2.direction === 'rtl' ? <ChevronLeftIcon color="inherit" fontSize="large"/> : <ChevronRightIcon color="inherit" fontSize="large"/>}
                        </IconButton>
                    </DrawerHeader>
                    {
                        tabs.map((tab: TabLink, index: number) => {
                            return (
                                <Button 
                                    key={index}
                                    variant={'text'} 
                                    href={tab.route} 
                                    disableRipple={true} 
                                    sx={{ 
                                        padding: 0,
                                        textTransform: 'none', 
                                        fontSize: theme2.typography.h3.fontSize,
                                        color: 'black',
                                        mb: 5,
                                    }}
                                >
                                    {tab.text}
                                </Button>
                            );
                        })
                    }
                </Box>
            </D>
        </Box>
    )
}

export default Drawer;