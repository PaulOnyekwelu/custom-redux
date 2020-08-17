import reducer from "./customRedux/reducer.js";
import createStore from './customRedux/customStore.js';
import { addbug, removebug, resolvebug } from "./customRedux/action.js";


const store = createStore(reducer);
store.subscribe(() => {
    const elem = document.querySelector('#root');
    elem.innerHTML += JSON.stringify(store.getState()) + '<br>';
});
store.dispatch(addbug('hello first bug'))
store.dispatch(resolvebug(1));
store.dispatch(addbug('second bug'))
