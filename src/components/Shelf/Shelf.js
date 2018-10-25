import React from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Books from "../Books/Books.js";


const Shelf = ({ shelfName, shelfData, updateBook }) => {

	return (

		<section className="bookshelf" aria-label="book shelf">
			<h2 className="bookshelf-title" tabIndex='0'>{shelfName}</h2>

			{
				shelfData.map((book, key) => <Books updateBook={updateBook} book={book} key={key}/>)
			}

		</section>

	)
};


Shelf.propTypes = {
	shelfName: PropTypes.string.isRequired,
	shelfData: PropTypes.array.isRequired,
	updateBook: PropTypes.func.isRequired
};

export default Shelf;
