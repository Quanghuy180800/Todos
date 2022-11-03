import React, { useState } from "react";
import "./createtask.css";


function CreateTask() {

    var arrTask = [];
    arrTask = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  // }
const [formValue, setFormValue] = useState({
  title: '',
  creator:'',
  description: '',
});

const handleChangeInput = (e) => {
  setFormValue({
    ...formValue,
    [e.target.name] : e.target.value,
  });
  }


  const createNewTask = (e) => {
    e.preventDefault();
    

    arrTask.push(formValue);

   
    localStorage.setItem("task", JSON.stringify(arrTask));
    

   

  };

  return (
    <>
      <div className="contain">
        <form onSubmit={createNewTask}>
          <label >Title: </label>
          <input
            type="text"
            className="txtTitle"
            name="title"
            value={formValue.title}
            onChange={handleChangeInput}
          ></input>{" "}
          <br></br>
          <label >Creator: </label>
          <input
            type="text"
            className="txtCreator"
            name = "creator"
            value={formValue.creator}
            onChange={handleChangeInput}
          ></input>{" "}
          <br></br>
          <label>Description: </label>
          <input
            type="text"
            className="txtDesc"
            name = "description"
            value={formValue.description}
            onChange={handleChangeInput}
          ></input>{" "}
          <br></br>
          <button className="btn_Save" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateTask;
