import React, { useState, useEffect, useRef } from 'react';
// import {
//   Button, Form, Input, Layout
// } from 'antd'
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

import './SendMessageForm.css'
const SendMessageForm = (props) => {
  const [mess, setMess] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("=>>>>>>>>",mess)
    // const text = mess.trim();

    // if (text.length > 0) {
    //   sendMessage(creds, chatId, { text });
    // }

    props.sendMessage(mess)
    setMess('');
  };

  const handleChange = (event) => {
    setMess(event.target.value);

  };
  return (
    <div>
      {/* <div className="bottom_wrapper">
                   <div  className="message_input_wrapper">
                        <input type="text" className="message_input" placeholder="Type your message here" onChange={e => setMess(e.target.value) } />
                   </div>
                   <div className="send_message" onClick={() => props.sendMessage(mess)}  >
                        <div className='icon'></div>
                        <div className='text'>Send</div>
                   </div>
               </div> */}
      {/* <Form layout="inline" onSubmit={() => sendMess()}>
        <Form.Item>
            <Input id="msg" value={mess} placeholder="Type something..." style={{ marginLeft: 10 }} onChange={e => setMess(e.target.value) }/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{ marginLeft: 5 }} htmlType="submit" id="send" onClick={() =>sendMess()}>Send</Button>
        </Form.Item>
      </Form> */}

      {/* <form onSubmit={sendMess}>
          <input type="text" value={mess} onChange={e => setMess(e.target.value) }></input>
          <button type="submit" >helo</button>
      </form> */}

    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={mess}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" style={{ fontSize: '20px' }}  />
      </button>
    </form>
    </div>
  )
}

export default SendMessageForm;

