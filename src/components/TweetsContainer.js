import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedId, setSelectedId] = useState(users[0].id)
  console.log("In TweetsContainer, state is", users);
  const handleChangeUser =(user)=>{
    setSelectedId(user.id)
  }
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={selectedUser} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
