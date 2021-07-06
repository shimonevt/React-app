let rerenderEntireTree = () => {

}
const state = {
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
    newPostText: 'Добавьте запись'
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
    newMessageText: 'Введите сообщение'
  },
  sideBar: {
    news: [
      {
        header: "New Honda Civic",
        mainText: 'Now with turbo-VTEC',
        img: 'https://s.auto.drom.ru/i24241/c/photos/fullsize/honda/civic/gen473_honda_civic_935581.jpg'
      },
      {
        header: 'New electrified concept of IZH',
        mainText: '....',
        img: 'https://images11.popmeh.ru/upload/img_cache/18c/18c862e5753d8e7840ff544d751e752d_cropped_620x444.jpg'
      }
    ],
  },
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    numberOfLikes: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
  state.profilePage.newPostText ='';
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}
export const addMessage = () => {
  let newMessage = {
     id: 1,
     text: state.messagesPage.newMessageText 
  };
  state.messagesPage.messages.push(newMessage);
  rerenderEntireTree(state);
  state.messagesPage.newMessageText = '';
}
export const updateNewMessageText = (newText) => {
  state.messagesPage.newMessageText = newText;
  rerenderEntireTree(state);
}
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
export default state;
