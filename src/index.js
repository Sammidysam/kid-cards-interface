import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import tools from "./config"


ReactDOM.render(<App />, document.getElementById('root'));
const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');

// load values from the .env file in this directory into process.env
dotenv.load();

// configure algolia
const algolia = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
);
const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);

// Adding a few contacts
Promise.all([
    tools.database.ref('/contacts').push({
        name: 'Josh',
        city: 'San Francisco'
    }),
    tools.database.ref('/contacts').push({
        name: 'Tim',
        city: 'Paris'
    })]).then(function () {
        console.log("Contacts added to Firebase");
        process.exit(0);
    }).catch(function (error) {
        console.error("Error adding contacts to Firebase", error);
        process.exit(1);
    });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
