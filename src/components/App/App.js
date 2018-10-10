import React from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import * as BooksAPI from './BooksAPI'
// import logo from './logo.svg';
import './App.css';
import SearchPage from '../SearchPage/SearchPage.js';
import LibraryPage from '../LibraryPage/LibraryPage.js';


class BooksApp extends React.Component {

  render() {

    return (

      <div className="app">

      		<Route exact path="/searchPage" component={ SearchPage } />

            <Route exact path="/" component={ LibraryPage } />

      </div>
    );
  }

}

export default BooksApp
