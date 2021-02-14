
import React, { Component} from 'react';
import PokeItem from './PokeItem.js';
import style from '../stylesheets/PokeList.module.css';
export default class PokeList extends Component {
    render() {
        return (
            <section className={style.pokeList}>
                {this.props.pokeArray.map(pokemonObj =>
                    <PokeItem pokemon = {pokemonObj.pokemon} type = {pokemonObj.type_1} weight = {pokemonObj.weight} height = {pokemonObj.height} key = {pokemonObj._id} pokeImage = {pokemonObj.url_image} attack = {pokemonObj.attack} defense = {pokemonObj.defense} />
                )}
            </section>
        )
    }
} 