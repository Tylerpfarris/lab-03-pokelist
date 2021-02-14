import React, { Component } from 'react';
import style from '../stylesheets/Perams.module.css';

export default class SearchBar extends Component {
    render() {
        return (
          <form className={style.form} onSubmit = {this.props.handleSearch}>
              <input placeholder = "search" name = "searchbar"/>

              
              <button value = "Submit">Search?</button>
            
          </form>
        )
    }
}