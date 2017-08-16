import React from 'react';
import Recipe from './Recipe'
import PropTypes from 'prop-types'


const RecipesUI = ({ recipes=[], onEdit=f=>f, onRemove=f=>f }) =>
    <div>
        {(recipes.length === 0) ?
            <p>No Available Recipes.</p> :
            recipes.map(recipe =>               
                <Recipe key={recipe.id}
                       name={recipe.name} ingredients={recipe.ingredients}
                       onEdit={() => onEdit(recipe.id,recipe.name, recipe.ingredients)}
                       onRemove={() => onRemove(recipe.id)} />                
            )
        }
    </div>

RecipesUI.propTypes = {
    recipes: PropTypes.array,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func
}

export default RecipesUI