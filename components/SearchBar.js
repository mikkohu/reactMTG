import React, {Component} from "react";
import PropTypes from 'prop-types';

const SearchBar = ({nameFilter, colorFilter, onNameFilterChange, onColorFilterChange}) => (
    <form>
        <input type ="text" placeholder="Card name" value={nameFilter}
               onChange={(e) => onNameFilterChange(e.target.value)}>

        </input>
        <div>
            <input type='checkbox' onChange={() => onColorFilterChange('White')}/> White
            <input type='checkbox' onChange={() => onColorFilterChange('Blue')}/> Blue
            <input type='checkbox' onChange={() => onColorFilterChange('Black')}/> Black
            <input type='checkbox' onChange={() => onColorFilterChange('Red')}/> Red
            <input type='checkbox' onChange={() => onColorFilterChange('Green')}/> Green
        </div>
    </form>
)

SearchBar.propTypes = {
    nameFilter: PropTypes.string.isRequired,
    colorFilter: PropTypes.array.isRequired,
    onNameFilterChange: PropTypes.func.isRequired,
    onColorFilterChange: PropTypes.func.isRequired
}

export default SearchBar;