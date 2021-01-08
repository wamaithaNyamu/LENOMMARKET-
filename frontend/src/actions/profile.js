import axios from "axios";
import { setAlert } from "./alert";

import * as actions from "./types";

//get current users profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("/profile/me");
        dispatch({
            type: actions.GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: actions.PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};

//get all profiles for admin only
export const getAllProfiles = () => async (dispatch) => {
    try {
        const res = await axios.get("/profile/all");
        dispatch({
            type: actions.GET_PROFILES,
            payload: res.data,
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: actions.PROFILES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};

//get profiles by ID
//get all profiles for admin only
export const getProfileByID = (userID) => async (dispatch) => {
    try {
        const res = await axios.get(`/profile/${userID}`);

        dispatch({
            type: actions.GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: actions.PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};

//create or update a profile
export const createProfile = (formData, history, edit = false) => async (
    dispatch
) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const res = await axios.post("/profile", formData, config);
        dispatch({
            type: actions.GET_PROFILE,
            payload: res.data,
        });
        dispatch(
            setAlert(
                edit ? "Profile Updated" : "Profile created successfully",
                "success"
            )
        );
        if (!edit) {
            history.push("/dashboard");
        }
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
        }

        dispatch({
            type: actions.PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};
