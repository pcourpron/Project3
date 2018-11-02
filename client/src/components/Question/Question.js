import React, { Component } from "react";
import AceEditor from "react-ace";
import "./Question.css";
import { Link } from 'react-router-dom'
import equal from "deep-strict-equal";

import '../../../node_modules/brace/mode/javascript'
import '../../../node_modules/brace/theme/dracula'
import axios from 'axios'





import Instructions from '../Instructions/instructions'


class Question extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        code: `function testFunction(input){
        }`,
        result: '',
        runTime: ''
    }

    checker = () => {
        try {
            var testing = new Function(`return ${this.state.code}`)()
            var tests = this.props.selectedQuestion.tests
            var result

            for (let i = 0; i < tests.length; i++) {

                if (!equal(testing(tests[i].input), tests[i].expected)) {
                    result = (`${tests[i].input} does not return ${tests[i].expected} but returns ${testing(tests[i].input)}`);
                    this.setState({result:result})
                    break
                }
                if (i === tests.length - 1) {
                    result = 'You passed!'
                    this.benchmark(testing, tests[0].input)
                    this.setState({ result: result })
                    break
                }
            }


        } catch (error) {
            console.log(error)
        }
    }

    benchmark(testing, input) {
        var testingTime = []
        var average = 0
        for (let i = 0; i < 50; i++) {
            var start = window.performance.now();
            testing(input)
            var end = window.performance.now();
            testingTime.push(end - start)
        }

        testingTime.forEach(time => average += time)
        average = average /50
        console.log(average)
        this.props.changeRunTime(average)


        axios.put(`/addRunTime/${this.props.selectedQuestion._id}`, {runTime:average}).then(
            ()=>{
                this.props.history.push('/Comment')
            }
        )

    

    }

    clearEditor = ()=>{
        this.setState({code: `function testFunction(input){
    }`})
    }

    handleChange = (event) => {
        this.setState({ code: event })
    }




    render() {
        return (
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="row">
                    <Instructions 
                    text={this.props.selectedQuestion.text}
                    output = {this.state.result}
                    tests={this.props.selectedQuestion.tests}/>
                    
                    <div className="col-md-8" style={{ border: ' 1px solid grey' }}>
                        <div> <h4 className='text-center' style={{ width: '100%' }}>Solution:</h4></div>
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">
                                    <div class="input-group input-group-lg">
                                        <AceEditor
                                            mode="javascript"
                                            theme="dracula"
                                            onChange={this.handleChange}
                                            name="userCode"
                                            editorProps={{ $blockScrolling: true }}
                                            value={this.state.code}
                                            width='100%'
                                            height='400px'
                                            setOptions={{ showPrintMargin: false }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                        {console.log(this.props.selectedQuestion.tests[0].input)}
                     
                        </div>
                        
                   
                
                <div className='row justify-content-around' style={{ margin: '20px 0' }}>
                    <button className="btn btn-primary"
                        onClick={this.checker} >Submit</button>

                    <Link to='/Comment' {...this.props}><button className='btn btn-primary'>Comment</button></Link>

                    <button className='btn btn-primary' onClick={this.clearEditor}> Reset</button>
                    <button className='btn btn-primary'> Back</button>
                </div>
            </div>


                </div >

            <div className='row'>
            
            </div>
          
            </div >
        )
    }
}

export default Question;