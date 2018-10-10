import React, { Component } from 'react';
import './LibraryPage.css';
import Shelf from '../Shelf/Shelf.js';
import SearchIcon from '../SearchIcon/SearchIcon';


class LibraryPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: []
		}
	}

	render() {
		return (
			<div className="list-books">

				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">

					<Shelf shelfName="Currently Reading"/>

					<Shelf shelfName="Want to Read"/>

					<Shelf shelfName="Read"/>

				</div>

				<div className="open-search">

					<SearchIcon/>

				</div>

          </div>
		)
	}
}

export default LibraryPage;
