import {connect} from 'react-redux'
import {changeColorFilter, changeNameFilter} from "../actions";
import SearchBar from "../components/SearchBar";

const mapStateToProps = (state) => {
    return ({
        nameFilter: state.filter.nameFilter,
        colorFilter: state.filter.colorFilter
    })
}

const mapDispatchToProps = (dispatch) => ({
    onColorFilterChange: (color) => {
        dispatch(changeColorFilter(color))
    },
    onNameFilterChange: (value) => {
        dispatch(changeNameFilter(value))
    }
})

export const CardSearchBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)