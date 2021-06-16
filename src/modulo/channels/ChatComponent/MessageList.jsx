

const MessageList = (props) => {
      return (
        <ul>                 
          {props.messages && props.messages.map(message => {
            console.log("helo",message)
            return (
             <li >
               <div>
                 {message.user.name}
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