import React, { Component } from "react";
import axios from 'axios'

import Header from './components/Header'
import Search from "./components/Search";
import Results from "./components/Results";
import SavedArticles from "./components/SavedArticles";


class App extends Component {
  constructor(props){
    super(props)

    this.query = this.query.bind(this)
  }

  state= {
    saved : [],
    results : [],
    query: '',
    startYear : '',
    endYear: ''
  }


  getArticles= (searchQuery,startDate,endDate)=>{
    console.log(searchQuery)
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e04f9a1d16e9490eba6ebb3430b39ff7&q=${searchQuery}&end_date=${endDate}0101&begin_date=${startDate}0101`)
    .then((res)=>{
      let articles = res.data.response.docs.slice(0,5)
      this.setState({results: articles},function(){
        console.log(this.state.results)
      })
    })
  }

  saveArticles = (article)=>{
    axios.post('/save',article).then(()=>{
      this.getSaved()
    })
  }


  getSaved = () =>{
    axios.get('/saved').then(res=>{
   
      this.setState({saved : res.data},function(){
       console.log(this.state.saved)
      })
    })
  }

  componentDidMount(){
    this.getSaved()
  }

  query= (event) =>{
    
    this.setState({query:  event.target.value},()=>{
      console.log(this.state.query)
    })
  }

  startYear=(startYear)=> {
    this.setState({startYear:startYear.target.value})
  } 
  endYear=(endYear)=> {
    this.setState({endYear:endYear.target.value})
  }




  render() {
    
    return (
      <div className='container-fluid'>
       
      <Header/>
      <Search getArticles ={this.getArticles}
      startYear = {this.startYear}
      endYear = {this.endYear}
      query = {this.query}
      qstartYear = {this.state.startYear}
      qendYear = {this.state.endYear}
      qquery = {this.state.query}

      />


      <Results 
      results ={this.state.results}
      save = {this.saveArticles}
      />
      <SavedArticles 
      saved={this.state.saved}/>
      </div>
    );
  }
}

export default App;
