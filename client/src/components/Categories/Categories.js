import React from 'react';
import {Link} from 'react-router-dom'

const Categories = (props) => {


    return (
        <div className="row" style={{ height: '200px' }}>
            <div className='col-md-6'>
                <ul>
                    {props.categories.map((element) => {
                        return (<p style={{ width: '40%' }} onClick={() => { props.categoryClick(element) }}>{element}</p>)
                    })}
                </ul>
            </div>
            <div className='col-md-6'>
                {props.questions.filter((element) => (element.category === props.selectedCategory)).map(element=>{
                    
                    return(<Link to ='/Question'><div onClick = {()=>{props.selectQuestion(element)}}>{element.text}</div></Link>)
                })
                }

            </div>

        </div>
    )


}


export default Categories;