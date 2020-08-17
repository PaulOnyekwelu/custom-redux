import { ADDBUG, REMOVEBUG, RESOLVEBUG } from "./constant.js";

const INITIAL_STATE = [];
let uuid = 0;

const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ADDBUG: 
            return [ ...state, { id: ++uuid, description: action.description, resolved: false } ]
        case REMOVEBUG:
            return state.filter(bug => bug.id !== action.id )
        case RESOLVEBUG:
            return state.map(bug => bug.id === action.id ? {...bug, resolved: !bug.resolved} : bug)
        default:
            return state
    }
}

export default reducer;
