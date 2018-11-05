import React from 'react';
import axios from 'axios';

class QuestionComment extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        comments: [],
        run_Time: [],
        user: '',
        comment: ''
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.user)
        this.addComment({ author: this.state.user, text: this.state.comment })

    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            console.log(this.state)
        })

    }

    addComment = (body) => {
        axios.put(`/addComment/${this.props.selectedQuestion._id}`, body).then((response) => {
            axios.get(`/getComments/${this.props.selectedQuestion._id}`).then((response) => {
                let newTime = response.data.runTime.sort((a, b) => a - b);
                this.setState({ comments: response.data.comments })
                this.setState({ run_Time: newTime })
            }
            )
        })
    }


    componentDidMount = () => {
        axios.get(`/getComments/${this.props.selectedQuestion._id}`).then((response) => {
            let newTime = response.data.runTime.sort((a, b) => a - b);
            this.setState({ comments: response.data.comments })
            this.setState({ run_Time: newTime })
        }
        )
    }


    render() {

        return (
            <div className='container-fluid' style={{ marginTop: '70px', backgroundImage: "linear-gradient(to top, #f1f1f1, #e9edf1, #ddeaef, #d1e7e8, #cae4db)" }}>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='row justify-content-center'>
                            <h3 style={{ width: '100%', textAlign: "center" }}>{this.props.selectedQuestion.category}</h3>
                        </div>
                        <div className='row'>
                            <h6 style={{ width: '100%', textAlign: "center" }}>{this.props.selectedQuestion.text}</h6>
                        </div>

                    </div>
                </div>
                <div className='row justify-content-center'>


                    <div className='col-md-8'>

                        {console.log(this.state.run_Time)}
                        {this.state.run_Time[0] === undefined ?

                            <div className='row justify-content-center' style={{ marginTop: '40px' }}>
                                <h5 style={{ textAlign: "center" }}>{`There are no timed runs yet! Go ahead and give it a try!`}</h5>
                            </div>

                            :

                            this.state.run_Time.map((element, index) => (

                                <div className='row' style={ this.props.runTime === element ? {backgroundColor:'green'} :index % 2 === 0 ? { backgroundColor: 'white' } : { backgroundColor: 'lightgrey' }}>
                                    <span style={this.props.runTime === element ? { fontWeight: 'bold' } : null}>{`${index + 1}. ${element}ms`}</span>
                                </div>

                            ))}



                    </div>
                </div>
                <div className='row justify-content-center' style={{ marginTop: '20px' }}>
                    <div> <h4>Comments</h4></div>
                </div>
                <div className='row justify-content-center'>

                    <div className='col-md-7'>
                        {this.state.comments[0] === undefined ?
                            <h6 style={{ textAlign: "center" }}>There are no comments yet! Submit your comment below if you have one!</h6>
                            :
                            this.state.comments.map((element, index) => {
                                return (
                                    <div style={{border:'1px lightgrey solid', borderRadius:'7px', backgroundColor: "#f1f1f1", marginBottom: "10px"}}>
                                        <div className='row' style={{ borderBottom: '1px solid grey', paddingTop: "5px"}}>
                                            <div style={{paddingLeft:'10px'}}> <h6> {`Comment ${index + 1}`}</h6></div>
                                         
                                        </div>
                                        <div className='row' style = {{paddingLeft:"5px", fontWeight: "bold"}}>
                                            {element.text}
                                        </div>
                                        <div className='row'style={{paddingLeft:"5px", fontStyle: "italic"}}>
                                            Written by: {element.author === undefined ? 'anonymous' : element.author}
                                        </div>
                                    </div>

                                )
                            })}
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Username:
                            <br />
                            <input placeholder='username' type="text" name="user" style={{ width: '300px' }} onChange={this.handleChange} required />
                        </label>
                        <br />
                        <label>
                            Comment:
                        </label><br />
                        <textarea name='comment' placeholder={`Enter your comment here!`} style={{ height: '100px', width: '300px' }} onChange={this.handleChange} required> </textarea>
                        <br></br>
                        <input className='btn btn-success' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        );
    };
};
export default QuestionComment;