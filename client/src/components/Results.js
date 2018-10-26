import React from 'react';

const Results = (props) => {

    return (
        <div className='row justify-content-center' >
            <div className='col'>
                <div className='row justify-content-center'>
                    <h2>Results</h2>
                </div>
                <div className='row justify-content-center'>
                    <div className='container'>
                        {props.results.map(element => {
                            return (
                                <div className='row align-items-around shadow'style = {{border:'1px solid lightgrey',marginTop:'20px'}}>
                                    <div className='col-md-9'>
                                        <h3 style={{ width: '100%' }}>{element.headline.main}</h3>
                                        <p>{element.snippet}</p>
                                    </div>
                                    <div className='col-md-3 d-flex justify-content-center align-items-center'>
                                        <button onClick={()=>{props.save({
                                        title: element.headline.main,
                                        date: element.pub_date,
                                        url : element.web_url,
                                       summary: element.snippet
                                        })}} 
                                        className='btn btn-primary'> Save!</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Results