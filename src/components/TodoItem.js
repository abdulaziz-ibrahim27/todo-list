import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    // title is what being passed down into the list a TodoItem wont be created until its added to TodoList, a TodoItem starts its life cycle as a TodoInput after submitting, it turns from TodoInput to TodoItem, that's why we created the title prop and we didnt pass down item.
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalized d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
