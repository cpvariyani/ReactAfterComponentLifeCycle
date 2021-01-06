import React, { Component } from "react";
import "./App.css";
import Employees from "../components/Employees/Employees";
import Home from "../components/Home/Home";
import Player from "../components/Player/Player";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App Constructor.");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App getDerivedStateFromProps.");
    return state;
  }

  componentDidMount() {
    console.log("App componentDidMount.");
  }

  state = {
    employee: [
      { id: "1", name: "ABC", exp: 3 },
      { id: "2", name: "XYZ", exp: 4 },
    ],
    author: "CodingLocker",
    showEmployee: false,
  };

  deleteEmployeeHandler = (empIndex) => {
    const emp = [...this.state.employee];
    emp.splice(empIndex, 1);
    this.setState({ employee: emp });
  };

  toggleEmployeeHandler = () => {
    this.setState({
      showEmployee: !this.state.showEmployee,
    });
  };

  render() {
    console.log("App render method");

    let employee = null;

    if (this.state.showEmployee) {
      employee = (
        <div>
          <Employees
            employeesArr={this.state.employee}
            myclick={this.deleteEmployeeHandler}
          ></Employees>
        </div>
      );
    }

    return (
      <div className="App">
        <Home myToggleClick={this.toggleEmployeeHandler} />
        {employee}

        
      </div>
    );
  }
}
