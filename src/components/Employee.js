import React, { Component } from 'react'
import Product from './Product';

export default class Employee extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            fullname:props.employee.fullname,
            num:props.employee.num,
            hasFork:props.employee.hasFork,
            products:props.products,
            index:props.index
        };
      }
      update = (prod,i) =>{
          this.props.update(prod,i, this.state.index);
      }
    render() {
        return (
            <div>
                <h2>Welcome {this.state.fullname}</h2>
                <br/>
                Details:
                <br/>
                Fullname: {this.state.fullname}
                <br/>
                NO.:{this.state.num}
                <br/>
                Forklift truck license: {((this.state.hasFork ? "Yes" : "No" ))}
                <br/>
                List of products
                <br/>
                {this.state.products.filter((elm) => {

            return (

                elm.ishere===false

            )
          }).map((elm, i )=>{
              return(<div>
                <Product i={i} prodnum={elm.prodnum} prodname={elm.prodname} reqlift={elm.reqlift} update={this.update}/>           
                </div>);
          })}
            </div>
        )
    }
}
