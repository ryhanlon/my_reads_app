import React from 'react';
import PropTypes from 'prop-types';
import './Books.css';
import ShelfControl from '../ShelfControl/ShelfControl.js';


const Books = ({ book, updateBook }) => {

	return (
		<div className="bookshelf-books">
			<ol className="books-grid">
				<li>
					<div className="book" tabIndex="0" title={book.title}>
						<div className="book-top">
							<div className="book-cover" style={{
								width: 128,
								height: 174,
								backgroundImage: `url(${!book.imageLinks ? '' : book.imageLinks.thumbnail})`
							}}>

								<ShelfControl updateBook={updateBook} book={book}/>

							</div>

							<div className="book-title">{book.title}</div>
							<div className="book-authors">{!book.authors ? 'No author' : book.authors}</div>
						</div>
					</div>
				</li>
			</ol>
		</div>
	)
};


Books.propTypes = {
	book: PropTypes.object,
	updateBook: PropTypes.func
};


export default Books;
