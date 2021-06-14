import React from 'react';
import { Input, Button } from 'antd';

import "./home.css"
const Home = () => {
    return (
        <div className="Homee">
            
            <form style={{width:'20%'}} className="form_">
                <Input placeholder="Room" size="large"/>
                <Button type="primary">Login</Button>

            </form>
        </div>
    )
}
export default Home;