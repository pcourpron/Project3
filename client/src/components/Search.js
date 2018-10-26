import React from 'react';


const Search = (props) => {
    console.log(props)

    return (
        <div className='row justify-content-center' >
            <div className='col'>
                <div className='row justify-content-center'>
                    <h2>Search</h2>
                </div>
                <div className='row justify-content-center'>

                    <h3 style={{ width: '100%', textAlign: 'center' }}>Topic</h3>

                    <input onChange={(e)=>{props.query(e)}} ></input>

                    <h3  style={{ width: '100%', textAlign: 'center' }}>Start Year</h3>

                    <input onChange={(e) => props.startYear(e)}></input>


                    <h3  style={{ width: '100%', textAlign: 'center' }}>End Year</h3>
                    <input onChange={(e) =>props.endYear(e)}></input>

         

                </div>
                <div className='row justify-content-center'>
            
                    <button onClick={()=>{props.getArticles(props.qquery,props.qstartYear,props.qendYear)}} className='btn btn-primary btn-lg' style = {{marginTop:'30px'}}> Search</button>
                </div>
            </div>
        </div>
    )
}
export default Search