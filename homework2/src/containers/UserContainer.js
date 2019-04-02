import User from '../components/User';
import * as actions from '../actions';
import {connect} from 'react-redux';


//username, password, onLogin, onChange, onKeyPress
const mapStateToProps = (state) => ({
    username : state.username,
    password : state.password,
    flag : state.isLogin
});

const mapDispatchToProps = (dispatch) => ({
    onLogin : (username, password) => dispatch(actions.login(username, password)),
    onChangeUSER : (value) => 
    dispatch(actions.onChange(value, 0)),
    onChangePW : (value) => 
    dispatch(actions.onChange(value, 1)),
});

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserContainer;