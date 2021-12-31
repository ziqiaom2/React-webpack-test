import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  state={hasError:''}
  // 如果子组件出错，则进行容灾
  static getDerivedStateFromError(error) {
    console.log("error occurred:", error);
    return { hasError: error };
  }

  componentDidCatch() {
    console.log("此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决");
  }
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
        
      </ul>
    );
  }
}
