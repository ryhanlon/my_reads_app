import React, { Component } from 'react';
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
		return (
			<div className="list-books">

				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">

					<Shelf updateBook={this.updateBook}
						   shelfName="Currently Reading"
						   shelfData={this.state.books.filter(book => book.shelf === "currentlyReading")}
					/>

					<Shelf updateBook={this.updateBook}
						   shelfName="Want to Read"
						   shelfData={this.state.books.filter(book => book.shelf === "wantToRead")}
					/>

					<Shelf updateBook={this.updateBook}
						   shelfName="Read"
						   shelfData={this.state.books.filter(book => book.shelf === "read")}
					/>

				</div>

				<SearchIcon/>

          </div>
		)
	}
}

export default LibraryPage;
