import React from 'react';
// import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import * as BooksAPI from './BooksAPI'
// import logo from './logo.svg';
import './App.css';
import SearchPage from '../SearchPage/SearchPage.js';
import LibraryPage from '../LibraryPage/LibraryPage.js';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (

            <SearchPage/>

        ) : (

            <LibraryPage/>

        )}
      </div>
    )
  }
}

export default BooksApp
