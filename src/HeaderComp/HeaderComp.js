import React, { Component } from 'react'
import NavComp from './NavComp';
import style from '../stylesheets/Header.module.css';

export default class HeaderComp extends Component {
    render() {
        return (
            <header className={style.header}>
               
                <NavComp className={style.navBar}/>
            </header>
        )
    }
}
