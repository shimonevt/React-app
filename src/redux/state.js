import dialogsReducer from "./reducer/dialogs-reducer";
import profileReducer from "./reducer/profile-reducer";
import sideBarReducer from "./reducer/sidebar-reducer";

export const ADD_POST = "ADD-POST";
export const UPDATE_POST = "UPDATE-POST";
export const SEND_MESSAGE = "SEND-MESSAGE";
export const UPDATE_MESSAGE = "UPDATE-MESSAGE";
let store = {
  _state: {
    profilePage: {
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
    },
    messagesPage: {
      messages: [
        { id: 1, text: "Hello" },
        { id: 2, text: "What`s your car?" },
        { id: 3, text: "Let me know if you want to buy" },
      ],
      dialogs: [
        { id: 1, name: "Spoon" },
        { id: 2, name: "AVOL" },
        { id: 3, name: "Toyo" },
        { id: 4, name: "WRC" },
      ],
      newMessageText: "",
    },
    sideBar: {
      news: [
        {
          header: "New Honda Civic",
          mainText: "Now with turbo-VTEC",
          img: "https://s.auto.drom.ru/i24241/c/photos/fullsize/honda/civic/gen473_honda_civic_935581.jpg",
        },
        {
          header: "New electrified concept of IZH",
          mainText: "....",
          img: "https://images11.popmeh.ru/upload/img_cache/18c/18c862e5753d8e7840ff544d751e752d_cropped_620x444.jpg",
        },
      ],
    },
  },
  callSubcriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.callSubcriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this.callSubcriber(this._state);
  },
};
export default store;
window.store = store;
