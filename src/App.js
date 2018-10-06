import React, { Component } from 'react';
import './App.css';

import base from "./config"

import CardStack from "./CardStack"

class App extends Component {
	constructor () {
		super();

		this.state = {};
	}

	render() {
		return (
            <div className="KidCards" background-color="#D2B38C">
                <h1 align="center">{this.state.doctors && this.state.doctors[0].patients[0].name}</h1>
			<CardStack cards={this.state.doctors && this.state.doctors[0].patients[0].notes} />
			</div>
		);
	}

	componentDidMount () {
		base.bindToState("/doctors", {
			context: this,
			asArray: true,
			state: "doctors"
		})
	}
}

export default App;
