import React from 'react';
import "./Category.css";
import { Link } from 'react-router-dom'
const Category = (props) => {
  return (
    <div className='container-fluid' style={{ marginTop: '56px', backgroundImage: "linear-gradient(to top, #f1f1f1, #e9edf1, #ddeaef, #d1e7e8, #cae4db)", height: "100vh", paddingTop:'40px'}}>
      <div className='row' >
        <div className='col-md-10'>





          <div className='row justify-content-center'>
            <div className='col-md-6' >
              <div className='row justify-content-center' style={{ width: '100%', height: '100px' }}>

                {props.questionType === 'interview' ? <button className='btn btn-success' value='interview' style={{ width: '100%', height: '100%', fontSize: '30px' }}> Interview Questions</button>
                  : <button onClick={(event) => { props.changeQuestionType(event); props.selectCategory('') }} className='btn btn-secondary' value='interview' style={{ width: '100%', height: '100%', fontSize: '30px' }}> Interview Questions</button>
                }

              </div>
            </div>

            <div className='col-md-6 justify-content-center' >
              <div className='row justify-content-center' style={{ width: '100%', height: '100px' }}>

                {props.questionType === 'coding' ? <button onClick={props.changeQuestionType} className='btn btn-success' value='coding' style={{ width: '100%', height: '100%', fontSize: '30px' }}> Coding Questions</button>
                  : <button onClick={(event) => { props.changeQuestionType(event); props.selectCategory('') }} className='btn btn-secondary' value='coding' style={{ width: '100%', height: '100%', fontSize: '30px' }}> Coding Questions</button>
                }


              </div>
            </div>
          </div>


          {props.questionType === 'coding' ?
          <div>
          <div className='row justify-content-center' style={{ marginTop: '20px' }}>
            <h6 style ={{color: "grey"}}> Select one of these categories to select an algorithm.</h6>
          </div>
           { /* Coding Questions */}
            <div className='row' style={{ marginTop: '30px' }}>
              <div className='col-md-3' style={{ border: '1px grey solid', borderRadius: '5px', backgroundColor: '#F1F1F1', padding: '10px 10px 0 10px', height: '280px' }}>
                <h6 style={{textAlign: "center", color:'black' }}>Categories</h6>

                <ul style={{ padding: '0' }}>
                  {props.categories.filter(element => {
                    var categories = []
                    props.questions.filter(question => question.questionType === props.questionType).forEach(question => {
                      if (question.category === element) {
                        if (categories.indexOf(element) === -1) {
                          categories.push(element)
                        }

                      }
                    })

                    if (categories.indexOf(element) === -1) {
                      return false
                    }
                    else {
                      return true
                    }


                  }).map(element => {
                    return (props.selectedCategory === element ?

                      <div className='row justify-content-center' style={{ listStyleType: 'none', fontWeight: 'bold', fontSize: '14px', textDecoration: '', backgroundColor: '#28a745', marginBottom: '5px', color: 'white', borderRadius: '5px' }}
                        onClick={() => { props.selectCategory(element) }}>  <span>{element}</span>  </div> :

                      <div className='row justify-content-center' style={{ listStyleType: 'none', fontSize: '14px', backgroundColor: 'white', marginBottom: '5px', borderRadius: '5px', }}
                        onClick={() => { props.selectCategory(element) }}>  <span>{element}</span> </div>)

                  })}
                </ul>
              </div>

              <div className='col-md-9'>

                {props.selectedCategory === '' ? <div className='row justify-content-center' style={{ border: '1px solid grey', marginBottom: '10px', backgroundColor: '#f2f2f2' }}>
                  <p className='text-center' style={{ padding: '10px 20px', marginTop: '10px' }}>Select A Category!</p>
                </div> : props.questions.filter(element =>
                  (element.category === props.selectedCategory && element.questionType === props.questionType)).map(element => {
                    return (
                      <Link to='Question'><div className='row justify-content-center'
                        style={{ border: '1px solid grey', marginBottom: '10px', backgroundColor: "rgb(242, 243, 244)" }}
                        onClick={() => { props.selectedQuestion(element) }}
                      >
                        <p className='text-center' style={{ padding: '10px 20px', marginTop: '10px', fontSize: '15px' }}>{element.text}</p>
                      </div></Link>)
                  })}

              </div>
            </div>
            </div>

            /* Interview */

            :
            <div>
              <div className='row justify-content-center' style={{ marginTop: '20px' }}>
                <h6 style={{color: "grey"}}> Select one of these categories to go to a random question in the category</h6>
              </div>
              <div className='row' style={{ marginTop: '20px' }}>
                <div className='col-md-12' style={{ backgroundColor: '#F1F1F1', borderRadius: '10px' }}>
                  <h3 style={{ width: '100%', textAlign: "center", marginTop: "10px", fontWeight: "bold"}}>Categories</h3>
                  {props.categories.filter(element => {
                    var categories = []
                    props.questions.filter(question => question.questionType === props.questionType).forEach(question => {
                      if (question.category === element) {
                        if (categories.indexOf(element) === -1) {
                          categories.push(element)
                        }

                      }
                    })

                    if (categories.indexOf(element) === -1) {
                      return false
                    }
                    else {
                      return true
                    }


                  }).map(element => {
                    return (

                      <Link to='/interview'><div className='row justify-content-center' style={{ listStyleType: 'none', fontSize: '25px', textDecoration: '', backgroundColor: 'lightGrey', marginBottom: '10px', color: 'black', borderRadius: '5px' }}
                        onClick={() => { props.selectCategory(element) }}>  <span>{element}</span> </div></Link>
                    ) })}

                </div>
              </div>
            </div>
          }

        </div>

        <div className='col-md-2' style={{ borderLeft: '1px solid grey' }}>
          <div className='row text-center'>
            <h6 style={{ color: "black" }}>Articles to help you learn!</h6>
            {props.articles.map(element => {
              return (<div className='row' style={{ padding: "10px", backgroundColor: "#F1F1F1", border: '1px solid grey', borderRadius: "5px", marginBottom: '10px' }}> <a href={element.url}>{element.title}</a> </div>)

            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

