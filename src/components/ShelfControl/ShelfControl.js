import React, { Component } from 'react';
import './ShelfControl.css';


class ShelfControl extends Component {

	render() {
		return (

			<div className="book-shelf-changer">
				<select
					value={this.props.book.shelf || "none"}
					id={this.props.book.id}
					onChange={(event) => {this.props.updateBook(this.props.book, event.target.value) }}>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default ShelfControl;
