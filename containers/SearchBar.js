import React, {Component} from "react";

class ColorCheckbox extends Component {
    render() {
        return (
            <input type='checkbox' onChange={(e) => this.props.onChange(this.props.color)}/>
        )
    }
}

export class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleNameFilterChange = this.handleNameFilterChange.bind(this);
        this.handleColorFilterChange = this.handleColorFilterChange.bind(this);
    }

    handleNameFilterChange(event) {
        this.props.onNameFilterChange(event.target.value);
    }

    handleColorFilterChange(color) {
        let colorFilter = this.props.colorFilter;

        if(colorFilter.indexOf(color) < 0) {
            colorFilter.push(color);
        } else if (colorFilter.indexOf(color) > -1) {
            colorFilter.splice(colorFilter.indexOf(color), 1)
        }
        this.props.onColorFilterChange(colorFilter);
    }

    render() {
        return (
            <form>
                <input type ="text" placeholder="Card name" value={this.props.nameFilter} onChange={this.handleNameFilterChange}>

                </input>
                <div>
                    <ColorCheckbox color={"White"}  onChange={this.handleColorFilterChange}/> White
                    <ColorCheckbox color={"Blue"} onChange={this.handleColorFilterChange}/> Blue
                    <ColorCheckbox color={"Black"} onChange={this.handleColorFilterChange}/> Black
                    <ColorCheckbox color={"Red"} onChange={this.handleColorFilterChange}/> Red
                    <ColorCheckbox color={"Green"} onChange={this.handleColorFilterChange}/> Green
                </div>
            </form>
        )
    }
}