import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducer/dialogs-reducer";
import profileReducer from "./reducer/profile-reducer";
import sideBarReducer from "./reducer/sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
})
let store = createStore(reducers);
export default store;