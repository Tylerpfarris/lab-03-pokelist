import React, { Component } from 'react';
import request from 'superagent'


import SearchCategory from './SearchCategory';

import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Perams from './Perams.js';
import Spinner from './Spinner.js';
import style from '../stylesheets/Sidebar.module.css';



export default class SearchPage extends Component {

    state = {
        pokemon: [],
        sortBy: 'pokemon',
        search: '',
        sortOrder: 'asc',
        radio: '',
        loading: false,
        dataTypes: [],
    }
    
    componentDidMount = async () => {
        console.log(this.state.search)
        await this.fetchPokemon();
        await this.fetchPokemonType();
    }

   
    fetchPokemon = async () => {
      
        this.setState({ loading: true });
        
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&direction=${this.state.sortOrder}&pokemon=${this.state.search}&type_1=${this.state.radio}`);

        this.setState({
            loading: false,
            pokemon: data.body.results,
        });
    }

    fetchPokemonType = async() => {
        const dataTypes = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types?`);
        let el = [];
            
        dataTypes.body.map(type => {
            if (!el.includes(type.type)) el.push(type.type);
        });

        this.setState({
            dataTypes: el,
        })
   
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchPokemon()
        
    }
    handleRadioChange = async (e) => {
        await this.fetchPokemon();
        this.setState({ radio: e.target.value })
    } 

    handleSearch = async (e) => {
        e.preventDefault();
        await this.setState({
            search: e.target.value
        }) ;
    }
  
    handleSortBy = async (e) => {
        await this.fetchPokemon()
        this.setState({ sortBy: e.target.value })
    }
   
    handleSortOrder = async (e) => {
        await this.fetchPokemon()
        this.setState({ sortOrder: e.target.value })
        console.log(this.state.sortOrder)
    }
    
    render() {

        return (
            <div className = "mainDiv">
                <section className ={style.sideBar}>
                    <Perams
                        handleSortBy={this.handleSortBy}
                        handleSortOrder={this.handleSortOrder} />
                    <SearchBar
                        handleSearch={this.handleSubmit}
                        onChange={this.handleSearch} />
                    <SearchCategory
                        handleRadioChange={this.handleRadioChange}

                        pokemon={this.state.dataTypes}

                        onChange={this.handleRadioChange}  
                    />
                    
                </section>
                {this.state.loading ? <Spinner /> :
                    <PokeList pokeArray={this.state.pokemon} />}
            </div>
            
        )
    }
}