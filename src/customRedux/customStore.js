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

    /**
     * this dispatches action to reducer function
     * @param   object  action  the action to dispatch
     * @return  void
     */
    const dispatch = (action) => {
        state = reducer(state, action)
    }

    return { getState, dispatch }


}

export default createStore;