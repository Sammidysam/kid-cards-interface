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
dotenv.load()

// configure algolia
const algolia = algoliasearch(
    "SDWS1O62WD",
    "072fe8783a3d8179d5700ab709688e98"
);
const index = algolia.initIndex("contacts");

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
    }).catch(function (error) {
        console.error("Error adding contacts to Firebase", error);
    });

// Get all contacts from Firebase
tools.database.ref('/contacts').once('value', contacts => {
    // Build an array of all records to push to Algolia
    const records = [];
    contacts.forEach(contact => {
        // get the key and data from the snapshot
        const childKey = contact.key;
        const childData = contact.val();
        // We set the Algolia objectID as the Firebase .key
        childData.objectID = childKey;
        // Add object for indexing
        records.push(childData);
    });

    // Add or update new objects
    index
        .saveObjects(records)
        .then(() => {
            console.log('Contacts imported into Algolia');
        })
        .catch(error => {
            console.error('Error when importing contact into Algolia', error);
        });
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
