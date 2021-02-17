

import React, { Component } from 'react'

import style from '../stylesheets/Perams.module.css';



export default class SearchCategory extends Component {
    render() {
    
        const wut = this.props.pokemon;
       
        return (
            <div className={style.radioDiv}>
                    {this.props.pokemon.map(pokemonObj => 
                    <label className={style.radioLabels} key={pokemonObj}>
                        <input className={style.radioButtons} type="radio"
                        onChange={this.props.onChange}
                        value={pokemonObj}
                        name="typeChoice"
                        key={pokemonObj}
                        checked={this.props.handleRadioChange === this.props.pokemon}
                        />
                        {pokemonObj}
                        </label>)}
                        
                <label className="radioLabels" key={wut}><input className={style.radioButtons} type="radio" onChange={this.props.onChange} value={''} key={wut} name="typeChoice" checked={''}    ></input>All</label>
                    

            </div>
        )
    }
}
