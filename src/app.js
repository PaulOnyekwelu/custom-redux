import reducer from "./customRedux/reducer.js";
import createStore from './customRedux/customStore.js';
import * as action from "./customRedux/action.js";
import { showBugs } from "./libs/index.js";

// initializing/creating the store
const store = createStore(reducer);

// dom elements
const rootElem = document.querySelector('#root');
const addElem = document.querySelector('.add');
const inputElem = document.querySelector('#description');
const errorDesc = document.querySelector('.error-desc');


// subscribing to the store
store.subscribe(() => {
    const bugs = store.getState();
    rootElem.innerHTML = '';
    for(let bug of bugs){
        showBugs(bug, rootElem, action, store.dispatch);
    }
});


// eventlistener for input 
inputElem.addEventListener('input', (e) => {
    if(e.target.value){
        errorDesc.style.display = 'none';
    }
})


// eventlistener for click to add to store
addElem.addEventListener('click', () =>{
    const value = inputElem.value;
    if(value.trim()){
        errorDesc.style.display = 'none';
        store.dispatch(action.addbug(value));
    }else{
        errorDesc.style.display = 'block';
    }
});


// initial bug seeding
store.dispatch(action.addbug('hello first bug'))
store.dispatch(action.resolvebug(1));
store.dispatch(action.addbug('second bug'))
