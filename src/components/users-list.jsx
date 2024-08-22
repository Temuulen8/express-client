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

  const createEmployee = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Naranzon",
        lastname: "Gavaa",
        email: "Naranzon@gmail.com",
        position: "student",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { name } = await res.json();
    // console.log("AE", user);
    setUsers([...users, name]);
  };

  const deleteEmployee = async (userId) => {
    console.log("userId", userId);
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const { deleteEmployee } = await res.json();
    setUsers([...users, deleteEmployee]);
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
            <UserCard user={user} deleteEmployee={deleteEmployee} />
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-info btn-outline" onClick={createEmployee}>
          Ажилтан нэмэх
        </button>
      </div>
    </div>
  );
};

export default UsersList;
