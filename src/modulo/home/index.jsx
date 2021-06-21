import React from 'react';
import { Form, Input, Button } from 'antd';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
} from "react-router-dom";
import "./home.css"
import { useState } from 'react';
const Home = () => {
        const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = () => {
        history.push(`/channels/${room}`)

    }
    const history = useHistory();
    const [room, setRoom] = useState('')
    return (
        <div className="Homee">

            <Form
                style={{ width: '20%' }} className="form_"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Input placeholder="Room" size="large" value={room} onChange={e => setRoom(e.target.value)} />
                {/* <Link to={`/channels/${room}`}> */}
                <Button type="primary" htmlType="submit">Login</Button>
                {/* </Link> */}
            </Form>
        </div>
    )
}
export default Home;