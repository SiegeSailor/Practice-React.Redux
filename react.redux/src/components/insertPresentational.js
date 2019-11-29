import React from "react";

class Insert extends React.Component {
    inputHandler = (event) => {
        this.props.addTodoEvent();
        this.props.handler(event.target.value)
    }

    render = () => {
        return (
            <div>
                <h2>TODO</h2>
                <input name="todo" type="text" onChange={this.inputHandler}></input>
                <p>Here displaying what you are going to insert</p>
                <p>{this.props.string}</p>
            </div>
        )
    }
}

export default Insert;