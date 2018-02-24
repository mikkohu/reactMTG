import fetch from 'cross-fetch'

const CARDS = require('../carddata.json');

export const changeColorFilter = (color) => {
    return ({
    type: 'CHANGE_COLOR_FILTER',
    // cards: Object.values(CARDS),
    color});
}

export const changeNameFilter = (text) => {
    return ({
        type: 'CHANGE_NAME_FILTER',
        // cards: Object.values(CARDS),
        text
    })
}

export const setSortKey = (key) =>  {
    return({
        type: 'SET_SORT_KEY',
        // cards: Object.values(CARDS),
        key
    })
}
const requestCards = () => ({
    type: 'REQUEST_CARDS'
    })

const receiveCards = (json) => ({
    type: 'RECEIVE_CARDS',
    // cards: Object.values(json)
})

export const fetchCards  = () => {
    return (async (dispatch) => {
        dispatch(requestCards())
        let response = await fetch('https://api.magicthegathering.io/v1/cards');
        return dispatch(receiveCards(response.json))
    })
}
