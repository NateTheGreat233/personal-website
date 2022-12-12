import { Box, Button, useTheme, Drawer as D, styled } from "@mui/material";
import { useState } from "react";
import Logo from '../../assets/art/logo.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from "react-router-dom";

const Drawer = (): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const theme = useTheme();
    const navigate = useNavigate();

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      }));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={Logo} onClick={() => {navigate('/')}} style={{ width: 75, height: 75, marginLeft: 10, marginTop: 10}} />
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => setDrawerOpen(true)}
                sx={{ ...(drawerOpen && { display: 'none' }), mr: 20}}
            >
                <MenuIcon />
            </IconButton>
            <D
                sx={{
                    width: '100%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        backgroundColor: theme.palette.primary.main,
                    },
                }}
                variant="temporary"
                anchor="right"
                open={drawerOpen} 
                onClose={() => {setDrawerOpen(false)}}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', m: 20 }}>
                    <DrawerHeader sx={{ mb: 40}}>
                        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white', }}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon color="inherit" fontSize="large"/> : <ChevronRightIcon color="inherit" fontSize="large"/>}
                        </IconButton>
                    </DrawerHeader>
                    <Button 
                        variant={'text'} 
                        href={'/'} 
                        disableRipple={true} 
                        sx={{ 
                            padding: 0,
                            textTransform: 'none', 
                            fontSize: theme.typography.h3.fontSize,
                            color: 'white',
                            mb: 5,
                        }}
                    >
                        home
                    </Button>
                    <Button 
                        variant={'text'} 
                        href={'/about'} 
                        disableRipple={true} 
                        sx={{ 
                            padding: 0,
                            textTransform: 'none', 
                            fontSize: theme.typography.h3.fontSize,
                            color: 'white',
                            mb: 5,
                        }}
                    >
                        about
                    </Button>
                    <Button 
                        variant={'text'} 
                        href={'/experience'} 
                        disableRipple={true} 
                        sx={{ 
                            padding: 0,
                            textTransform: 'none', 
                            fontSize: theme.typography.h3.fontSize,
                            color: 'white',
                            mb: 5,
                        }}
                    >
                        experience
                    </Button>
                </Box>
            </D>
        </Box>
    )
}

export default Drawer;