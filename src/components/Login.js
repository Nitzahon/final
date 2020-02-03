import React, { Component } from "react";
import Employee from "./Employee";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      exists: false,
      loginnumber: "",
      employees: this.props.employees,
      loggedemp: "",
      products: this.props.products,
      index:''
    };
  }
  logininfo = e => {
    this.setState({ loginnumber: e.target.value });
    let tempemp = this.state.employees.map(element => {
      console.log(element.number);

      return element.num;
    });
    if (tempemp.indexOf(e.target.value) !== -1) {
      this.setState({ exists: true });
    } else {
      this.setState({ exists: false });
    }
  };
  //there is an unknown clash with manager
  addcount=()=>{
    this.props.addcount(this.state.index);
  };
  login = () => {
    if (this.state.exists === false) {
      alert("employee not found");
    } else {
      let tempemp = this.state.employees.map(element => {
        console.log(element.number);

        return element.num;
      });
      let index = tempemp.indexOf(this.state.loginnumber);

      this.setState({ loggedemp: this.state.employees[index] });
      this.setState({index:index});
      this.setState({ logged: true });
    }
  };
  update = (prod, i, empind) => {
    this.props.update(prod, i,empind);
  };
  logout = ()=>{
      this.setState({logged:false});
  }
  butt = () => {
    if (this.state.loginnumber !== "99999") {
      return (
        <div>
          <button className="btn btn-info frontpgBtn" onClick={this.login}>
            Enter
          </button>
        </div>
      );
    }
    else{
        return (
            <div>
              <Link to="/manager">
              <button className="btn btn-info frontpgBtn">
                Enter
              </button>
              </Link>
            </div>
          );
    }
  };
  show = () => {
    if (this.state.logged === false) {
      return (
        <div>
          <h2>login</h2>
          <br />
          NO.
          <input type="number" onChange={this.logininfo} />
          <br />
          <br />
          {this.butt()}
        </div>
      );
    } else {
      return (
        <div>
          <Employee
            employee={this.state.loggedemp}
            products={this.state.products}
            update={this.update}
            index={this.state.index}
          />
                        <button className="btn btn-info frontpgBtn" onClick={this.logout}>
                Log Out
              </button>
        </div>
      );
    }
  };
  render() {
    return <div>{this.show()}</div>;
  }
}
