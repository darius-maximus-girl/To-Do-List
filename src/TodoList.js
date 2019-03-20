import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            items: []
        }
        
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }

        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            }
         })     
        }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key)
        });
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <h1>My stuff to do:</h1>
                <div className="header">
                    <form onSubmit={this.addItem}>
                       <span id="addText">
                           <input id="inputText" maxLength="25" ref={(a) => this._inputElement = a} 
                            placeholder="add to the list" autoComplete="off">
                            </input>
                       <button type="submit" className="addItem"><img src="https://img.icons8.com/color/48/000000/plus-math.png" alt="add"/></button> 
                        </span>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem} />
            </div>
        )
    }
}

export default TodoList;