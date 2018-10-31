import React from 'react';
import Axios from 'axios';
import { isThisMonth } from 'date-fns';


class Admin extends React.Component {

    state = {
        questionType: null,
        params: null,
        questionText: "",
        category: "",
        questionAnswer: "",
        input1Par1:"",
        input1Par2:"",
        input2Par1:"",
        input2Par2: "",
        input3Par1: "",
        input3Par2:"",
        expected1:null,
        expected2:null,
        expected3:null
    }

    handleClick = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    handleChangeInputs = (event) => {
        var inputNum = event.target.name
        this.setState({[inputNum]: JSON.parse(event.target.value)});
    }

    handleSubmitCodingPar1 = (event) => {
        event.preventDefault()

        var questionObject = {
            text: this.state.questionText,
            answer: this.state.questionAnswer,
            questionType: this.state.questionType,
            category: this.state.category,
            tests: [
                {input:[this.state.input1Par1],
                expected:this.state.expected1},
                {input:[this.state.input2Par1],
                expected:this.state.expected2},
                {input:[this.state.input3Par1],
                expected:this.state.expected3}]
        }
        Axios.post("/api/createQuestion", questionObject).then((response)=> {
            console.log(response)
        });
    };

    handleSubmitCodingPar2 = (event) => {
        event.preventDefault()

        var questionObject = {
            text: this.state.questionText,
            questionType: this.state.questionType,
            category: this.state.category,
            tests: [
                {input: [this.state.input1Par1, this.state.input1Par2], 
                expected: this.state.expected1}, 
                {input: [this.state.input2Par1, this.state.input2Par2], 
                expected: this.state.expected2}, 
                {input: [this.state.input3Par1, this.state.input3Par2], 
                expected: this.state.expected3}
            ]
        }
        Axios.post("/api/createQuestion", questionObject).then((response)=> {
            console.log(response)
        });
    }

    handleSubmitInterview = (event) => {
        event.preventDefault()
        var questionObject = {
            text: this.state.questionText,
            answer: this.state.questionAnswer,
            questionType: this.state.questionType,
            category: this.state.category

        }
        Axios.post("/api/createQuestion", questionObject).then((response)=> {
            console.log(response)
        })
    }
    renderQuestionOptions = () => {
        if (this.state.questionType === "interview") {
            return (
                <div class="form-group">
                    <label for="question-answer">Question Answer</label>
                    <input 
                    class="form-control" 
                    id="question-answer"
                    name= "questionAnswer"
                    onChange = {this.handleChange}
                    value = {this.state.questionAnswer} />
                    <button onClick = {this.handleSubmitInterview}>Submit</button>
                </div>
            )
        } else if (this.state.questionType === "coding") {
            return (
                <div>
                    Number of Parameters
                <div class="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="params"
                            id="param1"
                            value="1"
                            onClick={this.handleClick} />
                        <label class="form-check-label" for="param1">
                            1
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="params"
                            id="param2"
                            value="2"
                            onClick={this.handleClick} />
                        <label class="form-check-label" for="param2">
                            2
                        </label>
                    </div>
                    {this.renderTestOptions()}
                </div>
            )
        }
    }

