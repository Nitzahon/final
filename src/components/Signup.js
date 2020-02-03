import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbool: false,
      fullnmbool: false,
      num: "",
      fullname: "",
      hasFork: false,
      employees: this.props.employees
    };
  }

  updateFork = e => {
    this.setState({ hasFork: e.target.value });
    e.target.checked = "checked";
  };
  checknum = e => {
    this.setState({ num: e.target.value });
    let label = document.getElementById("numval");
    let tempemp = this.state.employees.map(element => {
      return element.number;
    });
    if (e.target.value.length !== 5 || tempemp.indexOf(e.target.value) !== -1) {
      label.innerHTML = "the number must be with 5 digits";
      this.setState({ numbool: false });
    } else {
      label.innerHTML = "";
      this.setState({ numbool: true });
    }
  };
  checkname = e => {
    this.setState({ fullname: e.target.value });
    let label = document.getElementById("nameval");
    if (e.target.value.length < 4) {
      label.innerHTML = "the name must contain minimum 4 characters";
      this.setState({ namebool: false });
    } else {
      label.innerHTML = "";
      this.setState({ namebool: true });
    }
  };
  signup = () => {
    if (this.state.numbool === false || this.state.namebool === false) {
      alert("1 or more fields are not validated");
    } else {
      let tempemp = {
        num: this.state.num,
        fullname: this.state.fullname,
        hasFork: this.state.hasFork,
        whvisits: 0,
        counter:0,
        numofprod:0
      };
      this.props.signup(tempemp);
    }
  };
  render() {
    return (
      <div>
        <h2>Sign up</h2>
        <br />
        NO. <input type="number" onChange={this.checknum} />
        <br />
        <div id="numval"></div>
        <br />
        NAME <input type="text" onChange={this.checkname} />
        <br />
        <div id="nameval"></div>
        <br />
        Forklift truck
        <br />
        <input
          type="radio"
          name="forkLift"
          value={true}
          onClick={this.updateFork}
          //   checked={this.state.hasFork}
        />
        Yes&emsp;
        <input
          type="radio"
          name="forkLift"
          value={false}
          onClick={this.updateFork}
          checked={!this.state.hasFork}
        />
        No
        <br />
        <Link to="/"><button className="btn btn-info frontpgBtn" onClick={this.signup}>
          Create
        </button></Link>
      </div>
    );
  }
}
