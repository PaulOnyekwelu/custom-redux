import reducer from "./customRedux/reducer.js";
import createStore from './customRedux/customStore.js';
import { addbug, removebug, resolvebug } from "./customRedux/action.js";

const store = createStore(reducer);
console.log(store);
store.dispatch(addbug('hello first bug'))
console.log(store.getState())

