import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchCards, setSortKey} from "../actions";
import CardTable from "../components/CardTable";

const filterCards = (state) => {
    const filteredCards = [];
    const {nameFilter, colorFilter, key} = state.cardtable;
    const cards = state.cards.cards
    let maxResults = 500;
    let i = 0;

    if(cards === undefined) {
        return;
    }


    cards.forEach((card) => {
        if (i <= maxResults) {
            if (card.name.indexOf(nameFilter) < 0) {
                return;
            }

            for (let ic = 0; ic < colorFilter.length; ic++) {
                let color = colorFilter[ic];
                if(typeof card.colors === 'undefined'
                    || card.colors.indexOf(color) < 0) {
                    return;
                }
            }

            filteredCards.push(card);
            i++;
        }
    });
    return changeSort(filteredCards, key);
};

 const changeSort = (cards, key) => {
    return cards.sort((a,b) => {
            if(a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
                let x = a[key];
                let y = b[key];
                return x>y ? 1 : x<y ? -1 : 0;
            }
            if(a.hasOwnProperty(key) && !b.hasOwnProperty(key)) {
                return 1;
            }
            if(!a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
                return -1;
            }
            if(!a.hasOwnProperty(key) && !b.hasOwnProperty(key)) {
                return 0;
            }
        }
    );
};



const mapStateToProps = (state) => {
    return({
        cards: filterCards(state)
    })
}

const mapDispatchToProps = (dispatch) => ({
    onSortClick: (key) => {
        dispatch(setSortKey(key));
    }
})

export const FilteredCardTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardTable)
