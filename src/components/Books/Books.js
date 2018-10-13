import React, { Component } from 'react';
import './Books.css';
import ShelfControl from '../ShelfControl/ShelfControl.js';


class Books extends Component {

	render() {

		return (

			<div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>

                          <ShelfControl/>

                          </div>

							<div className="book-title">{this.props.book.title}</div>

                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>
                      </li>
                    </ol>
                  </div>
		)
	}
}


export default Books;
