import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [userToDisplay, setUserToDisplay] = useState(users[0]);
  console.log(users)
  function handleUserClick(id){

    const userToDisplay = users.filter(user =>{
      if(user.id === id){
        return true
      }
    })
    setUserToDisplay(userToDisplay[0])
    }

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleUserClick={handleUserClick}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={userToDisplay} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
