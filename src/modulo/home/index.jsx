import React from 'react';
import { Input, Button } from 'antd';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import "./home.css"
import { useState } from 'react';
const Home = () => {
    const [room,setRoom] = useState('')
    return (
        <div className="Homee">
            
            <form style={{width:'20%'}} className="form_">
                <Input placeholder="Room" size="large" value={room} onChange={e => setRoom(e.target.value)}/>
                <Link to={`/channels/${room}`}>
                <Button type="primary">Login</Button>
                </Link>
            </form>
        </div>
    )
}
export default Home;