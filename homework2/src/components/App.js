import React, { Component } from 'react';
import UserContainer from '../containers/UserContainer';
import MeetingContainer from '../containers/meetingContainer';
import AddMeetingContainer from '../containers/addMeetingContainer'
import UserLoginContainer from '../containers/userLoginContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserContainer /> 
        <UserLoginContainer />
        <MeetingContainer />
        <AddMeetingContainer />
      </div>
    );
  }
}
