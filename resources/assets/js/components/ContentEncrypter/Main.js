import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentForm from "./ContentForm";

export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            contentLink: null
        };

        this.handleCreateContent = this.handleCreateContent.bind(this);
    }


    handleCreateContent(content){
        fetch( 'api/encrypt-content', {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        })
            .then(response => {
                return response.json();
            })
            .then( data => {
                this.setState({contentLink: data})
            })
    }

    render() {
        const link = <a href={this.state.contentLink}> {this.state.contentLink} </a>;
        return (
            <div className="container">
                <ContentForm onCreate={this.handleCreateContent} />
                <p>Ваша ссылка:
                    {this.state.contentLink
                        ? link
                        : ' Здесь будет находится ссылка после записи данных'}
                </p>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
