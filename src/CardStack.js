import React, { Component } from "react"

const e = React.createElement;

class CardStack extends Component {
    constructor() {
        this.state = {
            "doctors":
                [{
                    "email": "john@doe.com", "name": "John Doe", "patients":
                        [{
                            "mainphone": 7654644408, "name": "Susan Doe",
                            "notes":
                                [{
                                    "body": "Susan is feeling testy today",
                                    "creator": { "name": "Sam Craig", "phone": 7654644408, "role": "Other" },
                                    "date ": "2014-03-12T13:37:27+00:00"
                                }],
                            "special": 6473
                        }]
                }]
        }
        super();
    }

    render() {
        return (<div id="cardstack" class="card-columns">
            this.state.doctors[1].patients[1].notes.map(m => <Card message={m.body} date={m.date} role={m.creator.role} name={m.creator.name}
        </div>);
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);