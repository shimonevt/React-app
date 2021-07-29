import React from "react";
import DialogsStyles from "./Dialogs.module.css";
import Dialog from "../Dialog/Dialog";
import Message from "../Message/Message";
class Dialogs extends React.Component {
  constructor (props) {
    super(props);
    this.newMessageEl = React.createRef();
  }
  writeMessage = () => {
    let messageText = this.newMessageEl.current.value;
    this.props.updateMessage(messageText);
  };
  sendMessage = () => {
    this.props.sendMessage();
  };
  render() {
    let dialogsElements = this.props.dialogsPage.dialogs.map((dialog) => (
      <Dialog dialogId={dialog.id} name={dialog.name} />
    ));  
    let messagesElements = this.props.dialogsPage.messages.map((message) => (
      <Message id={message.id} text={message.text} />
    ));
    return (<div className={DialogsStyles.dialogs}>
      <div className={DialogsStyles.dialogs__items}>{dialogsElements}</div>
      <div className={DialogsStyles.dialogs__messages}>{messagesElements}</div>
      <input onChange={this.writeMessage} ref={this.newMessageEl} value={this.props.dialogsPage.newMessageText} placeholder='Enter your message here...'/>
      <button onClick={this.sendMessage}>Send</button>
    </div>);
  }
}

export default Dialogs;
