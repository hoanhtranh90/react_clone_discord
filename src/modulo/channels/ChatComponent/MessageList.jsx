

const MessageList = (props) => {
      return (
        <ul className="message-list">                 
          {props.messages.map(message => {
            console.log("helo",message)
            return (
             <li >
               <div>
                 {message.username}
               </div>
               <div>
                 {message.content}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
export default MessageList;