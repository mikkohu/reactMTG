import React, {Component} from "react";
import PropTypes from 'prop-types';

const CardTable = ({cards, onSortClick}) =>(
            <table>
                <thead>
                <tr>
                    <th><a href='#' onClick={(e) => onSortClick('name')}>Name</a></th>
                    <th><a href='#' onClick={(e) => onSortClick('type')}>Type</a></th>
                    <th><a href='#' onClick={(e) => onSortClick('cmc')}>Mana Cost</a></th>
                </tr>
                </thead>
                <tbody>
                {cards.map((card, index) => (
                    <tr key={index}>
                        <td className="td-wide td-left-bordered">{card.name}</td>
                        <td className="td-medium td-bordered">{card.type}</td>
                        <td className='td-narrow td-bordered'>{card.manaCost}</td>
                    </tr>
                    ))};
                </tbody>
            </table>
        );

CardTable.propTypes = {
    cards: PropTypes.array.isRequired,
    onSortClick: PropTypes.func.isRequired
}


export default CardTable;