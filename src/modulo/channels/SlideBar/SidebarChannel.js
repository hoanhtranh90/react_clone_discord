import React from 'react'
import './SidebarChannel.css'
import { useDispatch } from 'react-redux'

function SidebarChannel({channel}) {
    console.log("=<<<<<<<<<<<<",channel)
    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel" onClick={() => {
            // dispatch(setChannelInfo({
            //     channelId: id,
            //     channelName
            // }))
        }
        }>
            <h4 style={{fontSize:16}}>
                <span className="sidebarChannel__hash">#</span>
                {channel && channel.name}
            </h4>
        </div>
    )
}


export default SidebarChannel