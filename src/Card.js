import React, { Component } from "react"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return (
			<div className="card border-dark mb-3">
			<div className="card-body">
			<p className="card-text">{this.props.body}</p>
			<p className="card-text"><small className="text-muted">{this.props.date}</small></p>
			</div>
			</div>
        );
    }
}

export default Card;
