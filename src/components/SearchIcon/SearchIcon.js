import React, { Component } from 'react';
import './SearchIcon.css';
import { Link } from 'react-router-dom';


class SearchIcon extends Component {

	render() {

		return <Link to="/searchPage">Add a book</Link>

	}
}

export default SearchIcon;
