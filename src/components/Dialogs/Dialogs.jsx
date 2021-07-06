import React from "react";
import DialogsStyles from "./Dialogs.module.css";
import Dialog from "../Dialog/Dialog";
import Message from "../Message/Message";
const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogs.map((dialog) => (
    <Dialog dialogId={dialog.id} name={dialog.name} />
  ));

  let messagesElements = props.messagesPage.messages.map((message) => (
    <Message id={message.id} text={message.text} />
  ));
  
  let newMessageEl = React.createRef();
  let writeMessage = () => {
    let messageText = newMessageEl.current.value;
    props.updateNewMessageText(messageText);
  }
  let sendMessage = () => {
    props.addMessage();
  }
  return (
    <div className={DialogsStyles.dialogs}>
      <div className={DialogsStyles.dialogs__items}>{dialogsElements}</div>
      <div className={DialogsStyles.dialogs__messages}>{messagesElements}</div>
      <input onChange={writeMessage} ref={newMessageEl} value={props.messagesPage.newMessageText}/>
      <button onClick={sendMessage}>Add</button>
    </div>
  );
};

export default Dialogs;
