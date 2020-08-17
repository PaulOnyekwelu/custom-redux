import { ADDBUG, REMOVEBUG, RESOLVEBUG } from "./constant.js";

export const addbug = (description) => {
    return {
        type: ADDBUG,
        description: description
    }
}

export const removebug = id => {
    return {
        type: REMOVEBUG,
        id: id
    }
}
export const resolvebug = id =>{
    return {
        type: RESOLVEBUG,
        id: id
    }
}
