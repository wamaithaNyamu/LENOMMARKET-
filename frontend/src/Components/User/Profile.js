import React, {Fragment, useEffect, useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, TextField, MenuItem } from "@material-ui/core";
import Select from '@material-ui/core/Select';

import { createProfile } from "../../actions/profile";




const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    bread:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    formControl: {

        width: '100%',
    },
}));


const CreateProfile = ({ createProfile, history }) => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        phoneNumber: "",
        county: "",
        areaDescription: "",
        businessName: "",
        howYouHeardUs: "",
        promotions:"",

    });

    const {

        firstName,
        secondName,
        phoneNumber,
        county,
        areaDescription,
        businessName,
        howYouHeardUs,
        promotions,

    } = formData;

    const onChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Fragment>

            <Container component="main" maxWidth="sm">

                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        <FaceRoundedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create your profile
                    </Typography>
                    <form className={classes.form} noValidate     onSubmit={(e) => onSubmit(e)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    autoComplete="firstName"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"

                                    value={firstName}
                                    onChange={(e) => onChange(e)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField

                                    autoComplete="secondName"
                                    name="secondName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="secondName"
                                    label="Second Name"

                                    value={secondName}
                                    onChange={(e) => onChange(e)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    autoComplete="phoneNumber"
                                    name="phoneNumber"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"

                                    value={phoneNumber}
                                    onChange={(e) => onChange(e)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="countyid">County your business is located *</InputLabel>
                                    <Select
                                        labelId="countyid"
                                        id="countyid"
                                        value={county}
                                        onChange={(e) => onChange(e)}
                                        label="county"
                                        inputProps={{
                                            name: 'county',
                                            id: 'countyid',
                                        }}
                                    >

                                        <MenuItem value={'Mombasa'}>001 - Mombasa</MenuItem>
                                        <MenuItem value={'Kwale'}>002 - Kwale</MenuItem>
                                        <MenuItem value={'Kilifi'}>003 - Kilifi</MenuItem>
                                        <MenuItem value={'Tana River'}>004 - Tana River</MenuItem>
                                        <MenuItem value={'Lamu'}>005 - Lamu</MenuItem>
                                        <MenuItem value={'Taita Taveta'}>006 - Taita Taveta</MenuItem>
                                        <MenuItem value={'Garissa'}>007 - Garissa</MenuItem>
                                        <MenuItem value={'Wajir'}>008 - Wajir</MenuItem>
                                        <MenuItem value={'Mandera'}>009 - Mandera</MenuItem>
                                        <MenuItem value={'Marsabit'}>010 - Marsabit</MenuItem>
                                        <MenuItem value={'Isiolo'}>011 - Isiolo</MenuItem>
                                        <MenuItem value={'Meru'}>012 - Meru</MenuItem>
                                        <MenuItem value={'Tharaka-Nithi'}>013 - Tharaka-Nithi</MenuItem>
                                        <MenuItem value={'Embu'}>014 - Embu</MenuItem>
                                        <MenuItem value={'Kitui'}>015 - Kitui</MenuItem>
                                        <MenuItem value={'Machakos'}>016 - Machakos</MenuItem>
                                        <MenuItem value={'Makueni'}>017 - Makueni</MenuItem>
                                        <MenuItem value={'Nyandarua'}>018 - Nyandarua</MenuItem>
                                        <MenuItem value={'Nyeri'}>019 - Nyeri</MenuItem>
                                        <MenuItem value={'Kirinyaga'}>020 - Kirinyaga</MenuItem>
                                        <MenuItem value={'Murang\'a'}>021 - Murang'a</MenuItem>
                                        <MenuItem value={'Kiambu'}>022 - Kiambu</MenuItem>
                                        <MenuItem value={'Turkana'}>023 - Turkana</MenuItem>
                                        <MenuItem value={'West Pokot'}>024 - West Pokot</MenuItem>
                                        <MenuItem value={'Samburu'}>025 - Samburu</MenuItem>
                                        <MenuItem value={'Trans-Nzoia'}>026 - Trans-Nzoia</MenuItem>
                                        <MenuItem value={'Uasin Gishu'}>027 - Uasin Gishu</MenuItem>
                                        <MenuItem value={'Elgeyo-Marakwet'}>028 - Elgeyo-Marakwet</MenuItem>
                                        <MenuItem value={'Nandi'}>029 - Nandi</MenuItem>
                                        <MenuItem value={'Baringo'}>030 - Baringo</MenuItem>
                                        <MenuItem value={'Laikipia'}>031 - Laikipia</MenuItem>
                                        <MenuItem value={'Nakuru'}>032 - Nakuru</MenuItem>
                                        <MenuItem value={'Narok'}>033 - Narok</MenuItem>
                                        <MenuItem value={'Kajiado'}>034 - Kajiado</MenuItem>
                                        <MenuItem value={'Kericho'}>035 - Kericho</MenuItem>
                                        <MenuItem value={'Bomet'}>036 - Bomet</MenuItem>
                                        <MenuItem value={'Kakamega'}>037 - kakamega</MenuItem>
                                        <MenuItem value={'Vihiga'}>038 - Vihiga</MenuItem>
                                        <MenuItem value={'Bungoma'}>039 - Bungoma</MenuItem>
                                        <MenuItem value={'Busia'}>040 - Busia</MenuItem>
                                        <MenuItem value={'Siaya'}>041 - Siaya</MenuItem>
                                        <MenuItem value={'Kisumu'}>042 - Kisumu</MenuItem>
                                        <MenuItem value={'Homa Bay'}>043 - Homa Bay</MenuItem>
                                        <MenuItem value={'Migori'}>044 - Migori</MenuItem>
                                        <MenuItem value={'Kisii'}>045 - Kisii</MenuItem>
                                        <MenuItem value={'Nyamira'}>046 - Nyamira</MenuItem>
                                        <MenuItem value={'Nairobi'}>047 - Nairobi</MenuItem>






                                    </Select>
                                </FormControl>


                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="areaDescription"
                                    label="Describe the area within the county"
                                    name="areaDescription"
                                    autoComplete="email"

                                    value={areaDescription}
                                    onChange={(e) => onChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="businessName"
                                    label="What is your business name ?"
                                    type="text"
                                    id="businessName"
                                    autoComplete="businessName"

                                    value={businessName}
                                    onChange={(e) => onChange(e)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">How did you hear about us ? *</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={howYouHeardUs}
                                        onChange={(e) => onChange(e)}
                                        label="How did you hear about us ?"
                                        inputProps={{
                                            name: 'howYouHeardUs',
                                            id: 'demo-simple-select-outlined-label',
                                        }}
                                    >

                                        <MenuItem value={'Google ADS'}>Google ADS</MenuItem>
                                        <MenuItem value={'Facebook ADS'}>Facebook ADS</MenuItem>
                                        <MenuItem value={'From a friend'}>From a friend </MenuItem>
                                        <MenuItem value={'Google search'}>Google search</MenuItem>
                                        <MenuItem value={'Other'}>Other</MenuItem>
                                    </Select>
                                </FormControl>


                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="promo">Receive promotional material via email? *</InputLabel>
                                    <Select
                                        labelId="promo-label"
                                        id="promo"
                                        value={promotions}
                                        onChange={(e) => onChange(e)}
                                        label="Receive promotional material via email?"
                                        inputProps={{
                                            name: 'promotions',
                                            id: 'promo',
                                        }}
                                    >

                                        <MenuItem value={'yes'}>Yes</MenuItem>
                                        <MenuItem value={'no'}>No</MenuItem>

                                    </Select>
                                </FormControl>


                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Save Profile
                        </Button>

                    </form>
                </div>

            </Container>



        </Fragment>
    );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
