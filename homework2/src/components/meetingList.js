import React, { Component } from 'react';
import Meeting from './meeting';

class MeetingList extends Component {
  render() {

    // TODO : should make meetings in STORE of React App?
    const {meetings, onDelete, username, password,flag} = this.props;
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

    if(flag)
    {
      console.log("i am here")
    return (
      <div>
          {meetList}       
      </div>
    )
    }

    else{
      console.log("i am not here")
      return null
    }
  }
}

export default MeetingList
