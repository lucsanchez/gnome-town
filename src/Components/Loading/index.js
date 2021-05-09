import { Grid, makeStyles, Avatar, Typography, Box } from '@material-ui/core'
import React from 'react'
import Gnome from '../../Assets/gnomeEmoji.png'

export const Loader = () => {
    const classes = useStyles()
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.container}
        >
            <Grid container direction="column" alignItems="center">
                <Avatar src={Gnome} alt="loading" className={classes.icon} />
                <Box py={2}>
                    <Typography variant="body1"> Loading Brastlewark...</Typography>
                </Box>

            </Grid>

        </Grid>

    )
}

const useStyles = makeStyles((theme) => ({
    main: {
        margin: 'auto',
        width: '50%'
    },
    container: {
        minHeight: '100vh'
    },
    icon: {
        animation: '$bounce 1s infinite',
        webkitAnimation: '$bounce 1s infinite'
    },
    "@keyframes bounce": {
        "0%": { transform: "translateY(0)" },
        "30%": { transform: "translateY(-100px)" },
        "50%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(0)" },
    }
}))