import React, {Component} from "react";

class TodoItems extends Component {

    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.addClass = this.addClass.bind(this)
    }

    addClass(e) {
        e.target.classList.add('checked')
    }

    createTasks(item) {
        return <li className="animated pulse" key={item.key} onClick={this.addClass}>{item.text}<button  onClick={ () => {
            this.delete(item.key)
        }}  className="deleteItem animated rubberBand"><img src="https://img.icons8.com/color/48/000000/trash.png" alt="wastebin"/></button></li>
    }

    delete(key) {
        this.props.delete(key)
    }

   

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        )
    }
}

export default TodoItems;