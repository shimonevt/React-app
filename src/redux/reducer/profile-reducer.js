import { ProfileAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_PROFILE = "SET-PROFILE";
let initialState = {
  posts: [
    {
      image: "https://farm9.staticflickr.com/8160/7526653268_759400d7f3_b.jpg",
      message: "It`s my Honda Civic",
      numberOfLikes: "4",
    },
    {
      image:
        "http://assets.superstreetonline.com/uploads/sites/5/2020/03/2005-Honda-S2000-Mugen-SS-Front-Bumper-02.jpg?width=&height=",
      message: "It`s my Honda S2000",
      numberOfLikes: "9",
    },
  ],
  newPostText: "Добавьте запись",
  profile: {
    photos: {
      large: "",
    },
    fullName: "",
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          { id: 5, message: state.newPostText, numberOfLikes: 0 },
        ],
      };
    case UPDATE_POST:
      return { ...state, newPostText: action.postText };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostActionCreator = (newPostText) => ({
  type: UPDATE_POST,
  postText: newPostText,
});
export const setProfileActionCreator = (profile) => ({
  type: SET_PROFILE,
  profile: profile,
});

export const setProfileThunkCreator = (userId) => {
  return (dispatch) => {
    let newUserId = userId ? userId : 12;
    ProfileAPI.setProfile(newUserId).then((response) => {
      dispatch(setProfileActionCreator(response));
    });
    
  };
};
export default profileReducer;
