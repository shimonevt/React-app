import { UsersAPI } from "../../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const TOGGLE_PAGE = "TOGGLE-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING";
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING";
let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 40,
  currentPage: 1,
  isLoading: true,
  isFollowing: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case TOGGLE_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.isFollowing
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((userId) => userId !== action.userId),
      };
    default:
      return state;
  }
};
export const followActionCreator = (userId) => ({ type: FOLLOW, id: userId });
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  id: userId,
});
export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users: users,
});
export const togglePageActionCreator = (page) => ({
  type: TOGGLE_PAGE,
  currentPage: page,
});
export const setTotalUsersCountActionCreator = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount: totalCount,
});
export const toggleIsLoadingActionCreator = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading: isLoading,
});
export const toggleIsFollowingActionCreator = (isFollowing, userId) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFollowing: isFollowing,
  userId: userId,
});
export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsLoadingActionCreator(true));
    UsersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(toggleIsLoadingActionCreator(false));
      dispatch(setUsersActionCreator(response.items));
    });
  };
};
export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingActionCreator(true,userId));
              UsersAPI.unfollow(userId).then((response) => {
                if (response.resultCode === 0) {
                  dispatch(unfollowActionCreator(userId));
                }
                dispatch(toggleIsFollowingActionCreator(false,userId));
  });
  };
}
export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingActionCreator(true,userId));
    UsersAPI.follow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(followActionCreator(userId));
      }
      dispatch(toggleIsFollowingActionCreator(false,userId));
    });
  }
}
export default usersReducer;
