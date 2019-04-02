import MeetingList from '../components/meetingList';
import * as actions from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
//TODOs
    meetings : state.Meetings,
    username : state.username,
    password : state.password,
    flag : state.isLogin
})

const mapDispatchToProps = (dispatch) => ({
//TODO
    onDelete : (id, username, password) => dispatch(actions.deleteMeeting(id, username, password))
})

const meetingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MeetingList);

export default meetingContainer;