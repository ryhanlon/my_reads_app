import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

	componentDidMount () {
		BooksAPI.getAll()
		.then(resp => this.setState( {
				books: resp
			}))
		.then(console.log(this.state.books))

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
				return this.setState( { results: [] } );
			} else {
				response.forEach(respBook => {
					// console.log(respBook);
					// Comparing the response books to the state.books, looking for matches
					let findMatch = this.state.books.filter(B => B.id === respBook.id);
					// Accessing object in findMatch array at 0 index
					if(findMatch[0]) {
						// console.log('match');
						// If the book matches, update the shelf to match state.books menu
						respBook.shelf = findMatch[0] ? findMatch[0].shelf : null;
						// console.log(findMatch);

					}
				});
				return this.setState ( { results: response}, console.log(this.state.results) )
				}
			});
	};

	updateBook = (book, shelf) => {
	BooksAPI.update(book, shelf)
		.then(resp => {
			console.log(resp);
			book.shelf = shelf;
			this.setState( state => ({
				books: state.books.filter(b => b.id !== book.id).concat([book])
				}));
		});
	};

	render() {

		const { query, results } = this.state;

		return (
			<div className="search-books">

				<div className="search-books-bar" aria-label="search bar">

					<ReturnIcon/>

					<div className="search-books-input-wrapper">
						<label htmlFor="input field">
							<input
								type="text"
								id="input field"
								role="searchbox"
								placeholder="Search by title or author"
								value={query}
								onChange={(event) => this.updateQuery(event.target.value)}
							/>
						</label>
					</div>

				</div>

				< div className = "search-books-results" >

					{
                  	results.map((item, key) => <Books updateBook={this.updateBook}
								      book={item}
									  key={key}/>)
                  	}

				</div>
			</div>
		)
	}
}


SearchPage.propTypes = {
	updateQuery: PropTypes.func,
	updateBook: PropTypes.func,
	query: PropTypes.string,
	results: PropTypes.array
};


export default SearchPage;
