import React from 'react'
// These are regular React components we will write soon
import EditRecipeModal from '../modals/EditRecipeModal'
import AddRecipeModal from '../modals/AddRecipeModal'

const MODAL_COMPONENTS = {
  'EDIT_RECIPE': EditRecipeModal,
  'ADD_RECIPE': AddRecipeModal,
}


const ModalRootUI = ({ modal, onHide, onEdit,onNew }) => {	
	
  const {modalProps, modalType} = modal
  //console.log(modalProps);
	
  if (!modalType) {
    return <span /> 
  }
 
  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} onHide={onHide} onEdit={onEdit} onNew={onNew} />
}


export default ModalRootUI
