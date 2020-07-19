import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Wake up",
      },
      {
        id: 2,
        title: "Make Breakfast",
      },
      {
        id: 3,
        title: "Poopy",
      },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("Handle Change");
  };
  handleSubmit = (e) => {
    console.log("Handle Submit");
  };
  clearList = () => {
    console.log("Clear List");
  };
  handleEdit = () => {
    console.log("Handle Edit");
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
