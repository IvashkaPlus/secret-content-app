import React, { Component } from 'react';

class ContentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newContent: {
                content: '',
                password: ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(key, e) {
        var state = Object.assign({}, this.state.newContent);
        state[key] = e.target.value;
        this.setState({newContent: state });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onCreate(this.state.newContent);
    }

    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label style={{ width: "100%"}}> Данные:
                        <textarea
                            className="form-control"
                            onChange={(e)=>this.handleInput('content',e)}
                            rows="5"
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label style={{ width: "100%"}}> Пароль:
                        <input
                            type="password"
                            onChange={(e)=>this.handleInput('password',e)}
                            className="form-control"
                        />
                    </label>
                </div>
                <input type="submit" value="Создать" />
            </form>
        )
    }
}

export default ContentForm;