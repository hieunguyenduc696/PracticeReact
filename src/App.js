import React from "react";
import { useState } from "react/cjs/react.development";
import "./App.css";
import UsersList from "./component/Users/UsersList";
import AddUser from "./component/Users/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { name: user.name, age: user.age, id: Math.random().toString() },
    ]);
  };
  return (
    <div className="App">
      <AddUser onAddUserHandler={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
