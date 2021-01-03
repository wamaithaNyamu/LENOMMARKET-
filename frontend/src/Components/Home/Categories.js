import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/CategoryRounded';
const useStyles = makeStyles((theme) => ({
    gen:{
        padding:theme.spacing(2),
    },
    cat: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div >

            <Typography variant="h6" align="center" className={classes.gen}>
                Categories
            </Typography>
            <div className={classes.cat}>
                <Chip
                    icon={<FaceIcon />}
                    label="ALL PRODUCTS"
                    clickable
                    color="primary"

                />
                <Chip
                    icon={<FaceIcon />}
                    label="BLADES"
                    clickable
                    color="primary"

                />
                <Chip
                    icon={<FaceIcon />}
                    label="GLUES"
                    clickable
                    color="primary"

                />
                <Chip
                    icon={<FaceIcon />}
                    label="GRATTINGS"
                    clickable
                    color="primary"

                />
                <Chip
                    icon={<FaceIcon />}
                    label="PIPES"
                    clickable
                    color="primary"

                />
                <Chip
                    icon={<FaceIcon />}
                    label="FITTINGS"
                    clickable
                    color="primary"

                />
                <Chip
                    icon={<FaceIcon />}
                    label="SINKS"
                    clickable
                    color="primary"

                />
                <Chip
                    icon={<FaceIcon />}
                    label="TOILETS"
                    clickable
                    color="primary"


                />
                <Chip
                    icon={<FaceIcon />}
                    label="TANKS"
                    clickable
                    color="primary"

                />
                <Chip
                    icon={<FaceIcon />}
                    label="CONDUITS"
                    clickable
                    color="primary"

                />

            </div>
        </div>
    );
}
