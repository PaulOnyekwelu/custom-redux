import { ADDBUG, REMOVEBUG, RESOLVEBUG } from "./constant";

const INITIAL_STATE = [];
const uuid = 0;

const reducer = (state=INITIAL_STATE, action){
    switch(action.type){
        case ADDBUG: 
            return [ ...state, { id: ++uuid, description: action.description } ]
        case REMOVEBUG:
            return state.filter(bug => bug.id !== action.id )
        case RESOLVEBUG:
            return state.map(bug => bug.id === action.id ? {...bug, resolved: true} : bug)
        default:
            return state
    }
}

export default reducer;
