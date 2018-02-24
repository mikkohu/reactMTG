const filter = (state = {nameFilter: '', colorFilter: []}, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR_FILTER':
            let newColorFilter;
            if ( state.colorFilter.indexOf(action.color) < 0 ) {
                newColorFilter =[...state.colorFilter, action.color]
            } else {
                state.colorFilter.splice(
                    state.colorFilter.indexOf(action.color), 1);
                newColorFilter = state.colorFilter;
            }

            return Object.assign({}, state,
                {colorFilter: newColorFilter});
        case 'CHANGE_NAME_FILTER':
            return Object.assign({}, state,
                {nameFilter: action.text});
        default:
            return state;
    }
}

export default filter