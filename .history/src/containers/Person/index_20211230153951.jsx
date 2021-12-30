import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode;
    const age = this.ageNode;
    console.log(name, age);
    const personObj = { id: nanoid(), name, age };
    this.props.addAPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };

  render() {
    return (
      <div>
        <h1>Person</h1>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map((p) => {return <li key={p.id}>姓名：{p.name}    年龄：{p.age}</li>
              
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ persons: state.personReducer, counts: state.countReducer }),
  {
    addAPerson: createAddPersonAction,
  }
)(Person);
