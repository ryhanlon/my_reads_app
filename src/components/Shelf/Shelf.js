import React from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Books from "../Books/Books.js";


const Shelf = (props) => {

	return (

		<section className="bookshelf">
			<h2 className="bookshelf-title">{props.shelfName}</h2>

			{
				props.shelfData.map((book, key) => <Books updateBook={props.updateBook} book={book} key={key}/>)
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
