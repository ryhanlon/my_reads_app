import React, { Component } from 'react';
import './LibraryPage.css';
import Shelf from '../Shelf/Shelf.js';
import SearchIcon from '../SearchIcon/SearchIcon';


class LibraryPage extends Component {

	render() {
		return (
			<div className="list-books">

				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">

					<Shelf shelfName="Currenlty Reading"/>
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
