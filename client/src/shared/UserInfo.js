import React from "react";
import Avatar from "./Avatar";

const UserInfo = ({ user }) => {
  return (
    <div className="profile-background flex md:flex-col flex-row items-center py-10 px-10 border-2 shadow my-2 border-green-300">
      <Avatar src={user.avatar} alt={user.name} size={24} />
      <div className="ml-10 md:ml-0">
        <h1 className="my-1 text-2xl uppercase font-bold">{user.name}</h1>
      </div>
    </div>
  );
};

export default UserInfo;