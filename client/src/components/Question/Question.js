import React, { Component } from "react";
import AceEditor from "react-ace";

class Question extends Component {

    state = {
        code: ""
    }

    handleChange = (event) => {
        this.setState({ code: event})
        console.log(event)
    }
    submitCode = () => {
        // hit the submit code back end route sending with this.state.code

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
                                            theme="github"
                                            onChange={ this.handleChange}
                                            name="userCode"
                                            editorProps={{ $blockScrolling: true }}
                                            value = {this.state.code}
                                        
                                        />


                                        {/* <textarea
                                            type="text"
                                            value={this.state.code}
                                            id="userCode"
                                            onChange={this.handleChange}
                                            class="form-control"
                                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" /> */}
                                        <button
                                            className="btn btn-primary"
                                            onClick={this.submitCode}>Submit</button>
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