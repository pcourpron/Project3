
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage.js";
import Signup from "./components/Signup/Signup.js";
import Userlogin from "./components/Userlogin/Userlogin.js";
//import Product from "./components/pages/Product.js";
import Question from "./components/Question/Question"
<<<<<<< HEAD
import Categories from "./components/Categories/Categories.js";
import axios from 'axios'
=======
import Category from "./components/Category/Category"
>>>>>>> ab552367c039c243e9013f5fc32b2f0d61f77ac4

class App extends React.Component {
  constructor(props){
    super(props)

    this.getQuestions = this.getQuestions.bind(this)
    this.categoryClick = this.categoryClick.bind(this)
    this.selectedQuestion = this.selectedQuestion.bind(this)


  }

  state = {
    questionType: 'coding',
    questions: ['hi'],
    selectedCategory: '',
    showQuestions : [],
    userCode :  ``,
    codeResponse : {},
    categories:[],
    selectedQuestion: ''
  }

  getQuestions= (questionType)=>{
    console.log(questionType)
    axios.get(`/getAllCoding/${questionType}`).then((response)=>{
      var categoryArray = []
      response.data.forEach(element => {
        categoryArray.push(element.category)
      });

      var filteredArray = categoryArray.filter(function(item, pos){
        return categoryArray.indexOf(item)=== pos; 
      });
      this.setState({questions : response.data})
      this.setState({categories: filteredArray },function(){
        console.log(this.state.categories)
      })
    })

  }

  categoryClick = (category) =>{
    this.setState({selectedCategory: category },function(){
      console.log(this.state.selectedCategory)
    })
  }

  getState = ()=>{
    console.log(this.state)
  }

  selectedQuestion(question){
    console.log(question)
    this.setState({selectedQuestion : question},function(){
      console.log(this.state.selectedQuestion)
    })

  }





  componentDidMount(){
    this.getQuestions('coding')
  }



  render (){
    return(
  <Router>
    <div className="container">
      {/* <Header/> */}
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Userlogin" component={Userlogin} />
      <Route exact path="/Question" component = {Question}/>
<<<<<<< HEAD

      <Route exact path = '/Categories' render = {()=> 

        <Categories
          questionType={this.state.questionType} 
          getQuestions= {this.getQuestions} 
          questions = {this.state.questions} 
          categories = {this.state.categories}
          selectedCategory = {this.state.selectedCategory}
          categoryClick = {this.categoryClick}
          selectQuestion = {this.selectedQuestion}
          />}>

      </Route>


=======
      <Route exact path="/Category" component = {Category}/>
      
>>>>>>> ab552367c039c243e9013f5fc32b2f0d61f77ac4
    </div>
  </Router>
    )
  }
}

export default App;
