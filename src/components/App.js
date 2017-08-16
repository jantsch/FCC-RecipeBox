import {Recipes,NewRecipe,ModalRoot} from './containers'
import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import '../App.css'

const App = () =>
	<div>
		<div className="App-header text-center">
			<h1> FCC - Recipe Box</h1>
		</div>
	    <Jumbotron>		   
		    <Recipes />	
			<NewRecipe />		 	
		 	<ModalRoot />
	    </Jumbotron>
    </div>

export default App