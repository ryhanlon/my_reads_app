import React, { Component } from 'react';
import './Shelf.css';
import Books from "../Books/Books.js";


class Shelf extends Component {

	render() {
		return (
		    <div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>

                  <Books/>

                </div>

              </div>
		)
	}
}

export default Shelf;
