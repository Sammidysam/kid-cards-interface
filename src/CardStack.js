import React, { Component } from "react"

import Card from "./Card"

class CardStack extends Component {
    render() {
        return (
			<div id="cardstack" className="card-columns CardStack">
            {this.props.cards && this.props.cards.map(m => <Card body={m.body} key={m.date} date={m.date} creator={m.creator} />)}
			</div>
			);
    }
}

export default CardStack;
