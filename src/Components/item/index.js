import React from 'react'
import { ListItem, ListItemAvatar, ListItemText, Typography, makeStyles, ListItemIcon, IconButton } from '@material-ui/core'
import { SuspenseImg } from '../SuspenseImage';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useModal } from '../Hooks/useModal';
import { Detail } from './detail';



export const Item = ({ item }) => {
    const classes = useStyles();
    const { isOpen: isItemOpened, toggle } = useModal()

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <SuspenseImg alt={item.name} src={item.thumbnail}></SuspenseImg>
                </ListItemAvatar>
                <ListItemText
                    primary={item.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Age {' '}
                            </Typography>
                            {item.age}
                        </React.Fragment>
                    }
                />
                <ListItemIcon>
                    <IconButton onClick={toggle}>
                        <ArrowForwardIosIcon />
                    </IconButton>

                </ListItemIcon>
            </ListItem>
            {
                isItemOpened && <Detail item={item} toggle={toggle} />
            }
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));