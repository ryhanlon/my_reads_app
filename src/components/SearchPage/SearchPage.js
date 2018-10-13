import React, { Component } from 'react';
import './SearchPage.css';
import * as BooksAPI from '../../BooksAPI';
import Books from "../Books/Books.js";
import ReturnIcon from '../ReturnIcon/ReturnIcon';


class SearchPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: [],
			results: [],
			query: ''
		}
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() }, this.getResults)
	}


	getResults = () => {
		BooksAPI.search(this.state.query).then(searchData => this.setState ( { results: searchData}, console.log(this.state.results) ))
	}

	render() {
		return (
			<div className="search-books">

				<div className="search-books-bar">

					<ReturnIcon/>

					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>

				</div>

				< div className = "search-books-results" >

					{
                  	this.state.results && this.state.results.map(resultsData => {
                  		return <Books book={resultsData} key={resultsData.id} />
					} )

                  	}

				</div>
			</div>

		)
	}
}




export default SearchPage;
