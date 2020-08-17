
export const showBugs = (bug, parentElem, action, dispatch) => {
    const elem = document.createElement('div');
    const title = document.createElement('h3');
    const right = document.createElement('div');
    const resolved = document.createElement('button');
    const del = document.createElement('button');

    if(bug.resolved){
        resolved.textContent = 'resolved';
        resolved.classList.add('resolved');
        resolved.classList.remove('unresolved');
    }else{
        resolved.textContent = 'unresolved';
        resolved.classList.add('unresolved');
        resolved.classList.remove('resolved');
    }
    del.textContent = 'X';
    del.classList.add('del');
    elem.classList = 'bug';
    title.textContent = bug.description;
    right.appendChild(resolved);
    right.appendChild(del);
    elem.appendChild(title);
    elem.appendChild(right);
    parentElem.appendChild(elem);

    del.addEventListener('click', () => {
        dispatch(action.removebug(bug.id))
    });

    resolved.addEventListener('click', (e) => {
        dispatch(action.resolvebug(bug.id));
    })
}
