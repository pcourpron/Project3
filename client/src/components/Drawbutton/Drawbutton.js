import React, { Component } from 'react';
import './Drawbutton.css';

export default class DrawButton extends Component {
  constructor(props) {
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    this.props.drawCard();
  }

  render(props) {
    return (
      <div className='button-container'>
        <button className='button1' onClick={this.drawCard} style={{marginTop:'5px'}}>Draw card</button>
      </div>
    );
  }
}