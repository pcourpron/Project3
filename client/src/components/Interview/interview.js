import React, { Component } from 'react';
import Card from '../Card/card'
import DrawButton from '../Drawbutton/Drawbutton';
import './interview.css';
import {Link} from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCard: {},
      index: 0
    }

    this.getNewCard = this.getNewCard.bind(this);
  }

  componentDidMount() {
      this.getCards()
      
  }

  getCards = () => {
    
    var cardsByCat = this.props.questions.filter(item => {
      return item.category === this.props.selectedCategory
    });
  
    this.setState({cards: cardsByCat},()=>{
    this.setState({currentCard: this.state.cards[0]});})
  }

  getNewCard() {
      this.setState({index: this.state.index +1},()=>{
        if(this.state.index > this.state.cards.length-1){
          let end = {
          text: `You're Done!`,
          answer: `I can't believe you checked the back side, go pick another category...`
          }
          this.setState({currentCard:end},()=>{console.log(this.state)})
        }
        else{
        this.setState({currentCard: this.state.cards[this.state.index]});
        }
      })
      
   
  }


  render() {
    return (
     

     
      <div className='flashcards' style={{backgroundImage: "linear-gradient(to top, #f1f1f1, #e9edf1, #ddeaef, #d1e7e8, #cae4db)", height: "100%",minHeight:'100vh', marginTop:'56px'}}>
      <h1 style= {{marginTop:'5px', color: 'white'}}>Flashcards</h1>
      <p style = {{color:'white'}}> Click and Hold to see the back of the flashcard.</p>


        <div className='card-row'> 
          <Card question={this.state.currentCard.text}
                answer={this.state.currentCard.answer}
          />
        </div>
        <div className='button-row'>
          {this.state.index > this.state.cards.length-1? <Link to= "/questionType"><button className = "btn btn-lg btn-danger">Back to Categories</button></Link>: <DrawButton drawCard={this.getNewCard} /> }
          
        </div>
      </div>
    );
  }
}