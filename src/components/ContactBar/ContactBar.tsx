import { Box, Link } from "@mui/material";

enum Media {
    GITHUB,
    LINKEDIN
}

type LinkInfo = {
    url: string,
    caption: string,
}

const linkMap = new Map<Media, LinkInfo>([
    [Media.GITHUB, {url: 'https://github.com/NateTheGreat233', caption: 'Come see some of my projects!'}],
    [Media.LINKEDIN, {url: 'https://www.linkedin.com/in/nathan-guntvedt-00466318b/', caption: 'Check out my Linkedin profile!'}]
]);

const ContactBar = (): JSX.Element => {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            maxWidth: 50*[...linkMap.keys()].length,
        },
        logo: {
            mr: 15,
            '&:hover': {
                cursor: 'pointer',
            },
            pointerEvents: 'none'
        },
    }

    return (
        <Box sx={styles.container}>
            <Link href={linkMap.get(Media.GITHUB)?.url} target={"_blank"}>
                <Box 
                    sx={styles.logo} 
                    component="img" 
                    src={require('../../assets/logos/github.png')}
                />
            </Link>
            <Link href={linkMap.get(Media.LINKEDIN)?.url} target={"_blank"}>
                <Box 
                    sx={styles.logo} 
                    component="img" 
                    src={require('../../assets/logos/linkedin.png')}
                />
            </Link>
        </Box>
    )
};

export default ContactBar;