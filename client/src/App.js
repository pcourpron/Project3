
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage.js";
import Signup from "./components/Signup/Signup.js";
import Login from "./components/Login/Login.js";
//import Product from "./components/pages/Product.js";
import Question from "./components/Question/Question"
import Category from "./components/Category/Category"
import Categories from './components/Categories/Categories'
import AdminCreateQuestion from "./components/Admin/AdminCreateQuestion"
import axios from 'axios'
import QuestionComment from "./components/Comment/index.js";
import Navbar from './components/Navbar/Navbar'
import InterviewQuestion from './components/interviewQuestion/interviewQuestion.js'
import Interview from './components/Interview/interview';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getQuestions = this.getQuestions.bind(this)
    this.categoryClick = this.categoryClick.bind(this)
    this.selectedQuestion = this.selectedQuestion.bind(this)
    this.changeRunTime = this.changeRunTime.bind(this)
    this.changeQuestionType = this.changeQuestionType.bind(this)
    this.handleToggleLogin = this.handleToggleLogin.bind(this)



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
    runTime : '',
    articles :[],
    interviewQuestion: [],
    loggedIn: false,
    username: ''
  }

  getQuestions = () => {
    axios.get(`/getAllQuestions`).then((response) => {
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
    this.setState({ selectedQuestion: question })
  }

  
  handleToggleLogin = (username) => {
         this.setState(({loggedIn: true, username:username}),function(){
           console.log(this.state)
         });
       };

  changeRunTime = (runTime)=>{
    this.setState({runTime: runTime},function(){
      console.log(this.state.runTime)
    })
  }

    changeQuestionType = (event)=>{
      this.setState({questionType: event.target.value})
    }

    getArticles=()=>{
        axios.get('http://hn.algolia.com/api/v1/search?query=javascript algorithms').then((response)=>{
          console.log(response)
          var num = Math.floor(Math.random()*5)
          this.setState({articles : response.data.hits.slice(num,num+5)})
        })
    
     
    }


    logOut = ()=>{
      this.setState({user_id:''})
      axios.get('/logOut')

    }

    


  componentDidMount() {
    this.getQuestions()
    this.getArticles()
  }


  render() {
    return (
      <Router>
        <div>
          <Navbar admin = {false}
          name = {this.state.username}/>

          <Route exact path="/Interview" component={Interview} />
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/Signup" render = {()=>

            <Signup 
            handleToggleLogin = {this.handleToggleLogin}
            />

           }/>

      
          <Route exact path='/Comment'  
              render = {()=>
              <QuestionComment    questionType={this.state.questionType}
              questions={this.state.questions}
              categories={this.state.categories}
              selectedCategory={this.state.selectedCategory}
              selectedQuestion={this.state.selectedQuestion}
              runTime = {this.state.runTime}
              getArticles = {this.getArticles}/>
          }/>



          <Route exact path='/QuestionType' render = {()=>
              <Category    
              questionType={this.state.questionType}
              changeQuestionType = {this.changeQuestionType}
              categories={this.state.categories}
              selectedCategory={this.state.selectedCategory}
              selectCategory = {this.categoryClick}
              questions = {this.state.questions}
              articles = {this.state.articles}
              selectedQuestion = {this.selectedQuestion}
              />}/>




          
          <Route exact path = "/AdminCreateQuestion" component = {AdminCreateQuestion}/>
          


          <Route exact path='/Question' render={({history}) =>
            <Question
              selectedQuestion = {this.state.selectedQuestion}
              changeRunTime = {this.changeRunTime}
              history = {history}
            />}> </Route>


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


          <Route exact path='/interviewQuestion' render={()=>
          <InterviewQuestion/>}    />

          <Route exact path="/Login" component={Login} />
        </div>

      </Router>
    )
  }
}

export default App;
