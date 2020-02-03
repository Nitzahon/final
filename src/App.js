// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Manager from "./components/Manager";

export default class App extends Component {
  state = {
    employees: [
      {
        fullname: "123445",
        hasFork: false,
        num: "11111",
        whvisits: 0,
        counter:0,
        numofprod:0
      }
    ],
    products: [
      { prodnum: 11122, prodname: "green box", reqlift: false, ishere: false },
      { prodnum: 22554, prodname: "green box", reqlift: false, ishere: false },
      { prodnum: 66698, prodname: "blue box", reqlift: true, ishere: false },
      { prodnum: 78544, prodname: "red box", reqlift: false, ishere: false },
      { prodnum: 69875, prodname: "red box", reqlift: false, ishere: false }
    ]
  };
  addcount=(index)=>{
    let tempemps=[...this.state.employees];
    tempemps[index].counter++;
    this.setState({employees:tempemps})
  };
  update=(prod,i,empind)=>{
    let temp=[...this.state.products];
    temp[i]=prod;
    let tempemps=[...this.state.employees];
    tempemps[empind].numofprod++;
    this.setState({products:temp});
    this.setState({employees:tempemps});
  }
  signup = newEmp => {
    this.setState({ employees: [...this.state.employees, newEmp] });
  };
  question2 = arr => {
    let i;
    let boolval = true;
    let sum = 0;
    for (i = arr.length - 1; i >= 0; i--) {
      if (i >= arr.length / 2) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
          boolval = false;
        }
      }
        if (arr[i] === 1) {
          sum += Math.pow(2, (arr.length - 1 - i));
        
      }
    }
    console.log(sum);
    console.log(boolval);
    return boolval;
  };
  render() {
    this.question2([1,1,1,0,1,1,1]);
    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            component={() => {
              return <Home />;
            }}
          />
          <Route
            exact
            path="/signup"
            component={() => {
              return (
                <Signup signup={this.signup} employees={this.state.employees} />
              );
            }}
          />
          <Route
            exact
            path="/login"
            component={() => {
              return (
                <Login
                  employees={this.state.employees}
                  products={this.state.products}
                  update={this.update}
                  addcount={this.addcount}
                />
              );
            }}
          />
                    <Route
            exact
            path="/manager"
            component={() => {
              return (
                <Manager
                  employees={this.state.employees}
                  products={this.state.products}
                />
              );
            }}
          />
          <Switch>
            <Link to="/">Home</Link>
          </Switch>
        </Router>
      </div>
    );
  }
}

// function App() {
//   return (
//
// }

// export default App;
