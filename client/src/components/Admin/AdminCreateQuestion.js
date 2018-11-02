import React from 'react';
import Axios from 'axios';
import Popup from 'reactjs-popup';
import {Link} from "react-router-dom";



class Admin extends React.Component {

    state = {
        questionType: null,
        params: null,
        questionText: "",
        category: "",
        codingCategories: null,
        interviewCategories: null,
        questionAnswer: "",
        inputs: [],
        expectedResults: [],
        postQuestionResponse: ""

    }

    componentDidMount() {
        this.getCategories();
        console.log(this.state.codingCategories);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.elements[0].value)
        if (this.state.questionType === "coding") {

            var inputs = []
            var expected = []
            
            for(var i=0; i<event.target.elements.length; i++){
                if(event.target.elements[i].id === "input"){
                    inputs.push(event.target.elements[i].value)
                }
                else if(event.target.elements[i].id === "expected"){
                    expected.push(event.target.elements[i].value)
                }
                
            }
            console.log(event.target.elements)
            console.log(inputs)
            console.log(expected)

            var parsedInputs = []

            inputs.forEach(element => {
                if (!(element.charAt(0).match(/[a-zA-Z]/))) {
                    parsedInputs.push(JSON.parse(element))
                } else {
                    parsedInputs.push(element)
                }
            });

            var parsedExpected = []

            expected.forEach(element => {
                if (!(element.charAt(0).match(/[a-zA-Z]/))) {
                    parsedExpected.push(JSON.parse(element))
                } else {
                    parsedExpected.push(element)
                }
            });

            console.log(parsedInputs)
            console.log(parsedExpected)
        
        }
        else if (this.state.questionType){
            this.handleSubmitInterview()
        }
        
    }
    handleClick = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitCoding = (parsedInputs, parsedExpected) => {
        

        var questionObject = {
            text: this.state.questionText,
            questionType: this.state.questionType,
            category: this.state.category,
            tests: [
                {
                    input: parsedInputs[0],
                    expected: parsedExpected[0]
                },
                {
                    input: parsedInputs[1],
                    expected: parsedExpected[1]
                },
                {
                    input: parsedInputs[2],
                    expected: parsedExpected[2]
                }]
        }

        Axios.post("/api/createQuestion", questionObject).then((response) => {
            console.log(response)
            this.setState({postQuestionResponse: "success"});
        }).catch((err) => {
            console.log(err)
            this.setState({postQuestionResponse: "fail"});
        })
    };



    handleSubmitInterview = (event) => {
        // event.preventDefault()
        var questionObject = {
            text: this.state.questionText,
            answer: this.state.questionAnswer,
            questionType: this.state.questionType,
            category: this.state.category

        }
        Axios.post("/api/createQuestion", questionObject).then((response) => {
            console.log(response)
            this.setState({postQuestionResponse: "success"});
        });
    }
    renderQuestionOptions = () => {

        if (this.state.questionType === "interview") {

            return (
                <div class="form-group">
                    <label for="question-answer">Question Answer</label>
                    <input
                        class="form-control"
                        id="question-answer"
                        name="questionAnswer"
                        onChange={this.handleChange}
                        value={this.state.questionAnswer} 
                        required/>
                    <Popup
                        trigger={<button className="button"> Submit </button>}
                        modal
                        closeOnDocumentClick>
                        <div> 
                            {this.modalContent()}
                        </div>
                        </Popup>
                </div>
            )
        } else if (this.state.questionType === "coding") {

            return (
                <div class="form-row">
                    <label for="test1" class="col-sm-2 col-form-label">Test 1</label>
                    <div class="form-group col-md-5">
                        <label for="input">Input</label>
                        <input
                            type="text"
                            class="form-control"
                            id="input"
                            name="input1Par1" 
                            required/>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="expected">Expected Output</label>
                        <input type="text"
                            class="form-control"
                            id="expected"
                            name="expected1"
                            required/>
                    </div>
                    <label for="test1" class="col-sm-2 col-form-label">Test 2</label>
                    <div class="form-group col-md-5">
                        <label for="input">Input</label>
                        <input
                            type="text"
                            class="form-control"
                            id="input"
                            name="input2Par1"
                            required
                        />
                    </div>
                    <div class="form-group col-md-5">
                        <label for="expected">Expected Output</label>
                        <input type="text"
                            class="form-control"
                            id="expected"
                            name="expected2"
                            required
                        />
                    </div>
                    <label for="test1" class="col-sm-2 col-form-label">Test 3</label>
                    <div class="form-group col-md-5">
                        <label for="input">Input</label>
                        <input
                            type="text"
                            class="form-control"
                            id="input"
                            name="input3Par1"
                            required
                        />
                    </div>
                    <div class="form-group col-md-5">
                        <label for="expected">Expected Output</label>
                        <input
                            type="text"
                            class="form-control"
                            id="expected"
                            name="expected3"
                            required
                        />
                    </div>
                    <Popup
                        trigger={<button className="button"> Submit</button>}
                        modal
                        closeOnDocumentClick>
                        <div> 
                            {this.modalContent()}
                        </div>
                        </Popup>
                </div>

            )
        }
    }

    getCategories = () => {
        Axios.get("api/allQuestions").then((response) => {
            console.log(response.data)
            var codingCategories = []
            var interviewCategories = []
            response.data.forEach(item => {
                if (item.questionType === "coding") {
                    if (codingCategories.indexOf(item.category) === -1) {
                        codingCategories.push(item.category);
                    }

                } else {
                    if (interviewCategories.indexOf(item.category) === -1) {
                        interviewCategories.push(item.category);
                    }
                }
            });
            console.log(codingCategories);

            this.setState({ codingCategories: codingCategories });
            this.setState({ interviewCategories: interviewCategories });
            console.log(this.state.codingCategories)

        });
    }

    renderCategories = () => {
        console.log(this.state.codingCategories)
        console.log(this.state.interviewCategories)
        console.log(this.state.questionType)
        if (this.state.questionType === "coding") {
            return (
                <div>
                    <p>Current Categories</p>
                    {this.state.codingCategories.map(element => (

                        <button
                            onClick={this.handleCategoryClick}
                        >{element}</button>
                    ))}
                </div>
            )
        } if (this.state.questionType === "interview") {
            return (
                <div>
                    <p>Current Categories</p>
                    {this.state.interviewCategories.map(element => (
                        <button
                            onClick={this.handleCategoryClick}
                        >{element}</button>
                    ))}
                </div>
            )
        }
    }

    handleCategoryClick = (event) => {
        event.preventDefault();
        console.dir(event.target.textContent);
        this.setState({ category: event.target.textContent })
    }

    modalContent = () => {
        if(this.state.postQuestionResponse === "success"){
            return (
                <div>
                    <h2>Your question has been created!</h2>
                    <button>Back Home</button>
                    <Link to="/AdminCreateQuestion"><button>Create another question</button></Link>
                </div>
            )
        }else if(this.state.postQuestionResponse === "fail"){
            return (
                <div>
                    <h4>There was an error with your post</h4>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="row" >
                <h1>Create a New Question</h1>
                <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="questionType"
                                id="interview"
                                value="interview"
                                onClick={this.handleClick} 
                                required/>
                            <label class="form-check-label" for="interview">
                                Interview
                        </label>
                        </div>
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="questionType"
                                id="coding"
                                value="coding"
                                onClick={this.handleClick} 
                                required/>
                            <label class="form-check-label" for="coding">
                                Coding
                        </label>
                        </div>

                        {this.renderCategories()}

                        <div class="form-group">
                            <label for="category">Category</label>
                            <input
                                class="form-control"
                                id="category"
                                name="category"
                                onChange={this.handleChange}
                                value={this.state.category} 
                                required/>
                        </div>
                        <div class="form-group">
                            <label for="questionText">Question Text</label>
                            <input
                                class="form-control"
                                name="questionText"
                                id="questionText"
                                onChange={this.handleChange}
                                value={this.state.questionText} 
                                required/>
                        </div>

                        {this.renderQuestionOptions()}   

                        
                    </form>
                    
                    

                </div>
                <div>





                </div>
            </div>
        )

    }
}


export default Admin;