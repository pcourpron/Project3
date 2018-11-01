import React, { Component } from "react";
import AceEditor from "react-ace";
import "./Question.css";

import brace from "brace";
import axios from "axios";
import equal from "deep-strict-equal";

import '../../../node_modules/brace/mode/javascript'

import '../../../node_modules/brace/theme/dracula'


class Question extends Component {
    constructor(props){
        super(props)
    }
    state = {
        code : ''
    }
    
    checker = ()=>{
        var testing = new Function(` return ${this.state.code}`)()
        console.log(this.props.selectedQuestion.tests)
        
        switch (this.props.selectedQuestion.tests[0].input.length){
            case 4:
            this.props.selectedQuestion.tests.forEach(element => {
                if (!equal(testing(element.input),element.expected)){
                    console.log('hit')
                    return 'You DUMB'
                }
                
            });
            console.log('hit1')
            return 'You Smart'
           
            case 2:
            this.props.selectedQuestion.tests.forEach(element => {
                if (!equal(testing(element.input[0],element.input[1]),element.expected)){
                    console.log('hit2')

                    return 'You DUMB'
                }
                console.log('hit3')

                return 'You Smart'
                
            });
            default:
            console.log('hit4')

            return 'Something Broke!'
        }

    }

    handleChange= (event)=>{
        this.setState({code: event})
    }




    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div class="card">
                            <h5 class="card-header">Category Question #n</h5>
                            <div class="card-body">
                                <h6 class="card-title">Create a bubble sort that will sort an array in ascending order</h6>
                                <p class="card-text">Input: [5,3,2,6,1] Expected Output: [1,2,3,5,6] <br />
                                    Wrap your code in a single function</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div class="card">
                            <h5 class="card-header">Write Your Code Here</h5>
                            <div class="card-body">
                                <h6 class="card-title">Create a bubble sort that with sort an array in ascending order</h6>
                                <div class="card-text">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">

                                        </div>

                                        <AceEditor
                                            mode="javascript"
                                            theme="dracula"
                                            onChange= {this.handleChange}
                                            name="userCode"
                                            editorProps={{ $blockScrolling: true }}
                                            value = {`[2,3,4,5]`}
                                   
                                        />

                                        <button
                                            className="btn btn-primary"
                                            onClick={this.checker}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;