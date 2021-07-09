import React from "react";
import DialogsStyles from "./Dialogs.module.css";
import Dialog from "../Dialog/Dialog";
import Message from "../Message/Message";
const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <Dialog dialogId={dialog.id} name={dialog.name} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message id={message.id} text={message.text} />
  ));
  
  let newMessageEl = React.createRef();

  let writeMessage = () => {
    let messageText = newMessageEl.current.value;
    props.updateMessage(messageText);
  };
  let sendMessage = () => {
    props.sendMessage();
  };
  return (
    <div className={DialogsStyles.dialogs}>
      <div className={DialogsStyles.dialogs__items}>{dialogsElements}</div>
      <div className={DialogsStyles.dialogs__messages}>{messagesElements}</div>
      <input onChange={writeMessage} ref={newMessageEl} value={props.dialogsPage.newMessageText} placeholder='Enter your message here...'/>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Dialogs;
