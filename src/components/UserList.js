import React from "react";
import UserCard from "./UserCard";

function UserList(props) {
const handleUserClicks= props.handleUserClick
  return (
    <div className="ui cards">
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClicks={handleUserClicks}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
