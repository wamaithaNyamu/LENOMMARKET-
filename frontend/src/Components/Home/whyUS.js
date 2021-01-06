import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Carousel from "./carousel"
import Navbar from "./navbar"


export default function InteractiveList() {
    return (
        <div>

            <Grid container spacing={2}>
                {/*<Hidden mdDown>*/}
                {/*<Grid item xs={12} md={2}>*/}
                {/*    <Typography variant="h6">*/}
                {/*        Categories*/}
                {/*    </Typography>*/}
                {/*    <div >*/}
                {/*        <List>*/}
                {/*            <List component="nav" aria-label="secondary mailbox folders">*/}
                {/*                <ListItem button>*/}
                {/*                    <ListItemText primary="Blades" />*/}
                {/*                </ListItem>*/}
                {/*                <ListItem >*/}
                {/*                    <ListItemText primary="Conduits" />*/}
                {/*                </ListItem>*/}

                {/*                <ListItem button>*/}
                {/*                    <ListItemText primary="Fittings" />*/}
                {/*                </ListItem>*/}
                {/*                <ListItem >*/}
                {/*                    <ListItemText primary="Glues" />*/}
                {/*                </ListItem>*/}

                {/*                <ListItem button>*/}
                {/*                    <ListItemText primary="Grattings" />*/}
                {/*                </ListItem>*/}
                {/*                <ListItem >*/}
                {/*                    <ListItemText primary="Pipes" />*/}
                {/*                </ListItem>*/}
                {/*                <ListItem button>*/}
                {/*                    <ListItemText primary="Sinks" />*/}
                {/*                </ListItem>*/}
                {/*                <ListItem button>*/}
                {/*                    <ListItemText primary="Tanks" />*/}
                {/*                </ListItem>*/}
                {/*                <ListItem >*/}
                {/*                    <ListItemText primary="Toilets" />*/}
                {/*                </ListItem>*/}
                {/*            </List>*/}
                {/*        </List>*/}
                {/*    </div>*/}
                {/*</Grid>*/}
                {/*</Hidden>*/}
                <Grid item xs={12} md={12}>
                    <div >
                    <Carousel/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
