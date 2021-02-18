import React, { Component } from 'react';

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            link: props.link,
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({password: e.target.value});
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onGetting(this.state);
    }

    render() {
        return(
            <div>
                <p>Для получения доступа к информации введите пароль</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label style={{ width: "100%"}}> Пароль:
                            <input
                                type="password"
                                onChange={(e)=>this.handleInput(e)}
                                className="form-control"
                            />
                        </label>
                    </div>
                    <input type="submit" value="Получить" />
                </form>
            </div>

        );
    }
}

export default Auth;