import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authThunkCreator } from '../../redux/reducer/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.checkAuth();
    }
    render() {
        return (<Header {...this.props} />);
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps,{checkAuth: authThunkCreator})(HeaderContainer);