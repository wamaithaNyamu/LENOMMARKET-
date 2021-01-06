import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="on"
                    aria-label="Categories"
                >
                    <Tab label="Brass Fittings" {...a11yProps(0)} />
                    <Tab label="GI Fittings" {...a11yProps(1)} />
                    <Tab label="Gutter Fittings" {...a11yProps(2)} />
                    <Tab label="PPR Fittings" {...a11yProps(3)} />
                    <Tab label="Waste Fittings" {...a11yProps(4)} />
                     <Tab label="Pumps and Fittings" {...a11yProps(5)} />
                    <Tab label="Pressure Fittings" {...a11yProps(6)} />

                    <Tab label="Techno Tanks" {...a11yProps(7)} />
                    <Tab label="Mamba Tanks" {...a11yProps(8)} />
                    <Tab label="Ken Tanks" {...a11yProps(9)} />
                    <Tab label="Poly Tanks" {...a11yProps(10)} />
                    <Tab label="Roto Tanks" {...a11yProps(11)} />

                    <Tab label="Sinks and Toilets" {...a11yProps(12)} />
                    <Tab label="Conduits" {...a11yProps(13)} />
                    <Tab label="Blades" {...a11yProps(14)} />
                    <Tab label="Glues" {...a11yProps(15)} />
                    <Tab label="Main Hole Covers" {...a11yProps(16)} />
                    <Tab label="Grattings, Clamps, Clips" {...a11yProps(17)} />

                    <Tab label="PPR Pipes" {...a11yProps(18)} />
                    <Tab label="Pressure Pipes" {...a11yProps(19)} />
                    <Tab label="Waste Pipes" {...a11yProps(20)} />
                    <Tab label="Pressure Pipes" {...a11yProps(21)} />
                    <Tab label="GI Pipe" {...a11yProps(22)} />
                    <Tab label="Gutter Pipes" {...a11yProps(23)} />
                    <Tab label="Hose Pipes" {...a11yProps(24)} />
                    <Tab label="PPR Pipes" {...a11yProps(25)} />






                </Tabs>
            </AppBar>
            <Container >


            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
                <TabPanel value={value} index={7}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={8}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={9}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={10}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={11}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={12}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={13}>
                    Item Seven
                </TabPanel>
                <TabPanel value={value} index={14}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={15}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={16}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={17}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={18}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={19}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={20}>
                    Item Seven
                </TabPanel>

                <TabPanel value={value} index={21}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={22}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={23}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={24}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={25}>
                    Item Six
                </TabPanel>

            </Container>
        </div>
    );
}
