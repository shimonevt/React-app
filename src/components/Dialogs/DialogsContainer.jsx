import React from "react";
import Dialogs from "../Dialogs/Dialogs";
import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/reducer/dialogs-reducer";
import { connect } from "react-redux";
class DialogsContainer extends React.Component {
  render () {
    return (<Dialogs {...this.props} dialogs={this.props.dialogs}/>);
  }
}
const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => { dispatch(sendMessageActionCreator()); },
    updateMessage: (message) => {
      dispatch(updateMessageActionCreator(message));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
