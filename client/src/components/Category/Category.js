
import React from 'react';
import { Link } from 'react-router-dom'
import "./Category.css";

const Category = (props) => {
  return (
    <div className='container' style={{ marginTop: '90px' }}>
      <div className='row justify-content-center'>
        <div className='col-md-5' style={{border:'1px solid grey',padding:'10px', borderRadius:'5px'}}>
          <div className='row justify-content-center' style = {{width:'100%',borderBottom:'1px solid grey'}}>
            <h2 style={{textAlign:"center"}}>Interview Questions</h2>
          </div>
          <div className='row justify-content-center'>
          <p style={{textAlign:"center"}}> These questions come from technical interview questions testing you on your knowledge of Javascript.
          </p>
          <button className='btn btn-primary'> Interview Questions</button>
          </div>

        </div>
        <div className='col-md-1'></div>
        <div className='col-md-5 justify-content-center'  style={{border:'1px solid grey',padding:'10px',borderRadius:'5px'}}>
        <div className='row justify-content-center' style = {{width:'100%',borderBottom:'1px solid grey'}}>
            <h2 style={{textAlign:"center"}}>Coding Questions</h2>
          </div>
          <div className='row justify-content-center'>
          <p  style={{textAlign:"center"}}> These questions will test your coding skills with algorithms questions.
          </p>
          <Link to ='/Categories'><button className='btn btn-primary'> Coding Questions</button></Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Category;

