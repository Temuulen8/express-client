import React from "react";

const UserCard = ({ user }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              {user.profileImg}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{user.firstname}</div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-x">{user.postition}</span>
      </td>
      <td>{user.email}</td>
      <th className="flex gap-3">
        <button className="btn btn-info btn-xs">Info</button>
        <button className="btn btn-error btn-xs">Error</button>
      </th>
    </tr>
  );
};

export default UserCard;
