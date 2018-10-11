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
		BooksAPI.getAll().then(bookData => this.setState( { books: bookData} ))
	}



	render() {
		console.log(this.state.books);
		return (
			<div className="list-books">

				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">

					<Shelf shelfName="Currently Reading"
						   shelfData={this.state.books.filter(book => book.shelf === "currentlyReading")}
					/>

					<Shelf shelfName="Want to Read"
						   shelfData={this.state.books.filter(book => book.shelf === "wantToRead")}
					/>

					<Shelf shelfName="Read"
						   shelfData={this.state.books.filter(book => book.shelf === "read")}
					/>

				</div>

				<div className="open-search">

					<SearchIcon/>

				</div>

          </div>
		)
	}
}

export default LibraryPage;
