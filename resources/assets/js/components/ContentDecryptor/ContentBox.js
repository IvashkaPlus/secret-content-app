import React, {Component} from 'react';

class ContentBox extends Component{

    constructor(props) {
        super();

        this.content = props.content;

    }

    handlerDelete(e){
        this.props.onDelete();
    }

    render() {
        return(
            <div className="container">
                <h3>Доступ разрешен</h3>
                <p>{this.content}</p>
                <button className="btn btn-danger" onClick={e => this.handlerDelete(e)}>Удалить</button>
            </div>
        );
    }
}

export default ContentBox;