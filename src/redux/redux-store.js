import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducer/auth-reducer";
import dialogsReducer from "./reducer/dialogs-reducer";
import profileReducer from "./reducer/profile-reducer";
import sideBarReducer from "./reducer/sidebar-reducer";
import usersReducer from "./reducer/users-reducer";
import  thunk from 'redux-thunk';
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunk));
export default store;