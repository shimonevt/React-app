import { ADD_POST, UPDATE_POST } from "../state";

let initialState = {
  posts: [
    {
      image:
        "https://farm9.staticflickr.com/8160/7526653268_759400d7f3_b.jpg",
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
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        numberOfLikes: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_POST:
      state.newPostText = action.postText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostActionCreator = (newPostText) => ({ type: UPDATE_POST, postText: newPostText });

export default profileReducer;
