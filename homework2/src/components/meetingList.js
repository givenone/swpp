import React, { Component } from 'react';
import Meeting from './meeting';

class MeetingList extends Component {
  render() {

    // TODO : should make meetings in STORE of React App?
    const {meetings, onDelete, username, password} = this.props;
    const meetList = meetings.map(
        (ok) => (
            <Meeting 
                key={ok.id}
                id={ok.id}
                created={ok.created}
                sinceWhen={ok.sinceWhen}
                tilWhen={ok.tilWhen}
                user={ok.user}
                onDelete={onDelete}
                username = {username}
                password = {password}
            />
        )
    );

    return (
      <div>
          {meetList}
      </div>
    )
  }
}

export default MeetingList
