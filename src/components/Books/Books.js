import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
								<div className="book-cover" style={{
									width: 128,
									height: 174,
									backgroundImage: `url(${!this.props.book.imageLinks ? '' : this.props.book.imageLinks.thumbnail})`
								}}>

									<ShelfControl updateBook={this.props.updateBook} book={this.props.book}/>

								</div>

								<div className="book-title">{this.props.book.title}</div>
								<div className="book-authors">{!this.props.book.authors ? 'No author' : this.props.book.authors}</div>
							</div>
						</div>
					</li>
				</ol>
			</div>
		)
	}
}


Books.propTypes = {
	book: PropTypes.object,
	updateBook: PropTypes.func
};


export default Books;
