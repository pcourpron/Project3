import React, { Component } from 'react';
import Card from '../Card/card'
import DrawButton from '../Drawbutton/Drawbutton';
import './interview.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {code: 'How is everything treated in HTML DOM?', description: 'Explanation: In the HTML DOM (Document Object Model), everything is a node. The document itself is a document node. All HTML elements are element nodes.'}
        ],
      currentCard: {}
    }

    this.updateCard = this.updateCard.bind(this);
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    fetch('https://raw.githubusercontent.com/for-GET/know-your-http-well/master/json/status-codes.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.forEach(function(item) {
          let desc = item.description;
          desc = desc.replace(/"/g,"");
          currentCards.push({code: item.code , description: desc});
        });
      })
      .catch(function(err) {
        console.log(err);
      });


    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className='flashcards'>
      <h1>Flashcards</h1>
        <div className='card-row'> 
          <Card question={this.state.currentCard.code}
                answer={this.state.currentCard.phrase}
                description={this.state.currentCard.description} 
          />
        </div>
        <div className='button-row'>
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}