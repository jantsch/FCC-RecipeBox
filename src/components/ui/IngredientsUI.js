import React from 'react';
import PropTypes from 'prop-types'; 
import {ListGroup,ListGroupItem} from 'react-bootstrap'


const IngredientsUI = ({ ingredients=[]}) =>      
  <ListGroup>
     {
      ingredients.split(',').map( (ing,index) => <ListGroupItem key={index}>{ing}</ListGroupItem>)  
     }
  </ListGroup>


IngredientsUI.propTypes = {  
    ingredients: PropTypes.string.isRequired   
}

IngredientsUI.defaultProps = {
    ingredients: ""  
}

export default IngredientsUI

