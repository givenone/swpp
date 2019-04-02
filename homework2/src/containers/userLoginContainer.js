import UserLogin from '../components/UserLogin';
import * as actions from '../actions';
import {connect} from 'react-redux';

//{username, onLogout}
const mapStateToProps = (state) => ({
    // TODO
    // is it ok? 
    username : state.username,
    flag : state.isLogin
});

const mapDispatchToProps = (dispatch) => ({
    onLogout : () => dispatch(actions.logout())
});

const UserLoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserLogin);

export default UserLoginContainer;