
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage.js";
import Signup from "./components/Signup/Signup.js";
import Userlogin from "./components/Userlogin/Userlogin.js";
//import Product from "./components/pages/Product.js";
import Question from "./components/Question/Question"
import Category from "./components/Category/Category"
import Categories from './components/Categories/Categories'
import AdminCreateQuestion from "./components/Admin/AdminCreateQuestion"
import axios from 'axios'
import QuestionComment from "./components/Comment/index.js";
import Navbar from './components/Navbar/Navbar'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getQuestions = this.getQuestions.bind(this)
    this.categoryClick = this.categoryClick.bind(this)
    this.selectedQuestion = this.selectedQuestion.bind(this)
    this.changeRunTime = this.changeRunTime.bind(this)



  }

  state = {
    questionType: 'coding',
    questions: [],
    selectedCategory: '',
    showQuestions: [],
    userCode: ``,
    codeResponse: {},
    categories: [],
    selectedQuestion: '', 
    runTime : ''
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

  changeRunTime = (runTime)=>{
    this.setState({runTime: runTime},function(){
      console.log(this.state.runTime)
    })
  }





  componentDidMount() {
    this.getQuestions('coding')
  }


  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          {/* <Header/> */}
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Userlogin" component={Userlogin} />
          <Route exact path='/Comment'  
              render = {()=>
              <QuestionComment    questionType={this.state.questionType}
              questions={this.state.questions}
              categories={this.state.categories}
              selectedCategory={this.state.selectedCategory}
              selectedQuestion={this.state.selectedQuestion}
              runTime = {this.state.runTime}/>
          }/>



          <Route exact path='/QuestionType' component={Category}/>
          <Route exact path = "/AdminCreateQuestion" component = {AdminCreateQuestion}/>
          <Route exact path='/Question' render={({history}) =>

            <Question
              selectedQuestion = {this.state.selectedQuestion}
              changeRunTime = {this.changeRunTime}
              history = {history}
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
