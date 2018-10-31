
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage.js";
import Signup from "./components/Signup/Signup.js";
import Userlogin from "./components/Userlogin/Userlogin.js";
//import Product from "./components/pages/Product.js";
import Question from "./components/Question/Question"
import Category from "./components/Category/Category"
import Categories from './components/Categories/Categories'
<<<<<<< HEAD

=======
import Admin from "./components/Admin/Admin"
>>>>>>> 832a42c1a043f2db8926beb8d82d1def3dc78380
import axios from 'axios'
import QuestionComment from "./components/Comment/index.js";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getQuestions = this.getQuestions.bind(this)
    this.categoryClick = this.categoryClick.bind(this)
    this.selectedQuestion = this.selectedQuestion.bind(this)


  }

  state = {
    questionType: 'coding',
    questions: [],
    selectedCategory: '',
    showQuestions: [],
    userCode: ``,
    codeResponse: {},
    categories: [],
    selectedQuestion: ''
  }

  getQuestions = (questionType) => {
    console.log(questionType)
    axios.get(`/getAllCoding/${questionType}`).then((response) => {
      var categoryArray = []
      response.data.forEach(element => {
        categoryArray.push(element.category)
      });

      var filteredArray = categoryArray.filter(function (item, pos) {
        return categoryArray.indexOf(item) === pos;
      });
      this.setState({ questions: response.data })
      this.setState({ categories: filteredArray }, function () {
        console.log(this.state.categories)
      })
    })

  }

  categoryClick = (category) => {
    this.setState({ selectedCategory: category }, function () {
      console.log(this.state.selectedCategory)
    })
  }

  getState = () => {
    console.log(this.state)
  }

  selectedQuestion(question) {
    console.log(question)
    this.setState({ selectedQuestion: question })

  }





  componentDidMount() {
    this.getQuestions('coding')
  }



  render() {
    return (
      <Router>
        <div className="container">
          {/* <Header/> */}
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Userlogin" component={Userlogin} />
<<<<<<< HEAD
          <Route exact path='/Comment'  
          
          render = {()=>
            <QuestionComment    questionType={this.state.questionType}
            questions={this.state.questions}
            categories={this.state.categories}
            selectedCategory={this.state.selectedCategory}
            selectedQuestion={this.state.selectedQuestion}
/>
          }/>



          <Route exact path='/QuestionType' component={Category}/>
=======
          <Route exact path = "/Admin" component = {Admin}/>
>>>>>>> 832a42c1a043f2db8926beb8d82d1def3dc78380
          <Route exact path='/Question' render={() =>

            <Question
              selectedQuestion = {this.state.selectedQuestion}
            />}>

          </Route>
          <Route exact path='/Categories' render={() =>

            <Categories
              questionType={this.state.questionType}
              getQuestions={this.getQuestions}
              questions={this.state.questions}
              categories={this.state.categories}
              selectedCategory={this.state.selectedCategory}
              categoryClick={this.categoryClick}
              selectQuestion={this.selectedQuestion}
            />}>

          </Route>
        </div>

      </Router>
    )
  }
}

export default App;
