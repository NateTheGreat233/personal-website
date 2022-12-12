import { Box, Link, Modal, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fab } from "@mui/material";
import { useState } from "react";

const ContactButton = ({altColor}: {altColor: boolean}): JSX.Element => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const theme = useTheme();
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up("md"));

    const textStyle = {
        color: 'gray',
        ':hover': {
            color: 'white',
        }
    };

    return (
        <Box>
            <Fab
                variant="extended"
                disableRipple={true}
                sx={{ 
                    position: 'fixed', 
                    bottom: 16, 
                    right: 16, 
                    textTransform: 'none', 
                    backgroundColor: altColor ? 'white' : theme.palette.primary.main,
                    color: altColor ? 'black' : theme.palette.secondary.main,
                    fontSize: theme.typography.h4.fontSize,
                    ':hover': {
                        backgroundColor: 'black',
                        color: altColor ? 'white' : 'inherit',
                    }
                }}
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                contact me
            </Fab>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', width: isDesktop ? 400 : 300, height: isDesktop ? 400 : 300, backgroundColor: 'black', borderRadius: 20, padding: 40, alignItems: 'center',}}>
                    <Typography variant={"h2"} sx={{flex:0.25, mb: 20}}>
                        contact me
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex:0.75 }}>
                        <Link href="mailto:nateguntvedt@gmail.com" color='inherit' underline={"none"} sx={{ mb: 10, }}>
                            <Typography variant={isDesktop ? "h3" : "h4"} sx={textStyle}>
                                {"<email>"}
                            </Typography>
                        </Link>
                        <Link href="https://www.linkedin.com/in/nathan-guntvedt-00466318b/" color='inherit' underline={"none"} target="_blank" sx={{ mb: 10}}>
                            <Typography variant={isDesktop ? "h3" : "h4"} sx={textStyle}>
                                {"<linkedin>"}
                            </Typography>
                        </Link>
                        <Link href="https://github.com/NateTheGreat233" color='inherit' underline={"none"} target="_blank" sx={{ mb: 10}}>
                            <Typography variant={isDesktop ? "h3" : "h4"} sx={textStyle}>
                                {"<github>"}
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default ContactButton;