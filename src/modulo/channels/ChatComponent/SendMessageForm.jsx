import React, { useState } from 'react';
// import {
//   Button, Form, Input, Layout
// } from 'antd'
import './SendMessageForm.css'
const SendMessageForm = (props) => {
  const [mess, setMess] = useState(null);
  const sendMess = () => {
    props.sendMessage(mess)
    setMess("");
  }
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
      <form>
          <input></input>
          <button>helo</button>
      </form>
    </div>
  )
}

export default SendMessageForm;

