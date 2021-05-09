import React from "react";
import { makeStyles, Dialog, IconButton, AppBar, Toolbar, Slide, Avatar, Tooltip, Chip, Grid, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '80px',
        height: '100%'
    },
    media: {
        height: '100%',
        borderTop: '1px solid rgb(0 0 0 / 14%)'
    },
    img: {
        borderRadius: "50%",
        top: "-70px",
        left: "45%",
        width: 100,
        height: 100,
        marginLeft: "-30px",
        position: 'absolute'
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    professionChip: {
        margin: '2px'
    }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const deriveInitials = (displayName) => {
    return displayName
        .split(' ')
        .filter((x) => x.length)
        .map((x) =>
            /^(?:[A-Za-z]+|\d+)$/.test(x.substring(0, 1))
                ? x.substring(0, 1).toUpperCase()
                : null
        )
        .join('')
        .slice(0, 3)
}




export const Detail = ({ item, toggle }) => {
    const classes = useStyles();
    const renderInitialsAvatar = () => {
        return item.friends.map(name => <Tooltip key={name} title={name}><Avatar>{deriveInitials(name)}</Avatar></Tooltip>)
    }
    return (
        <div>
            <Dialog fullScreen open onClose={toggle} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={toggle} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {item.name}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media}>
                            <img
                                src={item.thumbnail}
                                alt={item.name}
                                className={classes.img}
                            />
                            <Box p={2} my={2} textAlign="center">
                                <Typography component="h5" variant="h5">
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {item.age} years old
                            </Typography>
                            </Box>
                            <Box my={2}>
                                <Grid container justify="center" spacing={2}>
                                    <Grid item>
                                        <Typography variant="body1">
                                            Hair
                                        </Typography>
                                        <Grid style={{ backgroundColor: item.hair_color, borderRadius: '50%', width: '30px', height: '30px' }}></Grid>

                                    </Grid>
                                    <Grid item >
                                        <Grid container direction="column">
                                            <Typography variant="body1">
                                                {Number((item.weight).toFixed(2))} Kg
                                        </Typography>
                                            <IconButton size="small">
                                                <FitnessCenterIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    <Grid item >
                                        <Grid container direction="column">
                                            <Typography variant="body1">
                                                {Number((item.height).toFixed(2))} Cm
                                        </Typography>
                                            <IconButton size="small">
                                                <AccessibilityIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardMedia>
                        <CardContent>
                            {item.friends.length > 0 && (
                                <Grid>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Friends
                                    </Typography>
                                    <AvatarGroup max={4}>

                                        {renderInitialsAvatar()}
                                    </AvatarGroup>
                                </Grid>
                            )}
                            {item.professions.length > 0 && (
                                <Grid>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Professions
                        </Typography>
                                    <Grid container justify="flex-start">
                                        {
                                            item.professions.map(p =>
                                                <Chip key={p} className={classes.professionChip} size="small" label={p.trim()} />)
                                        }
                                    </Grid>
                                </Grid>)}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Dialog>
        </div >
    );
}
