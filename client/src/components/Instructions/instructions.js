import React from 'react';

const Instructions = (props)=>{
    return(
    <div className='col-md-4' style = {{border:'1px solid grey', padding: '0'}}>
    <div> <h4 className='text-center' style = {{width: '100%',borderBottom:'1px solid grey'}}>Instructions</h4></div>
    <p>{props.text}</p>
    </div>)

}

export default Instructions