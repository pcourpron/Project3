import React from 'react';
import { Link } from 'react-router-dom'

const Categories = (props) => {


    return (
        <div className ='container' style={{marginTop:'100px'}}>
            <div className="row" style={{minHeight:'300px'}}>
                <div className='col-md-6 shadow' style={{border: '1px solid grey',borderRadius: '10px', padding: '5px'}}>
                    <div className='row'>
                    <div className='row justify-content-center' style={{ width: '100%' }}>
                        <h2 style={{ color: 'black', width:'80%', borderBottom:'1px solid grey', textAlign:"center" }}>Categories</h2>
                    </div>
                    <div className='coljustify-content-center' style={{ width: '100%' }}>
                        {props.categories.map((element) => {
                            return (
                            <div className='row shadow justify-content-center' 
                            style={{ width: '100%', borderRadius: '5px', backgroundColor:'lightblue', marginTop:'10px' }} 
                            onClick={() => { props.categoryClick(element) }}>
                            <span>{element}</span>
                            
                            </div>)
                        })}

                    </div>
                    </div>
                </div>
                <div className='col-md-6' style={{border: '1px solid grey',borderRadius: '10px', padding: '5px'}}>
                    <div className='row justify-content-center' style={{ width: '100%' }}>
                        <h2 style={{ color: 'black',borderBottom:'1px solid grey', width:'90%', textAlign:"center" }}>Questions</h2>
                    </div>
                    {console.log(props)}
                    {props.selectedCategory === '' ? <div className='d-flex justify-content-center'><span>Select A Category!</span></div> :
                        props.questions.filter((element) => (element.category === props.selectedCategory)).map(element => {

                            return (
                            <Link to='/Question' style={{ textDecoration: 'none' }}>
                            <div className='row justify-content-center shadow' onClick={() => { props.selectQuestion(element) }}
                            style ={{borderRadius:'5px', backgroundColor:'green', marginTop:'10px'}}>
                               <div style={{color:'black'}}>{element.text}</div> 
                            
                            </div>
                            </Link>)
                        })
                    }

                </div>

            </div>
        </div>
    )


}


export default Categories;