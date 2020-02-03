import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Manager extends Component {
    constructor(props) {
        super(props);
    
        this.state = {

          employees: this.props.employees,
        };
      }
    render() {
        return (
            <div>
                <h2>Manager</h2>
                <br/>
                <table>
                    <th>
                    <td>NO</td>
                    <td>Fullname</td>
                    <td>Counter</td>
                    <td>Number of Products</td>
                    </th>
                    {this.state.employees.map((elm)=>{
                        return(
                            <tr>
                    <td>{elm.num}</td>
                    <td>{elm.fullname}</td>
                    <td>{elm.counter}</td>
                    <td>{elm.numofprod}</td>
                            </tr>
                        );
                    })}
                </table>
                <Link to="/"><button className="btn btn-info frontpgBtn">Log Out</button></Link>
            </div>
        )
    }
}
