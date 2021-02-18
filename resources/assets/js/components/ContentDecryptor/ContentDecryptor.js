import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from "../ContentEncrypter/Main";

export default class ContentDecryptor extends Component {
    constructor() {
        super();
        this.state = {
            validated: false,
            contentBox: null
        };
    }

    render() {
        return(
            <div className="container">

            </div>
        )
    }
}

if (document.getElementById('rootDecryptor')) {
    ReactDOM.render(<Main />, document.getElementById('rootDecryptor'));
}