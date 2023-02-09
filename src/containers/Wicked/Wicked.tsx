import { Avatar, Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import ContactButton from "../../components/ContactButton.tsx";
import Drawer from "../../components/Drawer";
import Navbar from "../../components/Navbar";
import Alien from "../../assets/photos/Alien.png";
import Crow from "../../assets/photos/Crow.png";
import Devil from "../../assets/photos/Devil.png";
import Ghost from "../../assets/photos/Ghost.png";
import Gorilla from "../../assets/photos/Gorilla.png";
import Pepper from "../../assets/photos/Pepper.png";
import Pumpkin from "../../assets/photos/Pumpkin.png";
import Reaper from "../../assets/photos/Reaper.png";
import Robot from "../../assets/photos/Robot.png";
import Witch from "../../assets/photos/Wicked.png";
import { Image } from "@mui/icons-material";

const Wicked = (): JSX.Element => {

    const theme = useTheme();
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('md'));
    const imageSize: number = 100;

    const images: string[] = [Witch, Alien, Crow, Devil, Ghost, Gorilla, Pepper, Pumpkin, Reaper, Robot, Witch];

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
            {isDesktop ? <Navbar /> : <Drawer />}
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, margin: 20}}>
                <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                    {isDesktop &&
                        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center',}}>
                            <Typography variant="h1" style={{marginBottom: 50}}>Wicked!</Typography>
                            {images.slice(0, 7).map((image: string, ix: number) => {
                                const offsetY: number = ix * 50 + 100;
                                const offsetX: number = ix % 2 === 0 ? 40 : -40;

                                return (
                                    <Avatar
                                        key={`${image}-${ix}`}
                                        src={image}
                                        sx={{ width: imageSize, height: imageSize, translate: `${offsetX}px ${offsetY}px`, position: 'absolute'}}
                                    />
                                )
                            })}
                        </Box>
                    }
                    <Box 
                        borderLeft={isDesktop ? 2 : 0}
                        sx={{ display: 'flex', flexDirection: 'column', flex: 2, alignItems: 'center', borderLeftColor: theme.palette.primary.main}}
                    >
                        <Typography variant={isDesktop ? "h1" : "h2"} sx={{textAlign: 'center'}}>Have a problem?</Typography>
                        <Typography variant="h4">Send me an email</Typography>
                        <Link href="mailto:wicked1tester@gmail.com" color='inherit' underline={"none"} sx={{ mb: 10, }}>
                            <Typography variant={isDesktop ? "h3" : "h4"} sx={{mt: 50}}>
                                {"wicked1tester@gmail.com"}
                            </Typography>
                        </Link>
                        <Box
                            component="img"
                            sx={{width: '50%', opacity: 0.1}}
                            alt="Wicked! logo"
                            src={require('../../assets/art/witch_hat.png')}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Wicked;