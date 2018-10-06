import React, { Component } from 'react';
import './App.css';

import CardStack from "./CardStack"

class App extends Component {
	constructor () {
		super();

		this.state = {};
	}

	render() {
		return (
			<div className="KidCards">
			<CardStack cards={this.state.doctors && this.state.doctors[0].patients[0].notes} />
			</div>
		);
	}

	componentDidMount () {
		let url = "https://274601f9.ngrok.io"

		fetch(url).then(resp => resp.json())
				  .then(data => {
					  this.setState(data);
				  });
	}
}

export default App;
