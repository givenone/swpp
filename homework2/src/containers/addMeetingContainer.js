import AddMeeting from '../components/addMeeting';
import * as actions from '../actions';
import {connect} from 'react-redux';
//{sinceWhen, tilWhen, onPost, onChange }

const mapStateToProps = (state) => ({
//TODO
    sinceWhen : state.sinceWhen,
    tilWhen : state.tilWhen,
    username : state.username,
    password : state.password,
    flag : state.isLogin

})

const mapDispatchToProps = (dispatch) => ({
//TODO
    onPost : (sinceWhen, tilWhen, username, password) => dispatch(actions.newMeeting(sinceWhen, tilWhen,username, password)),
    onChangeSI : (value) => dispatch(actions.onChange(value, 2)),
    onChangeTI : (value) => dispatch(actions.onChange(value, 3)),
});

const AddMeetingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddMeeting);

export default AddMeetingContainer;