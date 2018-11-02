
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
<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar'
import InterviewQuestion from './components/interviewQuestion/interviewQuestion.js'

=======
import Navbar from './components/Navbar/Navbar';
import Interview from './components/Interview/interview';
>>>>>>> 1ffa9ed9c0d88fc249ae30a6a8cafee8de5b4a93

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getQuestions = this.getQuestions.bind(this)
    this.categoryClick = this.categoryClick.bind(this)
    this.selectedQuestion = this.selectedQuestion.bind(this)
    this.changeRunTime = this.changeRunTime.bind(this)
    this.changeQuestionType = this.changeQuestionType.bind(this)



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
<<<<<<< HEAD
    articles :[],
    interviewQuestion: []
=======
    loggedIn: false
>>>>>>> 1ffa9ed9c0d88fc249ae30a6a8cafee8de5b4a93
  }

  getQuestions = (questionType) => {
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
  handleToggleLogin = () => {
         this.setState((prevState) => ({loggedIn: !prevState.loggedIn}));
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
          name = ''/>
          {/* <Header/> */}
          <Route exact path="/Interview" component={Interview} />
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/Signup" component={Signup} />
<<<<<<< HEAD
          <Route exact path="/Userlogin" component={Userlogin} />

      
=======
>>>>>>> 1ffa9ed9c0d88fc249ae30a6a8cafee8de5b4a93
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



<<<<<<< HEAD
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




          <Route exact path = "/Admin" component = {Admin}/>
=======
          <Route exact path='/QuestionType' component={Category}/>
          <Route exact path = "/AdminCreateQuestion" component = {AdminCreateQuestion}/>
          <Route exact path='/Question' render={({history}) =>
>>>>>>> 1ffa9ed9c0d88fc249ae30a6a8cafee8de5b4a93


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
<<<<<<< HEAD


          <Route exact path='/interviewQuestion' render={()=>
          <InterviewQuestion
          
          />}/>

=======
            <Route exact path="/Login" component={Login} />
>>>>>>> 1ffa9ed9c0d88fc249ae30a6a8cafee8de5b4a93
        </div>

      </Router>
    )
  }
}

export default App;
