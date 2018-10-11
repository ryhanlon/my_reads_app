import React, { Component } from 'react';
import './Shelf.css';
import Books from "../Books/Books.js";


class Shelf extends Component {

	render() {
		console.log(this.props.shelfData);
		return (
		    <div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>

                  {
                  	this.props.shelfData.map(bookData => {
                  		return <Books book={bookData} key={bookData.id} />
					} )

                  }

                </div>

              </div>
		)
	}
}

export default Shelf;
