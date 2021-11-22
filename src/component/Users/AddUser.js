import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [Error, setError] = useState();
  const onChangeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const onChangeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUserHandler({ name: enteredName, age: enteredAge });
    setEnteredName("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {Error && (
        <ErrorModal
          title={Error.title}
          message={Error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label>Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={onChangeNameHandler}
          ></input>
          <label>Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={onChangeAgeHandler}
          ></input>
          <Button>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
