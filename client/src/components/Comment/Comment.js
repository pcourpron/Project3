import React from 'react';
import axios from 'axios';

class QuestionComment extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        comments: [],
        run_Time: []
    }


    componentDidMount = () => {
        axios.get(`/getComments/${this.props.selectedQuestion._id}`).then((response) => {
            let newTime = response.data.runTime.sort((a, b) => a-b);
            this.setState({ comments: response.data.comments })
            this.setState({ run_Time: newTime})
    }
    )}


    render() {
   
        return (
            <div className='conatainer' style = {{marginTop:'100px'}}>
                <div className='row justify-content-center'>
                    <div className='col-md-6 d-flex justify-content-center'>
                       <div style={{width:'100%'}} className='d-flex justify-content-center'><h3 >{this.props.selectedQuestion.category}</h3></div>
                        
                    </div>
                </div>
                <div className='row justify-content-center'>
                

                <div className='col-md-8'>
                <ul>

                { this.state.runTime === [] ? null : this.state.run_Time.map((element,index) => (
                    <li>
                       <span style={this.props.runTime === element? {fontWeight:'bold'}:null}>{`${index + 1}. ${ element}ms`}</span> 
                    </li>
                ))}

                </ul>
                </div>
                </div>
                <div className='row'>
                <div className='col-md-4'>
                {this.state.comments.map((element,index) => {
                    return (
                       
                            <div class="card">
                                <div class="card-header" style={{color:'white'}}>
                                    {`Comment ${index+1}`}
                                </div>
                                <div class="card-body">
                                    <p class="card-text">{element}</p>
                                </div>
                            </div>

                        )
                })}
                </div>
                </div>
            </div>
        );
    };
};
export default QuestionComment;