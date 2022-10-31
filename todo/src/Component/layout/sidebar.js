import React from 'react';
import './sidebar.css'

function sidebar() {
    return (
        <>
        <div className="sidebar">
      <div className="item">
        <p>All Task</p>
      </div>
      <div className="item">
        <p>New Task</p>
      </div>
      <div className="item">
        <p>Doing Task</p>
      </div>
      <div className="item">
        <p>Done Task</p>
      </div>
    </div>
    </>
    );
}

export default sidebar;