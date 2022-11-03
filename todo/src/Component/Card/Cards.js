import React from 'react';
import CardItem from './carditem';
import './Cards.css';


function Cards() {
    let data = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
    
    return (
        <>
        <div className="todos">
        {data.map((item, index) => (
            <CardItem  todo={item} key={index}/>
        ))
        
        }
       
    </div>
        </>
    );
}

export default Cards;