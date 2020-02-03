import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        };
      }
    render() {
        return (
            <div>
               <h2>Logistics Managment</h2>
               <br/>
               <Link
                to={{
                  pathname: "/signup",
                //   state: { room: elm, index: i }
                }}
              ><button className="btn btn-info frontpgBtn">Sign Up</button></Link>
                <br/>
                <Link to="/login"><button className="btn btn-info frontpgBtn">Login</button></Link>
            </div>
        )
    }
}
