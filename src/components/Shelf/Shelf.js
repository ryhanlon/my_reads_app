import React, { Component } from 'react';
import './Shelf.css';
import Books from "../Books/Books.js";


class Shelf extends Component {
	componentDidMount() {
		console.log(this);
	}

	render() {
		return (
		    <div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>

                  {
                  	this.props.shelfData.map((book, key) => <Books updateBook={this.props.updateBook} book={book} key={key}/>)
					}



                </div>

              </div>
		)
	}
}

export default Shelf;
