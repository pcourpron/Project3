import React from 'react';

const Search = (props) => {
 

    return (
        <div className='row justify-content-center' >
            <div className='col'>
                <div className='row justify-content-center'>
                    <h2>Saved</h2>
                </div>
                <div className='container'>
                {props.saved.map(element=>{
                    return(
                        <div className='row shadow' style = {{border:'1px solid lightgrey',marginTop:'20px'}}>
                        <h3 style={{width:'100%'}}>{element.title}</h3>
                        <p>{element.date.slice(0,10)}</p>
                        <a href = {element.url}>{element.url}</a>
                        </div>
                    )
                })}

                </div>
                
            </div>
        </div>
    )
}
export default Search