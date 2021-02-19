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
        perPage: 25,
        currentPage: 1,
        totalPokemon: 0,
    }
    
    componentDidMount = async () => {
        console.log(this.state.search)
        await this.fetchPokemon();
        await this.fetchPokemonType();
    }

   
    fetchPokemon = async () => {
      
        await this.setState({ loading: true });
        
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&direction=${this.state.sortOrder}&pokemon=${this.state.search}&type_1=${this.state.radio}&page=${this.state.currentPage}&perPage=${this.state.perPage}`);

        await this.setState({
            loading: false,
            pokemon: data.body.results,
            totalPokemon: data.body.count,
        });
    }

    fetchPokemonType = async() => {
        const dataTypes = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types?`);
        let el = [];
            
        dataTypes.body.map(type => {
            if (!el.includes(type.type)) el.push(type.type);
        });

        await this.setState({
            dataTypes: el,
        })
   
        
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.fetchPokemon()
        await this.setState({ currentPage: 1})
        
    }

    handleRadioChange = async (e) => {
        await this.setState({ radio: e.target.value })
        await this.setState({ currentPage: 1 })
        await this.setState({ search: '' })
        await this.fetchPokemon();
    } 

    handleSearch = async (e) => {
        e.preventDefault();
        await this.setState({
            search: e.target.value
        }) ;
    }
  
    handleSortBy = async (e) => {
        await this.fetchPokemon()
        await this.setState({ sortBy: e.target.value })
    }
   
    handleSortOrder = async (e) => {
        await this.fetchPokemon()
        await this.setState({ sortOrder: e.target.value })
        console.log(this.state.sortOrder)
    
    }

    handlePerPage = (e) => {
       this.setState({ perPage: e.target.value })
       
    }
    
    handleNextClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        });
        await this.fetchPokemon()
    }

    handlePrevClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        });
        await this.fetchPokemon()
    }

    render() {
        console.log(this.state.perPage)
        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);
        return (
            <div className = "mainDiv">
                <section className ={style.sideBar}>
                    <Perams
                        handleSortBy={this.handleSortBy}
                        handleSortOrder={this.handleSortOrder} />
                    Pokemon Per Page: 
                    <select className={style.perPageSelect} onChange={this.handlePerPage}>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={75}>75</option>
                        <option value={100}>100</option>
                        <option value={150}>150</option>
                    </select>
                    <div className={style.prevNextButtonDiv}><label>Previous<button className={style.prevButton} onClick={this.handlePrevClick} disabled={this.state.currentPage === 1}></button></label>
                    <label>Next<button className={style.nextButton} onClick={this.handleNextClick} disabled={this.state.currentPage === lastPage}></button></label>
                        
                </div>
                    <SearchBar
                        handleSearch={this.handleSubmit}
                        onChange={this.handleSearch} />
                    <SearchCategory
                        handleRadioChange={this.handleRadioChange}
                        pokemon={this.state.dataTypes}
                        onChange={this.handleRadioChange}  
                    />
                    
                </section>
                
                
                
                {this.state.loading
                    ? <Spinner />
                    : <PokeList pokeArray={this.state.pokemon} />}
            </div>
            
        )
    }
}