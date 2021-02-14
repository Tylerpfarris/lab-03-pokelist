import React, { Component } from 'react'
import style from '../stylesheets/Home.module.css';

export default class HomePage extends Component {
    render() {
        return (
        <div div className={style.container}>
            <div className={style.pokeDiv} >
                <span className={style.pSpan}>P</span>
                <span className={style.oSpan}>O</span>
                <span className={style.kSpan}>K</span>
                <span className={style.eSpan}>E</span>
            
                <span className={style.mSpan}>M</span>
                <span className={style.oSpan}>O</span>
                <span className={style.nSpan}>N</span>
            </div>
        </div>
        )
    }
}
