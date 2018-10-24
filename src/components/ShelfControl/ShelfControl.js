import React from 'react';
import PropTypes from 'prop-types';
import './ShelfControl.css';


const ShelfControl = ({ book, updateBook}) => {
	return (

		<div className="book-shelf-changer">
			<select
				value={book.shelf || "none"}
				id={book.id}
				onChange={(event) => {
					updateBook(book, event.target.value)
				}}>
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	)
};


ShelfControl.propTypes = {
	book: PropTypes.object,
	updateBook: PropTypes.func
};


export default ShelfControl;
