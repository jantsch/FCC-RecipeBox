import C from './constants'
import { v4 } from 'uuid'

export const addRecipe = (name, ingredients) =>
   ({
        type: C.ADD_RECIPE,
        id: v4(),
        name,
        ingredients,
        timestamp: new Date().toString()
    })

export const removeRecipe = id =>
    ({
        type: C.REMOVE_RECIPE,
        id
    })

export const editRecipe = (id,name, ingredients) =>
    ({
        type: C.EDIT_RECIPE,
        id,
        name,
        ingredients
    })


export const showModalEdit = (id,name,ingredients) =>
    ({
         type: C.SHOW_MODAL,
         modalType: C.EDIT_RECIPE,
         modalProps: 
         { 
            id: id,
            name: name,
            ingredients: ingredients
         }
    })

export const showModalAdd = () =>
    ({
         type: C.SHOW_MODAL,
         modalType: C.ADD_RECIPE         
    })

export const hideModal = () =>
    ({
         type: C.HIDE_MODAL       
    })

