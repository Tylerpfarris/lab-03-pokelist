import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage.js';
import HomePage from './HomePage/HomePage.js';
import HeaderComp from './HeaderComp/HeaderComp.js';
import DetailPage from './SearchPage/DetailPage.js';
import './App.css';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <HeaderComp />
                    <Switch>
                        <Route 
                            path="/search" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/search/:pokemonName" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}