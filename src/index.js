import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';

const initialState = [
	'RandomString1',
	'RandomString2'
]

function createSomeList(state = initialState, action){
	if(action.type === 'ADD_STRING'){
		return [
		...state,
		action.payload
		];
	}
	return state;
}

const store = createStore(createSomeList);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));


// import {createStore} from 'redux';

// function createSomeList(state = [], action){
// 	if(action.type === 'ADD_STRING'){
// 		return [
// 		...state,
// 		action.payload
// 		];
// 	}
// 	return state;
// }

// const store = createStore(createSomeList);

// const addString = document.querySelector('.addStr');
// const strInput = document.querySelector('.strInput');
// const list = document.querySelector('.list');

// store.subscribe(() => {
// 	list.innerHTML = '';
// 	strInput.value = '';
// 	store.getState().forEach( string => {
// 		const li = document.createElement('li');
// 		li.textContent = string;
// 		list.appendChild(li);
// 	} )
// })

// addString.addEventListener( 'click', () => {
// 	const strInputVal = strInput.value;
// 	store.dispatch({type: 'ADD_STRING', payload: strInputVal})
// } )


