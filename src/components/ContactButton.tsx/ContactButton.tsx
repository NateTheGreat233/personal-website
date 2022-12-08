import { Box, Link, Modal, Typography, useTheme } from "@mui/material";
import { Fab } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactButton = (): JSX.Element => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const theme = useTheme();
    const navigate = useNavigate();

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
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                    fontSize: theme.typography.h4.fontSize,
                    ':hover': {
                        backgroundColor: 'black',
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
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 400, height: 400, backgroundColor: 'black', borderRadius: 20, padding: 40, alignItems: 'center',}}>
                    <Typography variant={"h3"} sx={{flex:0.25}}>
                        contact me
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex:0.75 }}>
                        <Link href="mailto:nateguntvedt@gmail.com" color='inherit' underline={"none"} sx={{ mb: 10, }}>
                            <Typography variant="h4" sx={textStyle}>
                                {"<email>"}
                            </Typography>
                        </Link>
                        <Link href="https://www.linkedin.com/in/nathan-guntvedt-00466318b/" color='inherit' underline={"none"} target="_blank" sx={{ mb: 10}}>
                            <Typography variant="h4" sx={textStyle}>
                                {"<linkedin>"}
                            </Typography>
                        </Link>
                        <Link href="https://github.com/NateTheGreat233" color='inherit' underline={"none"} target="_blank" sx={{ mb: 10}}>
                            <Typography variant="h4" sx={textStyle}>
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