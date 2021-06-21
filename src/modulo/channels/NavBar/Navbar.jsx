import React from 'react'
import './Navbar.css'
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const user = useSelector( state => state.authReducer.user)

    const history = useHistory();

    return (
        <div className="NavBar_Container">
            <div className="NavBar_Register_Button">
            <p onClick={()=>{
                    history.push('/auth')
                }}>{user && user.username}</p>
            </div>
        </div>
    )
}

export default NavBar;