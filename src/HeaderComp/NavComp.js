import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import style from '../stylesheets/Nav.module.css';


export default withRouter(class NavComp extends Component {
    render() {
        return (
            <ul className={style.navBar}>
                <li>
                    <NavLink exact activeClassName="selected" className={style.linkItem} to="/">Home</NavLink>
                    {this.props.location.pathname !== '/search' 
                    && 
                    <NavLink exact activeClassName="selected" className={style.linkItem}to="/search">Search</NavLink>}
                </li>
            </ul>
        )
    }
})
