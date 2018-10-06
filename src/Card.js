'use strict';

const e = React.createElement;

class CardStack extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return e(
            'div',
            { onClick: () => this.setState({ liked: true }), class: "card", style: "width: 18rem;" },
            'Yo'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);