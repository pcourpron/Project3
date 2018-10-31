import React, { Component } from "react";
import AceEditor from "react-ace";
import "./Question.css";
import {Link} from 'react-router-dom'
import equal from "deep-strict-equal";

import '../../../node_modules/brace/mode/javascript'
import '../../../node_modules/brace/theme/dracula'



import Instructions from '../Instructions/instructions'


class Question extends Component {
    constructor(props){
        super(props)
    }
    state = {
        code : '',
        result : ''
    }
    
    checker = ()=>{
        var testing = new Function(` return ${this.state.code}`)()
        var tests = this.props.selectedQuestion.tests
        var result
        
       switch (tests[0].input.length){
            case 4:
            for (let i = 0; i < tests.length-1; i++) {
              
                if (!equal(testing(tests[0].input),tests[0].expected)){
                    result = (`${tests[0]} does not return ${tests[0].expected} but returns ${testing(tests[0].input)}`);
        
                    break
                }
                if (i === test.length-1){

                    result = 'You passed!'
                    break
                }
            }
                
           
            this.setState({result:result})
            break
            ;
                    
            case 2:
            this.props.selectedQuestion.tests.forEach(element => {
                if (!equal(testing(element.input[0],element.input[1]),element.expected)){
                    return (`${element} does not return ${element.expected} but returns ${testing(element.input)}`)
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
                <Instructions text = 'hi'/>
                    <div className="col-lg-8" style={{borderBottom:'1px solid grey'}}>
                        <div> <h4 className='text-center' style = {{width: '100%'}}>Solution:</h4></div>
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">
                                    <div class="input-group input-group-lg">
                                

                                        <AceEditor
                                            mode="javascript"
                                            theme="dracula"
                                            onChange= {this.handleChange}
                                            name="userCode"
                                            editorProps={{ $blockScrolling: true }}
                                            value = {this.state.code}
                                            width = '100%'
                                            height = '200px'
                                            setOptions ={{showPrintMargin:false}}
                                            />

                                        <button
                                            className="btn btn-primary"
                                            onClick={this.checker}>Submit</button>
                                            <Link to='/Comment' {...this.props}><button>Comment</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div> <h4 className='text-center' style = {{width: '100%'}}>Test Cases:</h4></div>
                        <div class="card">
                    <AceEditor
                                        mode="javascript"
                                        theme="dracula"
                                        onChange= {this.handleChange}
                                        name="userCode"
                                        editorProps={{ $blockScrolling: true }}
                                        value = 'hi'
                                        width = '100%'
                                        height = '200px'
                                        setOptions ={{showPrintMargin:false}}
                                        />
                                            </div>

                    </div>

                </div>

                <div className='row'>
                {this.props.result}
                </div>

            </div>
        )
    }
}

export default Question;