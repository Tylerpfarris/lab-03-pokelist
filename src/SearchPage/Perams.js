import React, { Component } from 'react'

export default class Perams extends Component {
    render() {
        return (
            <div className = "perams">
                <p>Sort By: </p>
                <select onChange = {this.props.handleSortBy}>
                    <option value = "pokemon">Pokemon</option>
                    <option value = "type_1">Type</option>
                    <option value = "weight">Weight</option>
                    <option value = "height">Height</option>
                    <option value = "attack">Attack</option>
                    <option value = "defense">Defense</option>
                </select>
                <p>Sort Order: </p>
                <select onChange = {this.props.handleSortOrder}>
                    <option value = "ascend">Ascending</option>
                    <option value = "descend">Descending</option>
                </select>
            </div>
        )
    }
}