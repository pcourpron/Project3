import React from 'react';
import { Link } from 'react-router-dom'
import "./Categories.css";

const Categories = (props) => {


    return (
        <div className = 'container-fluid'>
            <div className='container' >
                <div className="row">
                    <div className='col-md-6 shadow' id = "Categories" style={{ border: '1px solid white', borderRadius: '10px', padding: '5px' }}>
                        <div className='row justify-content-center' style={{ width: '100%' }}>
                            <h2 style={{ color: 'white', width: '90%', borderBottom: '1px solid white' }}>Categories</h2>
                        </div>
                        <div className='row justify-content-center' style={{ width: '100%' }}>
                            {props.categories.map((element) => {
                                return (
                                    <div className='row shadow justify-content-center'
                                        style={{ width: '100%', borderRadius: '5px' }}
                                        onClick={() => { props.categoryClick(element) }}>
                                        <span>{element}</span>

                                    </div>)
                            })}

                        </div>
                    </div>
                    <div className='col-md-6' id = "questions" style={{ border: '1px solid white', borderRadius: '10px', padding: '5px' }}>
                        <div className='row justify-content-center' style={{ width: '100%' }}>
                            <h2 style={{ color: 'white', borderBottom: '1px solid white', width: '90%', textAlign: "center" }}>Questions</h2>
                        </div>
                        {console.log(props)}
                        {props.selectedCategory === '' ? <div className='d-flex justify-content-center'><span>
                            <h2 style={{ color: 'white', borderBottom: '1px solid white', width: '90%', textAlign: "center" , fontSize: "15px"}}> Select A Category!</h2></span></div> :
                            props.questions.filter((element) => (element.category === props.selectedCategory)).map(element => {

                                return (
                                    <Link to='/Question' style={{ textDecoration: 'none' }}>
                                        <div className='row justify-content-center shadow' onClick={() => { props.selectQuestion(element) }}
                                            style={{ borderRadius: '5px' }}>
                                            <div style={{ color: 'white' }}>{element.text}</div>

                                        </div>
                                    </Link>)
                            })
                        }

                    </div>

                </div>
            </div>
        // </div>
    )


}


export default Categories;