import React, { Component } from 'react';
import pokedata from '../pokedata.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Perams from './Perams.js';

export default class SearchPage extends Component {

    state = {
        pokemon: pokedata,
        sortBy: 'pokemon',
        search: '',
        sortOrder: 'ascend'
    }
 
    handleSearch = (e) => {
        e.preventDefault();
        this.setState({
            search: e.target[0].value
        })

    }
  
    handleSortBy = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }
   
    handleSortOrder = (e) => {
        this.setState({
            sortOrder: e.target.value
        })
    }
    
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

        const searchedPokemon = this.state.pokemon.filter(pokemonObj => pokemonObj.pokemon.includes(this.state.search));
        console.log(this.state);

       
        return (
            <div className = "mainDiv">
                <section className = "sidebar">
                    <Perams handleSortBy = {this.handleSortBy} handleSortOrder = {this.handleSortOrder}/>
                    <SearchBar handleSearch = {this.handleSearch} sortBy = {this.state.sortBy}/>
                </section>
                <PokeList pokeArray = {searchedPokemon} />
            </div>
            
        )
    }
}