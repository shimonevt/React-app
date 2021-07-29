import React from 'react';
import DialogStyles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
class Dialog extends React.Component {
    render() {
        let link = `/dialogs/` + this.props.dialogId;
        return (<div className ={DialogStyles.dialog}>
            <NavLink to={link}>{this.props.name}</NavLink>
            </div>);
    }    
}
export default Dialog;