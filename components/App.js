import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CardSearchBar} from "../containers/CardSearchBar";
import {FilteredCardTable} from "../containers/FilteredCardTable";
import {fetchCards} from "../actions";
import PropTypes from 'prop-types';
const CARDSJSON = require('./carddata.json');
const cards = Object.values(CARDSJSON);


class FilterableCardList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchCards());
    }

	render() {
	    return (<div>
            <CardSearchBar/>
            <FilteredCardTable/>
        </div>)
	}
}

FilteredCardTable.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {isRequired: state.isRequired};
}

export default connect(mapStateToProps)(FilterableCardList)