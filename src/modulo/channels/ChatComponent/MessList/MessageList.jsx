import React, { useState, useEffect, useRef }  from 'react'
import './MessageList.css'
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';

const MessageList = (props) => {

  const user = useSelector(state => state.authReducer.user)

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <ul style={{ listStyle: 'none' }}>
      {props.messages && props.messages.map(message => {
        console.log("helo", message)
        if(message.userName !== user.username)
        return (
          <li    className="chatLine">
            <div>
              <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
                U
              </Avatar>
            </div>
            <div>
              <div className="userName">
                {message.username}
              </div>
              <div className="content">
                {message.noidung}
              </div>
            </div>
            <AlwaysScrollToBottom/>
          </li>
        )
        else return (
          <li    style={{textAlign:'right'}}>
            <div>
              <div className="userName">
                @me
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