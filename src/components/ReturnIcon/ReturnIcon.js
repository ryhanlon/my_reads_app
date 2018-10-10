import React, { Component } from 'react';
import './ReturnIcon.css';
import {Link} from "react-router-dom";


class ReturnIcon extends Component {
	render() {

		return <Link to="/" className="close-search">Close</Link>

	}
}

export default ReturnIcon;
