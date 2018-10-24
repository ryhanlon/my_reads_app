import React from 'react';
import './SearchIcon.css';
import { Link } from 'react-router-dom';


const SearchIcon = () => {
		return (

			<div className="open-search">
				<Link to="/searchPage">Add a book</Link>
			</div>

		)

};


export default SearchIcon;
