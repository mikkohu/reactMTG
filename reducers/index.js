import {combineReducers} from 'redux'
import filter from './filter'
import cardtable from './cardtable'

const cards = (state = {isFetching: false, cards: []}, action) => {
    switch (action.type) {
        case 'REQUEST_CARDS':
            return Object.assign({}, state,
                {isFetching: true})
        case 'RECEIVE_CARDS':
            return Object.assign({}, state,
                {isFetching: false,
                 cards: Object.values(action.cards[0])})
        default:
            return state
    }
}
const magicApp = combineReducers({
    cards,
    filter,
    cardtable,
});

export default magicApp;