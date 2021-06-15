import React, { useState } from 'react';
import {
  Button, Form, Input, Layout
} from 'antd'

const SendMessageForm = (props) => {
  const [mess, setMess] = useState(null);
  const sendMess = () => {
    props.sendMessage(mess)
    setMess("");
  }
  return (
    <div style={{bottom:0}}>
      {/* <div className="bottom_wrapper">
                   <div  className="message_input_wrapper">
                        <input type="text" className="message_input" placeholder="Type your message here" onChange={e => setMess(e.target.value) } />
                   </div>
                   <div className="send_message" onClick={() => props.sendMessage(mess)}  >
                        <div className='icon'></div>
                        <div className='text'>Send</div>
                   </div>
               </div> */}
      <Form layout="inline" onSubmit={() => sendMess()}>
        <Form.Item>
            <Input id="msg" value={mess} placeholder="Type something..." style={{ marginLeft: 10, width: 400 }} onChange={e => setMess(e.target.value) }/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{ marginLeft: 5 }} htmlType="submit" id="send" onClick={() =>sendMess()}>Send</Button>
          {/* <Button type="danger" style={{ marginLeft: 5 }} onClick={this.sendDisconnect}>Disconnect</Button> */}
        </Form.Item>
      </Form>
    </div>
  )
}

export default SendMessageForm;

