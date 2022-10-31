import React from 'react';
import "./header.css"

function header() {
    return (
        <>
           <div className="header">
            <button className='btn_create'>Create New Task</button>
            <div className='search_form'>
                <input className='inp_search' type='text' placeholder='Type something to search'></input>
                <button className='btn_search'>Search</button>
            </div>
       </div>
        </>
    );
}

export default header;