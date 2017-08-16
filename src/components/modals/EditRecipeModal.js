import React from 'react'
import {Modal,Button,FormGroup,ControlLabel,FormControl} from 'react-bootstrap'
import {Component } from 'react'


class EditRecipeModal extends Component 
{
  constructor(props) {
      super(props);
      this.state = {
        id: this.props.id,
        name: this.props.name,
        ingredients: this.props.ingredients,
        onHide: this.props.onHide,
        onEdit:this.props.onEdit
      }
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);     
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleIngredientsChange(event) {
    this.setState({ingredients: event.target.value});
  }
  handleSubmit(event) {   
    this.state.onEdit(this.state.id, this.state.name, this.state.ingredients)
    this.state.onHide()
  }
  render() {
    return (
      <Modal.Dialog className="greyBackground">
        <form>
          <Modal.Header>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormGroup controlId="formControlsText">
              <ControlLabel>Name</ControlLabel>
              <FormControl  defaultValue= {this.state.name}  onChange={this.handleNameChange}/>            
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Ingredient</ControlLabel>
              <FormControl  componentClass="textarea" defaultValue= {this.state.ingredients} onChange={this.handleIngredientsChange}/>
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.state.onHide}>Close</Button>
            <Button bsStyle="primary" onClick={this.handleSubmit}>Save changes</Button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
    )
  }
}

export default EditRecipeModal