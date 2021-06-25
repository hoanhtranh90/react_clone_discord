// import './slideBar.css'
// import { Avatar } from 'antd';
// const SlideBar = () => {
//     return (
//         <div>
//             <ul className="listUser1">
//                 <li className="chatLine1">
//                     <div>
//                         <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
//                             U
//                         </Avatar>
//                     </div>
//                     <div>
//                         <div className="userName1">
//                             User 1
//                         </div>
//                     </div>
//                 </li>
//                 <li className="chatLine1">
//                 <div>
//                         <Avatar style={{ backgroundColor: 'red', verticalAlign: 'middle' }} size="large">
//                             A
//                         </Avatar>
//                     </div>
//                     <div>
//                         <div className="userName1">
//                             User 1
//                         </div>
//                     </div>
//                 </li>
//                 <li className="chatLine1">
//                 <div>
//                         <Avatar style={{ backgroundColor: 'blue', verticalAlign: 'middle' }} size="large">
//                             B
//                         </Avatar>
//                     </div>
//                     <div>
//                         <div className="userName1">
//                             User 1
//                         </div>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     )
// }
// export default SlideBar;

import React, {useState, useEffect} from 'react'
import './slideBar.css'

import Avatar from "@material-ui/core/Avatar"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import CallIcon from "@material-ui/icons/Call";
import MicIcon from "@material-ui/icons/Mic";
import SettingsIcon from '@material-ui/icons/Settings';
import { Headset, InfoOutlined, SignalCellularAlt } from '@material-ui/icons';
import SidebarChannel from './SidebarChannel'

import { connect, useSelector } from 'react-redux'
import { loadData } from './slideBar.reducer';

function Sidebar({
  loadData,
  listRoom,
  isLoading
}) {

    const user = useSelector(state => state.authReducer.user)
    const [channels, setChannels] = useState([])


    useEffect(()=>{
        loadData();
        console.log("=>>>>>>>>>>>>abcxyz",listRoom)
    },[])
    const handleAddChannel = () => {
      const channelName = prompt("Enter Channel Name");

    //   if (channelName) {
    //     db.collection('channels').add({
    //       channelName
    //     }) 
    //   }
    }

    return (
      <div className="sidebar">
        <div className="sidebar__top">
          <h3 style={{fontSize:24, color:'#fff'}}>CloneServer</h3>
          <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
          <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <ExpandMoreIcon />
              <h4 style={{fontSize:18, color:'gray'}}>Text Channels</h4>
            </div>

            <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
          </div>

          <div className="sidebar__channelsLisr">
            
            {!isLoading && listRoom.map((e) => (
              <SidebarChannel  channel={e}/>
              // <div>{channel}</div>
            ))}
            
          </div>
        </div>

        {/* <div className="sidebar__voice">
          <SignalCellularAlt
            className="sidebar__voiceIcon"
            fontSize = "large"
          />
          <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>
          <div className="sidebar__voiceIcon">
            <InfoOutlined />
            <CallIcon />
          </div>
        </div> */}

        <div className="sidebar__profile">
          <Avatar onClick={() => {}}/>
          <div className="sidebar__profileInfo">
            <h3>{user.username}</h3>
            <p>#hello</p>
          </div>

          <div className="sidebar__profileIcons">
            <MicIcon />
            <Headset />
            <SettingsIcon />
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
    listRoom: state.slideBarReducer.listRoom,
    isLoading: state.slideBarReducer.isLoading,
});

const mapDispatchToProps = {
    loadData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);