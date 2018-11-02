import React from 'react';

const Instructions = (props)=>{
    return(
    <div className='col-md-4' style = {{border:'1px solid grey', padding: '0'}}>
    <div> <h4 className='text-center' style = {{width: '100%',borderBottom:'1px solid grey'}}>Instructions</h4></div>
    <p style ={{textAlign:"center"}}>{props.text}</p>

    
    <br/>
    <p style ={{textAlign:"center"}}>Write your code inside the given function</p>
    <hr/>
    <br/>
    <p style ={{textAlign:"center"}}><h5>Input: {JSON.stringify(props.tests[0].input)}</h5></p>
    <br/>
    <p style ={{textAlign:"center"}}><h5>Expected Output: {JSON.stringify(props.tests[0].expected)}</h5></p>
    <div>
        <h4 className='text-center' style = {{width: '100%',borderBottom:'1px solid grey'}}>Output:</h4>
       <p style ={{margin: '0 20px'}}> {props.output}</p>
    </div>
    </div>)

}

export default Instructions