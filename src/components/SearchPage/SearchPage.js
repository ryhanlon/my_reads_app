import React, { Component } from 'react';
import './SearchPage.css';
import Input from '../Input/Input.js';
import ReturnIcon from '../ReturnIcon/ReturnIcon';


class SearchPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: [],
			results: [],
			query: ""
		}
	}

	render() {
		return (
			<div className="search-books">

				<div className="search-books-bar">

					<ReturnIcon/>
					<Input/>

				</div>

				< div
				className = "search-books-results" >
					< ol className = "books-grid" > </ol>
				</div>
			</div>

		)
	}
}




export default SearchPage;
