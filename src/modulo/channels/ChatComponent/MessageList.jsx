

const MessageList = (props) => {
      return (
        <ul className="message-list">                 
          {props.messages && props.messages.map(message => {
            console.log("helo",message)
            return (
             <li >
               <div>
                 {message.sendUserId}
               </div>
               <div>
                 {message.noidung}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
export default MessageList;