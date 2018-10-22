import React from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import SearchPage from '../SearchPage/SearchPage.js';
import LibraryPage from '../LibraryPage/LibraryPage.js';


class BooksApp extends React.Component {

  render() {

    return (

      <div className="app">

      		<Route exact path="/" component={ LibraryPage } />

            <Route exact path="/searchPage" component={ SearchPage } />
      </div>
    );
  }

}

export default BooksApp
