import React, { Component } from 'react';
import './LibraryPage.css';
import Shelf from '../Shelf/Shelf.js';


class LibraryPage extends Component {

	render() {
		return (
			<div className="list-books">

				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">

					<Shelf/>
					<Shelf/>
					<Shelf/>

				</div>

				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>

          </div>
		)
	}
}

export default LibraryPage;
