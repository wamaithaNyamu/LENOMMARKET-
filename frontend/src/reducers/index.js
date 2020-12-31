import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";


const appReducer = combineReducers({
    /* your app’s top-level reducers */
    alert,
    auth,

});

const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        state = undefined;
    }

    return appReducer(state, action);
};
export default rootReducer;
