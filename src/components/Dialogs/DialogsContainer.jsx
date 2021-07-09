import React from "react";
import Dialogs from "../Dialogs/Dialogs";
import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/reducer/dialogs-reducer";
const DialogsContainer = (props) => {
  let updateMessage = (messageText) => {
    let action = updateMessageActionCreator(messageText);
    props.dispatch(action);
  };
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };
  return (
    <Dialogs
      sendMessage={sendMessage}
      updateMessage={updateMessage}
      dialogsPage={props.dialogsPage}
    />
  );
};

export default DialogsContainer;
