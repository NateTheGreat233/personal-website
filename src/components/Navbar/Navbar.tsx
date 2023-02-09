import { Box, Button, Collapse, Divider, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from '../../assets/art/logo.png';

const Navbar = (): JSX.Element => {

    const theme = useTheme();
    const navigate = useNavigate();

    // 0: about
    // 1: experience
    // 2: wicked!
    const [currentHover, setCurrentHover] = useState<number>(-1);

    const horizontalPadding: number = 35;
    const verticalPadding: number = 20;
    const collapsedSize: number = 32;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ':hover': { cursor: 'default' } }}>
            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between', pt: verticalPadding, pb: verticalPadding, pl: horizontalPadding, pr: horizontalPadding, zIndex: 1}}>
                <Box 
                    component="img"
                    alt={`Logo`}
                    src={Logo}
                    sx={{ 
                        width: 80, 
                        height: 80, 
                        transition: 'all 1s ease-in-out',
                        userSelect: 'none',
                        ':hover': {
                            cursor: 'pointer',
                            transition: 'all 0.5s ease-in-out',
                            transform: `rotate(${10}deg)`,
                        }
                    }}
                    onClick={() => {
                        navigate('/');
                    }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Collapse 
                        in={currentHover < 1} 
                        sx={{ mr: horizontalPadding }}
                        collapsedSize={collapsedSize}
                    >
                        <Button 
                            onMouseOver={() => setCurrentHover(0)}
                            onMouseLeave={() => setCurrentHover(-1)}
                            variant={'text'} 
                            href={'/about'} disableRipple={true} 
                            sx={{ 
                                padding: 0,
                                textTransform: 'none', 
                                fontSize: theme.typography.h3.fontSize,
                                color: currentHover > 0 ? theme.palette.secondary.dark : theme.palette.secondary.main,
                                ':hover': {
                                    color: 'white'
                                }
                            }}
                        >
                            about
                        </Button>
                    </Collapse>               
                    <Collapse 
                        in={currentHover == -1 || currentHover == 1} 
                        sx={{ mr: horizontalPadding }}
                        collapsedSize={collapsedSize}
                    >
                        <Button 
                            onMouseOver={() => setCurrentHover(1)}
                            onMouseLeave={() => setCurrentHover(-1)}
                            variant={'text'} 
                            href={'/experience'} disableRipple={true} 
                            sx={{ 
                                padding: 0,
                                textTransform: 'none', 
                                fontSize: theme.typography.h3.fontSize,
                                color: currentHover == 0 || currentHover > 1 ? theme.palette.secondary.dark : theme.palette.secondary.main,
                                ':hover': {
                                    color: 'white'
                                }
                            }}
                        >
                            experience
                        </Button>
                    </Collapse>
                    <Collapse 
                        in={currentHover == -1 || currentHover == 2} 
                        sx={{ mr: horizontalPadding }}
                        collapsedSize={collapsedSize}
                    >
                        <Button 
                            onMouseOver={() => setCurrentHover(2)}
                            onMouseLeave={() => setCurrentHover(-1)}
                            variant={'text'} 
                            href={'/wicked'} disableRipple={true} 
                            sx={{ 
                                padding: 0,
                                textTransform: 'none', 
                                fontSize: theme.typography.h3.fontSize,
                                color: currentHover == 0 || currentHover > 1 ? theme.palette.secondary.dark : theme.palette.secondary.main,
                                ':hover': {
                                    color: 'white'
                                }
                            }}
                        >
                            wicked
                        </Button>
                    </Collapse>
                </Box>
            </Box>
            <Divider sx={{ width: '95%', borderColor: theme.palette.primary.main, borderWidth: 1, opacity: 0.3 }}/>
        </Box>
    )
}

export default Navbar;