import { combineReducers } from "redux";
//import UserReducer from './user'
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";
import VendorReducer from "./VendorReducer";
import AllVendorReducer from "./AllVendorReducer";
import ChecklistReducer from "./ChecklistReducer";

const rootReducer = combineReducers({
    //UserReducer
    AuthReducer,
    ProfileReducer,
    VendorReducer,
    AllVendorReducer,
    ChecklistReducer,
});

export default rootReducer