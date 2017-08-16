import { connect } from 'react-redux'

import RecipesUI from './ui/RecipesUI'
import AddRecipe from './ui/AddRecipe'
import ModalRootUI from './ui/ModalRootUI'
import {addRecipe, removeRecipe, editRecipe, hideModal,showModalEdit,showModalAdd} from '../actions'

export const NewRecipe = connect(
    null,
    dispatch =>
        ({
            onNewRecipe() {
                dispatch(showModalAdd())
            }
        })
)(AddRecipe)


export const Recipes = connect(
    state =>
        ({
            recipes: state.recipes
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeRecipe(id))
            },
            onEdit(id,name, ingredients) {
                dispatch(showModalEdit(id,name,ingredients))
            }
        })
)(RecipesUI)

export const ModalRoot = connect(
    state => 
        ({
           modal: state.modal
        }),
    dispatch =>
        ({
            onHide() {
                dispatch(hideModal())
            },
            onEdit(id,name, ingredients) {                
                dispatch(editRecipe(id,name, ingredients))
            },
            onNew(name, ingredients) {                
                dispatch(addRecipe(name, ingredients))
            }

        })
)(ModalRootUI)

