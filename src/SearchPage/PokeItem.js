import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../stylesheets/PokeList.module.css';

export default class PokeItem extends Component {
    render() {
        return (
            <Link className={ style.pokeItemLink }to={`/search/${this.props.pokemon.pokemon}`} >
                <div className = {style.pokeItem}>
                    <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                    <p className = {style.pokeItemP}>{this.props.pokemon.pokemon}</p>
                    {/* <p>Pokemon: {this.props.pokemon}</p>
                    <p>Type: {this.props.type}</p>
                    <p>Weight: {this.props.weight}</p>
                    <p>Height: {this.props.height}</p>
                    <p>Attack: {this.props.attack}</p>
                    <p>Defense: {this.props.defense}</p> */}
                </div>
            </Link>
            
        )
    }
}