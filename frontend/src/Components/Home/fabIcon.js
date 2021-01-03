import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
const useStyles = makeStyles((theme) => ({


    fab: {
        position: 'fixed',
        top:'50%',
        left:'80%',

        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Fab color="primary" aria-label="Cart" className={classes.fab}>
            <Badge badgeContent={4} color="error">
                <ShoppingCartSharpIcon />
            </Badge>
            </Fab>
        </div>
    );
}
