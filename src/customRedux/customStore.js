const createStore = (reducer) => {
    let state; //the state of the store. updated be the reducer function

    /**
     * this returns the current state of the store
     * @param   none
     * @return  object  the current state of the store
     */
    const getState = () => {
        return state;
    }
}

export default createStore();