export const SEND_MESSAGE = "SEND-MESSAGE";
export const UPDATE_MESSAGE = "UPDATE-MESSAGE";
let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 1, text: state.newMessageText }],
      };
    case UPDATE_MESSAGE:
      return { ...state, newMessageText: action.message };
    default:
      return state;
  }
};

export const updateMessageActionCreator = (messageText) => ({
  type: UPDATE_MESSAGE,
  message: messageText,
});
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
