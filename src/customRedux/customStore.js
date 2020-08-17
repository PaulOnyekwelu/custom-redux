const createStore = (reducer) => {
    let state; // the state of the store. updated be the reducer function
    let subs = []; // an array of subscriptions


    /**
     * subscribing to the changes in the state
     * @param   callback    function to execute on state change
     * @return  void
     */
    const subscribe = (callback) => {
        subs.push(callback);
    }


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
     * @param   action  the action to dispatch
     * @return  void
     */
    const dispatch = (action) => {
        state = reducer(state, action)
        for(let sub of subs){
            sub()
        }
    }

    return { getState, dispatch, subscribe }
    
}

export default createStore;