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

	componentDidMount() {
		BooksAPI.getAll().then(bookData => this.setState( { books:bookData } ))
	}

	updateQuery = (query) => {
		this.setState({ query: query }, this.getResults)
	};

	getResults = () => {
		if (this.state.query === '' || this.state.query === 'undefined') {
			return this.setState( {results: [] } );
		}
		BooksAPI.search(this.state.query.trim())
			.then(response => {
				if (response.error) {
				return this.setState( { result: [] } );
			} else {
				return this.setState ( { results: response}, console.log(this.state.results) )
				}
			})
	};

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
