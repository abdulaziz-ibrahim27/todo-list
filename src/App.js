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

  //updates the input bar
  handleChange = (e) => {
    this.setState({
      item: e.target.value, //
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
    this.setState({
      items: [],
    });
  };

  handleEdit = (id) => {
    console.log(`Handle Edit ${id}`);

    const filteredItems = this.state.items.filter((item) => item.id !== id);

    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items: filteredItems,
    });
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
