import C from '../constants'

export const recipe = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_RECIPE:
            return {
                id: action.id,
                name: action.name,
                ingredients: action.ingredients,
                timestamp: action.timestamp             
            }
        case C.EDIT_RECIPE:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    ingredients: action.ingredients
                }
        default :
            return state
    }
}

export const recipes = (state = [], action) => {
    switch (action.type) {
        case C.ADD_RECIPE :
            return [
                ...state,
                recipe({}, action)
            ]
        case C.EDIT_RECIPE :
            return state.map(
                c => recipe(c, action)
            )
        case C.REMOVE_RECIPE :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}

const initialState = {
  modalType: null,
  modalProps: {}
}

export const modal = (state = initialState, action)  => {  
  switch (action.type) {
    case C.SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }
    case C.HIDE_MODAL:
      return initialState
    default:
      return state
  }
}