    renderTestOptions = () => {
        if (this.state.params === "1") {
            return (
                <div class="form-row">
                    <label for="test1" class="col-sm-2 col-form-label">Test 1</label>
                    <div class="form-group col-md-5">
                        <label for="input">Input</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="input"
                        name = "input1Par1"
                        onChange = {this.handleChangeInputs}
                        value = {this.state.input1Par1} />
                    </div>
                    <div class="form-group col-md-5">
                        <label for="expected">Expected Output</label>
                        <input type="text" 
                        class="form-control" 
                        id="expected" 
                        name = "expected1"
                        onChange = {this.handleChangeInputs}
                        value = {this.state.expected1}/>
                    </div>
                    <label for="test1" class="col-sm-2 col-form-label">Test 2</label>
                    <div class="form-group col-md-5">
                        <label for="input">Input</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="input" 
                        name = "input2Par1"
                        onChange = {this.handleChangeInputs}
                        value = {this.state.input2Par1}/>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="expected">Expected Output</label>
                        <input type="text" 
                        class="form-control" 
                        id="expected"
                        name = "expected2"
                        onChange = {this.handleChangeInputs}
                        value = {this.state.expected2} />
                    </div>
                    <label for="test1" class="col-sm-2 col-form-label">Test 3</label>
                    <div class="form-group col-md-5">
                        <label for="input">Input</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="input"
                        name = "input3Par1"
                        onChange = {this.handleChangeInputs}
                        value = {this.state.input3Par1} />
                    </div>
                    <div class="form-group col-md-5">
                        <label for="expected">Expected Output</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="expected" 
                        name = "expected3"
                        onChange = {this.handleChangeInputs}
                        value = {this.state.expected3}/>
                    </div>
                    <button onClick = {this.handleSubmitCodingPar1}>Submit</button>
                </div>
            )
        } else if (this.state.params === "2") {
            return (
                <div class="form-row">
                <label for="test1" class="col-sm-2 col-form-label">Test 1</label>
                <div class="form-group col-md-3">
                    <label for="input">Input 1</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="input"
                    name = "input1Par1"
                    onChange = {this.handleChangeInputs}
                    value = {this.state.input1Par1}/>
                </div>
                <div class="form-group col-md-3">
                    <label for="input">Input 2</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="input" 
                    name = "input1Par2"
                    onChange = {this.handleChangeInputs}
                    value = {this.state.input1Par2}
                    />
                </div>
                <div class="form-group col-md-3">
                    <label for="expected">Expected Output</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="expected" 
                    name = "expected1"
                    onChange = {this.handleChangeInputs}
                    value = {this.state.expected1}/>
                </div>
                <label for="test1" class="col-sm-2 col-form-label">Test 2</label>
                <div class="form-group col-md-3">
                    <label for="input">Input 1</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="input" 
                    name = "input2Par1"
                    onChange = {this.handleChangeInputs}
                    value = {this.state.input2Par1}/>
                </div>
                <div class="form-group col-md-3">
                    <label for="input">Input 2</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="input" 
                    name = "input2Par2"
                    onChange = {this.handleChangeInputs}
                    value = {this.state.input2Par2}/>
                </div>
                <div class="form-group col-md-3">
                    <label for="expected">Expected Output</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="expected" 
                    name = "expected2"
                    onChange = {this.handleChangeInputs}
                    value = {this.state.expected2}/>
                </div>
                <label for="test1" class="col-sm-2 col-form-label">Test 3</label>
                <div class="form-group col-md-3">
                    <label for="input">Input 1</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="input" 
                    name = "input3Par1"
                    onChange = {this.handleChangeInputs}
                    value = {this.state.input3Par1}/>
                </div>
                <div class="form-group col-md-3">
                    <label for="input">Input 2</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="input"
                    name = "input3Par2"
                    onChange = {this.handleChangeInputs}
                    value = {this.state.input3Par2} />
                </div>
                <div class="form-group col-md-3">
                    <label for="expected">Expected Output</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="expected" 
                    name = "expected3"
                    onChange = {this.handleChangeInputs}
                    value = {this.state.expected3}/>
                </div>
                <button onClick = {this.handleSubmitCodingPar2}>Submit</button>
            </div>
            
            )
        }
    }

    render() {
        return (
            <div className="row" >
                <div className="col-md-12">
                    <form>
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="questionType"
                                id="interview"
                                value="interview"
                                onClick={this.handleClick} />
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
                                onClick={this.handleClick} />
                            <label class="form-check-label" for="coding">
                                Coding
                        </label>
                        </div>
                        <div class="form-group">
                            <label for="category">Category</label>
                            <input 
                            class="form-control" 
                            id="category" 
                            name = "category"
                            onChange = {this.handleChange}
                            value = {this.state.category}/>
                        </div>
                        <div class="form-group">
                            <label for="questionText">Question Text</label>
                            <input 
                            class="form-control" 
                            name = "questionText"
                            id="questionText" 
                            onChange = {this.handleChange}
                            value = {this.state.questionText}/>
                        </div>
                        {this.renderQuestionOptions()}
                    </form>

                </div>

            </div>
        )

    }
}


export default Admin;