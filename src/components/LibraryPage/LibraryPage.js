import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LibraryPage.css';
import Shelf from '../Shelf/Shelf.js';
import SearchIcon from '../SearchIcon/SearchIcon';
import * as BooksAPI from '../../BooksAPI';


class LibraryPage extends Component {
		constructor(props) {
		super(props);

		this.state = {
			books: []
		}
	}

	componentDidMount() {
		BooksAPI.getAll()
				.then(resp =>
					this.setState( {
						books: resp,
					}))
				.then(console.log(this.state.books))
		}

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

		const { books } = this.state;

		return (
			<div className="list-books">

				<header className="list-books-title">
					<h1>MyReads</h1>
				</header>

				<main className="list-books-content">

					<Shelf updateBook={this.updateBook}
						   shelfName="Currently Reading"
						   shelfData={books.filter(book => book.shelf === "currentlyReading")}
					/>

					<Shelf updateBook={this.updateBook}
						   shelfName="Want to Read"
						   shelfData={books.filter(book => book.shelf === "wantToRead")}
					/>

					<Shelf updateBook={this.updateBook}
						   shelfName="Read"
						   shelfData={books.filter(book => book.shelf === "read")}
					/>

				</main>

				<SearchIcon/>

          </div>
		)
	}
}


LibraryPage.propTypes = {
	updateBook: PropTypes.func,
	books: PropTypes.array
};


export default LibraryPage;
