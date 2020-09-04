import React from "react";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },

}));



export default function FormTitle() {

    const classes = useStyles();

    return (
        <>
            <Avatar className={classes.avatar}>
                <EmojiPeopleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Create User
            </Typography>
        </>
    );
}