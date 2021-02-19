import React, { Component } from 'react'
import style from '../stylesheets/Perams.module.css';


export default class Perams extends Component {
    render() {
        return (
            <div className = {style.peramsDiv}>
                <div><lable className={style.sortByLabel}>Sort By: <select onChange = {this.props.handleSortBy}>
                    <option value = "pokemon">Pokemon</option>
                    <option value = "weight">Weight</option>
                    <option value = "height">Height</option>
                    <option value = "attack">Attack</option>
                    <option value = "defense">Defense</option>
                </select></lable></div>
                <div><lable className={style.sortOrderLabel}>Sort Order: <select onChange = {this.props.handleSortOrder}>
                    <option value = "asc">Ascending</option>
                    <option value = "desc">Descending</option>
                </select></lable></div>
                
                
                
            </div>
        )
    }
}