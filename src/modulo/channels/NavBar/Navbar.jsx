import React from 'react'
import './Navbar.css'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { logOut } from '../../auth/auth.reducer';
const NavBar = () => {
    const user = useSelector(state => state.authReducer.user)

    const history = useHistory();
    const dispatch = useDispatch();
    const menu = (
        <Menu>
            <Menu.Item danger onClick={() => {
                localStorage.removeItem('jwtToken')
                history.push('/auth')
                dispatch(logOut())
            }}>Đăng xuất</Menu.Item>
        </Menu>
    )
    return (
        <div className="NavBar_Container">
            <div className="NavBar_Register_Button">
                {/* <p onClick={()=>{
                    history.push('/auth')
                }}>{user && user.username}</p> */}
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        {user && user.username} <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </div>

    )
}

export default NavBar;