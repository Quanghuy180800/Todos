import React, { useState } from "react";
import "./createtask.css";

function CreateTask() {

    var arrTask = [];
    arrTask = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

    const [title, setTitle] = useState("");
    const [creator, setCreator] = useState("");
    const [description, setDescription] = useState("");
 

  var objTask = function(title, creator, description) {
    this.title = title;
    this.creator = creator;
    this.description = description;
  }


  
  const createNewTask = (e) => {
    e.preventDefault();
    
    var Objtask = new objTask(title, creator, description);

    arrTask.push(Objtask);
   
    localStorage.setItem("task", JSON.stringify(arrTask));
    

    setTitle('');
    setCreator('');
    setDescription('');
    

  };

  return (
    <>
      <div className="contain">
        <form onSubmit={createNewTask}>
          <label >Title: </label>
          <input
            type="text"
            className="txtTitle"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>{" "}
          <br></br>
          <label >Creator: </label>
          <input
            type="text"
            className="txtCreator"
            required
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          ></input>{" "}
          <br></br>
          <label>Description: </label>
          <input
            type="text"
            className="txtDesc"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
