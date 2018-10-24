import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Books from "../Books/Books.js";


class Shelf extends Component {
	componentDidMount() {
		console.log(this);
	}

	render() {
		return (

                <section className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.shelfName}</h2>

                    {
                  	    this.props.shelfData.map((book, key) => <Books updateBook={this.props.updateBook} book={book} key={key} />)
                    }

                </section>

		)
	}
}


Shelf.propTypes = {
	shelfName: PropTypes.string.isRequired,
	shelfData: PropTypes.array.isRequired,
	updateBook: PropTypes.func.isRequired
};

export default Shelf;
