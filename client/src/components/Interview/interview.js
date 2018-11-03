import React, { Component } from 'react';
import Card from '../Card/card'
import DrawButton from '../Drawbutton/Drawbutton';
import './interview.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCard: {}
    }

    this.updateCard = this.updateCard.bind(this);
  }

  componentWillMount() {

    this.getCards();
  }

  getCards = () => {
    
    var cardsByCat = this.props.questions.filter(item => {
      return item.category === this.props.selectedCategory
    });

    this.setState({cards: cardsByCat});
    this.setState({currentCard: this.getRandomCard(cardsByCat)});

  }
  getRandomCard(currentCards) {
    let card = currentCards[0];
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
          <Card question={this.state.currentCard.text}
                answer={this.state.currentCard.answer}
          />
        </div>
        <div className='button-row'>
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}