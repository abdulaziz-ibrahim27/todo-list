import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  /* 
  before submiting any item this function will excuse no matter what
  */
  handleSubmit = (e) => {
    // preventing default behavior aka refreshing on submitting
    e.preventDefault();

    // creating a new item and then inserting the already existing ID into it and moving the content on "item" to a new field called title.
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    // appending the newItem to a new array called updatedItems with the content of the items array.
    const updatedItems = [...this.state.items, newItem];
    //setState, where we first update items then resetting item and creating a new iD
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };

  clearList = () => {
    console.log("Clear List");
  };

  handleEdit = (id) => {
    console.log(`Handle Edit ${id}`);
  };

  handleDelete = (id) => {
    console.log(`Handle Delete ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4 ">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
