import React from 'react';
import './card.css';

//this is a functional and presentational component
const Card = (props) => (
  <div className='card-container1'>
    <div className='card1'>
      <div className='front1' style={{backgroundColor: "grey"}}>
        <div className='question1' style={{textAlign:"center"}}>{props.question}</div>
      </div>
      <div className='back1'>
        <div className='answer1'>{props.answer}</div>
        <div className='description1'>{props.description}</div>
      </div>
    </div>
  </div>
);

export default Card;