import React from 'react';
import {Component } from 'react'
import PropTypes from 'prop-types'; 
import {Panel,Button} from 'react-bootstrap'

import IngredientsUI from './IngredientsUI'
class Recipe extends Component {

    render() {
        const {name, ingredients,onRemove, onEdit} = this.props

        const header = (
                <h2 className="text-center"> {name} </h2>
        )      
      
        return (
            <Panel collapsible header={header}  >            
                <h3 className="text-center">Ingredients </h3>   
                <IngredientsUI  ingredients={ingredients}  /> 
                 <div className="text-center">
                    <Button bsStyle="danger" onClick={onRemove}> Remove </Button>
                    <Button bsStyle="info" onClick={onEdit}>Edit </Button>  
                  </div>             
            </Panel>
        )
    }

}

Recipe.propTypes = {
    name: PropTypes.string.isRequired,   
    ingredients: PropTypes.string.isRequired,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
}

Recipe.defaultProps = {
    ingredients: "",
    onRemove: f=>f,
    onEdit: f=>f
}

export default Recipe


