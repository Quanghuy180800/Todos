import React from 'react';
import CardItem from './carditem';
import './Cards.css';

Cards.propTypes = {
    
};

function Cards(props) {
    return (
        <>
        <div className="todos">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
        </>
    );
}

export default Cards;