import React from "react";

const UserCard = ({ user, deleteEmployee }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={user.profileImg} alt="" />
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
        <span className="badge badge-ghost badge-x">{user.position}</span>
      </td>
      <td>{user.email}</td>
      <th className="flex gap-3">
        <button className="btn btn-info btn-xs">Info</button>
        <button
          className="btn btn-error btn-xs"
          onClick={() => deleteEmployee(user.eid)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default UserCard;
