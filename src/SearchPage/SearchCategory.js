

import React, { Component } from 'react'

import style from '../stylesheets/Perams.module.css';



export default class SearchCategory extends Component {
    render() {

        const wut = this.props.pokemon;
           
        
        return (
            <div className={style.radioDiv}>
                    {this.props.pokemon.map(pokemonObj => 
                    <label className="radioLabels" key={pokemonObj}>
                        <input className="radioButtons" type="radio"
                        onChange={this.props.onChange}
                        value={pokemonObj}
                        name="typeChoice"
                        key={pokemonObj}
                        
                        />
                        {pokemonObj}
                    </label>)}
                        <label className="radioLabels" key={wut}><input className="radioButtons" type="radio" onChange={this.props.onChange} multiple={true} value={"normal" && "fire" && 'water' && "bug" && "grass"} key={wut} name="typeChoice"></input>All</label>
                    

            </div>
        )
    }
}