import React from 'react';
import PropTypes from 'prop-types'; 
import {Button} from 'react-bootstrap'

const AddRecipe = ({onNewRecipe=f=>f}) => { 

    return (       
            <p><Button bsStyle="primary" className="Add-button" onClick={onNewRecipe}>Add Recipe</Button></p>
    )

}

AddRecipe.propTypes = {
    onNewRecipe: PropTypes.func
}

export default AddRecipe