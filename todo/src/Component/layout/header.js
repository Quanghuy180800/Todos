import React from 'react';
import { Link } from 'react-router-dom';

import "./header.css"

function Header() {
    return (
        <>
           <div className="header">
           <Link to="/create"><button className='btn_create'>Create New Task</button></Link>
            <div className='search_form'>
                <input className='inp_search' type='text' placeholder='Type something to search'></input>
                <button className='btn_search' >Search</button>
            </div>
       </div>
        </>
    );

    }
export default Header;