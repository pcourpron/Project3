import React from 'react';
import {Link} from 'react-router-dom'

const Categories = (props) => {


    return (
        <div>
            
        <div className="row" style={{ height: '200px' }}>
            <div className='col-md-6'>
            <div className= 'row justify-content-center' style={{width:'100%'}}>
            <h2 style={{color:'black'}}>Categories</h2>
            </div>
            <div className= 'row justify-content-center' style={{width:'100%'}}>
                    {props.categories.map((element) => {
                        return (<button className='btn btn-primary' style={{ width: '100%' }} onClick={() => { props.categoryClick(element) }}>{element}</button>)
                    })}
        
                </div>
            </div>
            <div className='col-md-6'>
                <div className= 'row justify-content-center' style={{width:'100%'}}>
                    <h2 style={{color:'black'}}>Questions</h2>
                </div>
                {console.log(props)}
                { props.selectedCategory=== '' ? <div className='d-flex justify-content-center'><span>Select A Category!</span></div> :
                    props.questions.filter((element) => (element.category === props.selectedCategory)).map(element=>{
                    
                    return(<Link to ='/Question'><div onClick = {()=>{props.selectQuestion(element)}}>{element.text}</div></Link>)
                })
                }

            </div>

        </div>
        </div>
        )


}


export default Categories;