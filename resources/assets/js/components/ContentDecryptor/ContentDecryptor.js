import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentBox from "./ContentBox";
import Auth from "./Auth";


export default class ContentDecryptor extends Component {
    constructor() {
        super();
        this.state = {
            link: document.getElementById('link').value,
            validated: 0,
            contentBox: null
        };

        this.handleGetContent = this.handleGetContent.bind(this);
        this.handleDeleteContent = this.handleDeleteContent.bind(this);
    }

    handleError(err){
        alert(err);
    }

    handleDeleteContent(){
        let result;
        fetch( 'api/delete-content', {
            method:'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({link: this.state.link})
        })
            .then(response => {
                result = response.ok;
                return response.json();
            }).then(data => {
            if(result){
                this.setState({
                    contentBox: data,
                    validated: 2
                });
                return alert(data);
            } else {
                this.handleError(data);
            }
        })
    }


    handleGetContent(auth_data){
        let result;
        fetch( 'api/decrypt-content', {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(auth_data)
        })
            .then(response => {
                result = response.ok;
                return response.json();
            }).then(data => {
                if(result){
                    this.setState({
                        contentBox: data,
                        validated: 1
                    });
                } else {
                    this.handleError(data);
                }
        })
    }


    render() {
        let result;
        switch(this.state.validated){
            case 0:
                result = <Auth link={this.state.link} onGetting={this.handleGetContent}/>;
                break;
            case 1:
                result = <ContentBox onDelete={this.handleDeleteContent} content={this.state.contentBox}/>;
                break;
            case 2:
                result = <p>Информация удалена</p>;
                break;
        }

        return(
            <div className="container">
                {result}
            </div>
        )
    }
}

if (document.getElementById('rootDecryptor')) {
    ReactDOM.render(<ContentDecryptor />, document.getElementById('rootDecryptor'));
}