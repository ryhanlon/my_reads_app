import React from 'react';
import PropTypes from 'prop-types';
import './Books.css';
import ShelfControl from '../ShelfControl/ShelfControl.js';


const Books = (props) => {

	return (
		<div className="bookshelf-books">
			<ol className="books-grid">
				<li>
					<div className="book">
						<div className="book-top">
							<div className="book-cover" style={{
								width: 128,
								height: 174,
								backgroundImage: `url(${!props.book.imageLinks ? '' : props.book.imageLinks.thumbnail})`
							}}>

								<ShelfControl updateBook={props.updateBook} book={props.book}/>

							</div>

							<div className="book-title">{props.book.title}</div>
							<div className="book-authors">{!props.book.authors ? 'No author' : props.book.authors}</div>
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
