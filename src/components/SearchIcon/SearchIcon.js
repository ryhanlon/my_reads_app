import React, { Component } from 'react';
import './SearchIcon.css';


class SearchIcon extends Component {

	render() {

		return <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>

	}
}

export default SearchIcon;
