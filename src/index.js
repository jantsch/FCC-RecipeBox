import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store


ReactDOM.render(  
		<Provider store={store}> 
			<App />  
		</Provider>, 
		document.getElementById('root'));

