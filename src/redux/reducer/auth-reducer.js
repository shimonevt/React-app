import { LoginAPI } from "../../api/api";

const SET_USER_DATA = "SET-USER-DATA";
let initialState = {
  id: null,
  email: null,
  login: null,
  isLoading: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};
export const setUserDataActionCreator = (data) => ({
  type: SET_USER_DATA,
  data: data,
});
export const authThunkCreator = () => {
  return (dispatch) => {
    LoginAPI.login().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setUserDataActionCreator(response.data));
      }
    });
  };
};
export default authReducer;
