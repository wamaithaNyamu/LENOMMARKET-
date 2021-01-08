import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile"

const appReducer = combineReducers({
    /* your app’s top-level reducers */
    alert,
    auth,
    profile

});

const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        state = undefined;
    }

    return appReducer(state, action);
};
export default rootReducer;
