import React, { Component } from "react";
import FlipMove from "react-flip-move";


class TodoItems extends Component {
    constructor(props) {
        super(props);



        this.CreateTasks = this.CreateTasks.bind(this);
    }


    CreateTasks(item) {
        return <li  onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }


    delete(key) {
        this.props.delete(key);
    }


    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.CreateTasks);
    
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                {listItems}
                </FlipMove>
            </ul>
        );
    }
}



export default TodoItems;