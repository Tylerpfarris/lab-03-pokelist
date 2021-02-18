import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner';
import style from '../stylesheets/DetailPage.module.css';

export default class DetailPage extends Component {
    state = {
        pokeData: {},
        
    }
    
    componentDidMount = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);
        
        console.log(data.body.results)
        this.setState({
            loading: false,
            pokeData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        });
        
    }
    
    render() {

        console.log(this.state.pokeData)
        return (
            < div className={style.detailDiv} > 
                
                {
                    this.state.loading
                        ?<Spinner />
                        :
                        <div className={style.innerDetailDiv}>

                            <img className={style.pokeImage }src={this.state.pokeData.url_image} alt={this.state.pokeData.pokemon} />
                            <p className={style.pokeName}>{this.state.pokeData.pokemon}</p>
                            <p className={style.p2}>Type: {this.state.pokeData.type_1}</p>
                            <p className={style.p6}>Weight: {this.state.pokeData.weight}</p>
                            <p className={style.p4}>Height: {this.state.pokeData.height}</p>
                            <p className={style.p5}>Attack: {this.state.pokeData.attack}</p>
                            <p className={style.p3}>Defense: {this.state.pokeData.defense}</p>
                        </div>
                    
                }
            </div>
           
            
        )
    }
}
