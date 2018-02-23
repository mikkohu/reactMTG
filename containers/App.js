import React, {Component} from 'react';
import {SearchBar} from './SearchBar';
import {CardTable} from './CardTable';

const CARDSJSON = require('./carddata.json');
const maxLength = 25;
let cardArray = Object.values(CARDSJSON);

const getFilteredCards = (filter, type) => {
    switch (type) {
        case 'NAME_FILTER':
            return (filter) => {
                // let filteredCards =
            }

        case 'COLOR_FILTER' :
            return (filter) => {

            }
        default:
            return cards;
    }

}


export class FilterableCardList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nameFilter: '',
            colorFilter: [],
            sorting: 'name'
        }

        this.handleNameFilterChange =
            this.handleNameFilterChange.bind(this);
        this.handleColorFilterChange =
            this.handleColorFilterChange.bind(this);
        this.changeSort = this.changeSort.bind(this);
    }

    handleNameFilterChange(nameFilter) {
        this.setState({
            nameFilter: nameFilter
        });
    }

    handleColorFilterChange(colorFilter) {
        this.setState({
            colorFilter: colorFilter
    });
    }


    changeSort(key) {
        cardArray.sort((a,b) => {
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
        this.setState({
            sorting: key
        });
    }


	render() {
		return (
			<div>
                <SearchBar nameFilter = {this.state.nameFilter}
                           colorFilter = {this.state.colorFilter}
                           onNameFilterChange = {this.handleNameFilterChange}
                           onColorFilterChange = {this.handleColorFilterChange}/>
                <CardTable cards = {cardArray}
                           nameFilter = {this.state.nameFilter}
                           colorFilter = {this.state.colorFilter}
                           onChangeSort = {this.changeSort}/>
			</div>
		);
	}
}
