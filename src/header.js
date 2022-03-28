import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div id="start_box">
                <h2 style={{fontFamily:'cursive', fontWeight: 800, fontSize: '40px', marginLeft: '30px',position:'absolute',marginTop:'5px'}}>Pomato</h2>
                <div className="login_create">
                    <button className="btn btn-info" style={{border: '2px black solid' ,marginRight: '5px'}}>Login</button>
                    <button className="btn btn-info" style={{border: '2px black solid',marginRight: '5px'}}>Create Account</button>
                    <button onclick="changeMode()" className="btn btn-default" style={{height: '40px', border:' 2px black solid'}}><b>Changemode</b> </button>
                </div>
            </div>
        )
    }
}

export default Header