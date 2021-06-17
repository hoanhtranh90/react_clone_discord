import React from 'react'
import './Navbar.css'
import {useHistory} from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();

    return (
        <div className="NavBar_Container">
            <div className="NavBar_Login_Button">
                <p onClick={()=>{
                    history.push('/auth')
                }}>Login</p>
            </div>
            <div className="NavBar_Register_Button">
            <p onClick={()=>{
                    history.push('/auth')
                }}>Register</p>
            </div>
        </div>
    )
}

export default NavBar;