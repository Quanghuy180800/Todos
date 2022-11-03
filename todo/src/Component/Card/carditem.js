import React, { useState } from 'react';
import './carditem.css';


function CardItem({todo}) {


    const [status, setStatus] = useState('New');

    const handleChange = (e) => {
      setStatus(e.target.value);
    }



    return (
        <>
        <div className="card">
      <div className="container">
        <p className="title">
          <label>Title: </label>
          <label>{todo.title}</label>
        </p>
        <p className="creator">
          <label>Creator: </label>
          <label>{todo.creator}</label>
        </p>
        <p className="status">
          <label>Status: </label>
          <label>{status}</label>
        </p>
        <hr className="lineBreak" />
        <p className="description">{todo.description}</p>

        <select value={status} onChange = {handleChange}>
          <option>New</option>
          <option>Doing</option>
          <option>Done</option>
        </select>
      </div>
    </div>

        </>
    );
}

export default CardItem;