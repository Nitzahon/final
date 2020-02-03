import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {

      index: props.i,
      prodnum: props.prodnum,
      prodname: props.prodname,
      reqlift: props.reqlift
    };
  }
  update=()=> {
    
      let prod = {
      prodnum: this.state.prodnum,
      prodname: this.state.prodname,
      relift: this.state.reqlift,
      ishere: true
    };
    this.props.update(prod,this.state.index);
  };
  render() {

    return (
      <div>
        NO. {this.state.prodnum}
        <br />
        Name. {this.state.prodname}
        <br />
        Need forklift truck: {this.state.reqlift ? "Yes" : "No"}
        <br />
        <button className="btn btn-info frontpgBtn" onClick={this.update}>
          Update
        </button>
      </div>
    );
  }
}
