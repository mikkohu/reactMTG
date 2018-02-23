import React, {Component} from "react";

class CardRow extends Component {
    parseManaCost(manaCost) {

    }
    render() {
        return 	(
            <tr>
                <td class="td-wide">{this.props.name}</td>
                <td class="td-medium">{this.props.type}</td>
                <td class='td-narrow'>{this.props.manaCost}</td>
            </tr>
        );
    }
}

export class CardTable extends Component {

    constructor(props) {
        super(props);
        this.state = {sort: 'name'};
    }

    changeSortValue(value, e){
        this.props.onChangeSort(value);
    }

    render() {
        const rows = [];

        let maxResults = 500;
        let i = 0;

        this.props.cards.forEach((card) => {
            if (i <= maxResults) {
                if (card.name.indexOf(this.props.nameFilter) < 0) {
                    return;
                }

                for (let ic = 0; ic < this.props.colorFilter.length; ic++) {
                    let color = this.props.colorFilter[ic];
                    if(typeof card.colors == 'undefined' || card.colors.indexOf(color) < 0) {
                        return;
                    }
                }

                rows.push(card);
                i++;
            }
        });
        return (
            <table>
                <thead>
                <tr>
                    <th><a href='#' onClick={(e) => this.changeSortValue('name', e)}>Name</a></th>
                    <th><a href='#' onClick={(e) => this.changeSortValue('type', e)}>Type</a></th>
                    <th><a href='#' onClick={(e) => this.changeSortValue('cmc', e)}>Mana Cost</a></th>
                </tr>
                </thead>
                <tbody>
                {rows.map((card, index) => (
                    <tr>
                        <td className="td-wide td-left-bordered">{card.name}</td>
                        <td className="td-medium td-bordered">{card.type}</td>
                        <td className='td-narrow td-bordered'>{card.manaCost}</td>
                    </tr>
                    ))};
                </tbody>
            </table>
        );
    }
}