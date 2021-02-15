import React, { Component } from 'react';
import SearchCategory from './SearchCategory';
import pokedata from '../pokedata.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Perams from './Perams.js';
import {uniqueType} from './UniqueArrayUtil';
import style from '../stylesheets/Sidebar.module.css';


export default class SearchPage extends Component {

    state = {
        pokemon: pokedata,
        sortBy: 'pokemon',
        search: '',
        sortOrder: 'ascend',
        radio: ''
    }
    
    handleRadioChange = (e) => {this.setState({radio: e.target.value})} 

    handleSearch = (e) => {e.preventDefault(); this.setState({search: e.target[0].value})}
  
    handleSortBy = (e) => {this.setState({sortBy: e.target.value})}
   
    handleSortOrder = (e) => {this.setState({sortOrder: e.target.value})}
    
    render() {
        const sortByType = typeof this.state.pokemon[0][this.state.sortBy];
       
        if(this.state.sortOrder === 'ascend') {
            if (sortByType === 'string') 
            this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
            if(sortByType === 'number') 
            this.state.pokemon.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy]);
        }
        else {
            if (sortByType === 'string') 
            this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]));
            if(sortByType === 'number') 
            this.state.pokemon.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy]);
        }
        
       
        const filteredByType = this.state.pokemon.filter(pokedata => pokedata.type_1 === (this.state.radio));
        
        const searchedPokemon = filteredByType.filter(pokemonObj => pokemonObj.pokemon.includes(this.state.search));
        
       
             
        return (
            <div className = "mainDiv">
                <section className ={style.sideBar}>
                    <Perams handleSortBy = {this.handleSortBy} handleSortOrder = {this.handleSortOrder}/>
                    <SearchBar handleSearch = {this.handleSearch} sortBy = {this.state.sortBy}/>
                    <SearchCategory handleRadioChange = {this.handleRadioChange} pokemon = {uniqueType}
                    onChange={this.handleRadioChange}
                    />
                    
                    </section>
                <PokeList pokeArray = {filteredByType && searchedPokemon} />
            </div>
            
        )
    }
}