import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import Image from 'material-ui-image'



const useStyles = makeStyles((theme) => ({
    gen: {

        margin: theme.spacing(3, 2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
    card:{
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(3, 2),
    }
}));

export default function MiddleDividers() {
    const classes = useStyles();

    return (
        <div className={classes.gen}>
            <div className={classes.card}>
                <div className={classes.section1}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4">
                                Toothbrush
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6" color="secondary">
                                $4.50
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Image
                        src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
                    />
                    <Divider/>
                    <Typography color="textSecondary" variant="body2">
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                        hall.
                    </Typography>
                </div>
                <Divider variant="middle" />
                <div className={classes.section2}>
                    <Typography gutterBottom variant="body1">
                        Select Size
                    </Typography>
                    <div>
                        <Chip className={classes.chip} label="Extra Soft" />
                        <Chip className={classes.chip} color="primary" label="Soft" />
                        <Chip className={classes.chip} label="Medium" />
                        <Chip className={classes.chip} label="Hard" />
                    </div>
                </div>
                <div className={classes.section3}>
                    <Button color="secondary"      startIcon={<ShoppingCartSharpIcon />}  variant="contained">Add to cart</Button>
                </div>
            </div>
        <div className={classes.card}>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            Toothbrush
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6" color="secondary">
                            $4.50
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                    hall.
                </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
                <Typography gutterBottom variant="body1">
                    Select Size
                </Typography>
                <div>
                    <Chip className={classes.chip} label="Extra Soft" />
                    <Chip className={classes.chip} color="primary" label="Soft" />
                    <Chip className={classes.chip} label="Medium" />
                    <Chip className={classes.chip} label="Hard" />
                </div>
            </div>
            <div className={classes.section3}>
                <Button color="secondary"      startIcon={<ShoppingCartSharpIcon />}  variant="contained">Add to cart</Button>
            </div>
        </div>
            <div className={classes.card}>
                <div className={classes.section1}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4">
                                Toothbrush
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6" color="secondary">
                                $4.50
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography color="textSecondary" variant="body2">
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                        hall.
                    </Typography>
                </div>
                <Divider variant="middle" />
                <div className={classes.section2}>
                    <Typography gutterBottom variant="body1">
                        Select Size
                    </Typography>
                    <div>
                        <Chip className={classes.chip} label="Extra Soft" />
                        <Chip className={classes.chip} color="primary" label="Soft" />
                        <Chip className={classes.chip} label="Medium" />
                        <Chip className={classes.chip} label="Hard" />
                    </div>
                </div>
                <div className={classes.section3}>
                    <Button color="secondary"      startIcon={<ShoppingCartSharpIcon />}  variant="contained">Add to cart</Button>
                </div>
            </div>
        </div>
    );
}
