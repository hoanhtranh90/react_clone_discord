import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
import { login } from './auth.reducer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 7, span: 16 },
};
const Auth = ({login,isLoading}) => {
    const [userName,serUserName] = useState('');
    const [pass,setPass] = useState('');
    const history = useHistory();
    const onFinish = (values) => {
        console.log('Success:', values);
        console.log('userName:', userName);
        console.log('pass:', pass);
        login(userName,pass)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleSubmit = () => {
        login(userName,pass);

    }
    return (
        <div style={{marginTop:100}}>
        {!isLoading ? <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input onChange={e => serUserName(e.target.value)}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password onChange={e => setPass(e.target.value)}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
                <Button type="primary" style={{marginLeft:20}} onClick={()=> history.push('/register')}>
                    Register
                </Button>
            </Form.Item>
        </Form> : <div>loadiing </div>}
        </div>
    );
}
const mapStateToProps = (state) => ({
    error: state.authReducer.error,
    isLoading: state.authReducer.isLoading
});

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);