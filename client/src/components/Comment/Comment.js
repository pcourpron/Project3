import React from 'react';
import axios from 'axios';

class QuestionComment extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        comments: []
    }


    componentDidMount = () => {
        axios.get(`/getComments/${this.props.selectedQuestion._id}`).then((response) => {
            console.log(response)
            this.setState({ comments: response.data.comments })
        })
    }


    render() {
        return (
            <div>
                <div className='row justify-content-center'>
                    <div className='col-md-6 d-flex justify-content-center'>
                       <div style={{width:'100%'}} ><h3 >{this.props.selectedQuestion.category}</h3></div>
                        <div><h3>{this.props.selectedQuestion.text}</h3></div>
                    </div>
                </div>

                {this.state.comments.map((element,index) => {
                    console.log(element)
                    return (
                        <div className='row' style={{ width: '85%' }}>
                            <div class="card">
                                <div class="card-header" style={{color:'white'}}>
                                    {`Comment ${index+1}`}
                                </div>
                                <div class="card-body">
                                    <p class="card-text">{element}</p>
                                </div>
                            </div>

                        </div>)
                })}
            </div>
        );
    };
};
export default QuestionComment;