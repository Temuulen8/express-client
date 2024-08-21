import React, { useEffect, useState } from "react";
import UserHead from "./user-head";
import UserCard from "./user-row";

const UsersList = () => {
  const [users, setUsers] = useState();

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getEmployeesData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <h1 className="flex justify-center font-medium text-7xl mb-28">
        User List
      </h1>
      <table className="table">
        <UserHead />
        <tbody>
          {users?.map((user) => (
            <UserCard user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
