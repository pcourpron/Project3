
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardGroup, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import "./Category.css";

const Category = (props) => {
    return (
      <div class="container">
    <CardGroup>
        <Card >
          <CardImg width="40%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap"/>
          <CardImgOverlay class="card">
            <Button class="btn" color="primary"><h4>Interview</h4></Button>
          </CardImgOverlay>
        </Card>
        <Card >
          <CardImg width="40%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
          <CardImgOverlay class="card">
            <Link to='/Categories'>
            <Button class="btn" color="primary"><h4>Coding</h4></Button>
            </Link>
          </CardImgOverlay>
        </Card>
        </CardGroup>
      </div>
    );
  };

export default Category;

