import React from 'react';
import DialogStyles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
const Dialog = (props) => {
    let link = `/dialogs/` + props.dialogId;
    return (<div className ={DialogStyles.dialog}>
        <NavLink to={link}>{props.name}</NavLink>
        </div>);
}
export default Dialog;