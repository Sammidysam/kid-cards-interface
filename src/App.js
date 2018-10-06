import React, { Component } from 'react';
import './App.css';

import tools from "./config"

import CardStack from "./CardStack"

class App extends Component {
    constructor() {
        super();

        this.state = {notes: [], value: ''};
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
		var that = this;

        tools.index.search({ query: this.state.value, distinct: true }, function (error, content) {
			console.log(content.hits);
            if (error) { alert(error.message); }
            that.setState({ notes: content.hits});
        });
    }

    handleClear(event) {
        this.setState({ notes: [] });
    }

    render() {
        return (
            <div className="KidCards" style={{ backgroundColor: "#D2B38C" }}>
                <h1 align="center">{this.state.doctors && this.state.doctors[0].patients[0].name}</h1>
                
                <div className="input-group mb-3">
                    <div class="form-group has-feedback has-clear">
                        <input type="text" className="form-control" placeholder="Keywords (fever, fidget, sad...)" onChange={this.handleChange}></input>
                        <span class="form-control-clear glyphicon glyphicon-remove form-control-feedback hidden" onClick={this.handleClear}></span>
                    </div>
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button" onClick={this.handleSubmit}>Analyze</button>
                    </div>
                </div>
            <CardStack cards={(this.state.notes.length > 0 ? this.state.notes : (this.state.doctors && this.state.doctors[0].patients[0].notes))} />
            </div>
        );
    }

	componentDidMount () {
		tools.base.bindToState("/doctors", {
			context: this,
			asArray: true,
			state: "doctors"
		})
	}
}

export default App;
