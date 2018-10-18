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

	componentDidMount () {
		BooksAPI.getAll()
		.then(resp =>
			this.setState( {
				books: resp,
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
				return this.setState( { result: [] } );
			} else {
				response.forEach(b => {
					let find = this.state.books.filter(B => B.id === b.id);
					if(find[0]) {
						console.log('match');
						b.shelf = find[0] ? find[0].shelf : null;
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
                  	this.state.results.map((item, key) => <Books updateBook={this.updateBook}
								      book={item}
									  key={key}/>)
                  	}

				</div>
			</div>
		)
	}
}




export default SearchPage;
