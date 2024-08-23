import React, { useEffect, useState } from "react";
import UserHead from "./user-head";
import UserCard from "./user-row";
import Modal from "./modal";

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

  const editEmployee = async (userId) => {
    console.log("userId", userId);
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "EDIT",
      headers: {
        "Content-type": "application/json",
      },
    });
    const { users } = await res.json();
  };

  const deleteEmployee = async (userId) => {
    console.log("userId", userId);
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const { employees } = await res.json();
    console.log("employees", employees);
    setUsers(users.filter((employee) => employee.eid !== userId));
  };

  useEffect(() => {
    getEmployeesData();
  }, []);
  return (
    <div className="overflow-x-auto container m-auto">
      <h1 className="flex justify-center font-medium text-7xl mb-28">
        User List
      </h1>
      <div>
        <button className="btn btn-info btn-outline" onClick={createEmployee}>
          Ажилтан нэмэх
        </button>
      </div>
      <table className="table">
        <UserHead />
        <tbody>
          {users?.map((user) => (
            <UserCard
              user={user}
              deleteEmployee={deleteEmployee}
              editEmployee={editEmployee}
            />
          ))}
        </tbody>
      </table>
      <Modal />
    </div>
  );
};

export default UsersList;
