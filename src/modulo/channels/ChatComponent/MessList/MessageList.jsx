import React, { useState, useEffect, useRef }  from 'react'
import './MessageList.css'
import { Avatar } from 'antd';

const MessageList = (props) => {

  
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <ul style={{ listStyle: 'none' }}>
      {props.messages && props.messages.map(message => {
        console.log("helo", message)
        return (
          <li className="chatLine">
            <div>
              <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
                U
              </Avatar>
            </div>
            <div>
              <div className="userName">
                {message.user.username}
              </div>
              <div className="content">
                {message.noidung}
              </div>
            </div>
            <AlwaysScrollToBottom/>
          </li>
        )
      })}
    </ul>
  )
}
export default MessageList;