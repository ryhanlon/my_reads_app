import React, { Component } from 'react';
import './ReturnIcon.css';


class ReturnIcon extends Component {
	render() {

		return <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>

	}
}

export default ReturnIcon;
