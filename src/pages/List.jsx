import React from "react";

const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

const List = () => {
  const users = [
    {
      email: "john@abcd.com",
      name: "John",
    },
    {
      email: "jane@abcd.com",
      name: "Jane",
    },
    {
      email: "smith@abcd.com",
      name: "Smith",
    },
    {
      email: "chloe@abcd.com",
      name: "Chloe",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
