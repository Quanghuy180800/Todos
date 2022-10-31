import React, { useState } from 'react';
import './carditem.css';


function CardItem() {

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
          <label>Task 1</label>
        </p>
        <p className="creator">
          <label>Creator: </label>
          <label>Nam</label>
        </p>
        <p className="status">
          <label>Status: </label>
          <label>{status}</label>
        </p>
        <hr className="lineBreak" />
        <p className="description">Description: This is a task</p>

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