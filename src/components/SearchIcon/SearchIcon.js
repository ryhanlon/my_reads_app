import React, { Component } from 'react';
import './SearchIcon.css';
import { Link } from 'react-router-dom';


class SearchIcon extends Component {

	render() {
		return (

			<div className="open-search">
				<Link to="/searchPage">Add a book</Link>
			</div>

		)
	}
}

export default SearchIcon;
