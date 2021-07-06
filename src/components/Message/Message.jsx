import React from 'react';
import MessageStyles from './Message.module.css';
const Message = (props) => {
    return (<div className={MessageStyles.message}>{props.text}</div>);
};
export default Message;