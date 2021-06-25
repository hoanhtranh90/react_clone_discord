import { useState } from "react";
import MessageList from './MessList/MessageList'
import SendMessageForm from './SendMess/SendMessageForm'
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { useEffect } from "react";
import SockJsClient from 'react-stomp';
import { useRef } from "react";
import axios from "axios";
import { createRoom, loadMore, updateData, checkExitsRoom, addUser } from "./chat.Reducer";
import { connect, useSelector } from 'react-redux';
import { Alert, Button, Space } from 'antd';

import "./Main.css"
import { useHistory } from "react-router-dom";
import { sendMess } from "../../../shared/api/chatComponent.api";

const Main = ({
    id, 
    list, 
    room, 
    checkExitsRoom, 
    isExitsRoom,
    loadMore,
    addUser,
    createRoom, 
    updateData, 
    isLoading
}) => {
    const user = useSelector(state => state.authReducer.user)
    const history = useHistory();
    console.log("room: ", room)
    console.log("user && user.username: ", user && user.username)
    let clientRef;
    const send = (e) => {
        let msg = {
            userName: user && user.username,
            noidung: e,
        }
        clientRef.sendMessage('/app/send/message' + "/" + id, JSON.stringify(msg));
    }
    const sendMessage = (e) => {
        send(e);
        let form = {
            noidung: e
        }
        sendMess(form)
        console.log(e)

    }
    useEffect(() => {
        async function promise() {
            await checkExitsRoom(id)
            await addUser(id, user && user.username)
            await loadMore(id)

        }
        promise()

    }, [id])


    return (
        <div  >
            <SockJsClient url='http://localhost:8080/socket' topics={[`/topic/${id}`]}
                onConnect={() => {
                    //  Fetch("https://messager-ws.herokuapp.com/history", {
                    //     method: "GET"
                    //   }).then((response) => {
                    //     setData(response.body)
                    //     // console.log(response.body[0]);
                    //   });
                    console.log("conntect Success")
                }
                }
                onDisconnect={() => { console.log('disconnect') }}
                onMessage={(msg) => {
                    console.log("=>????>>>>", msg)

                    updateData(msg)

                }}
                ref={(client) => { clientRef = client }}

            />
            {!isExitsRoom ? <Alert
                message="Phòng chưa tồn tại"
                description="Bạn có muốn tạo phòng này"
                type="info"
                action={
                    <Space direction="vertical">
                        <Button size="small" type="primary" onClick={()=>createRoom(id, user && user.username)}>
                            Đồng ý
                        </Button>
                        <Button size="small" danger type="ghost" onClick={()=>history.push('/channel')}>
                            Từ chối
                        </Button>
                    </Space>
                }
                
            /> : 
            (!isLoading ?
                <div className="main" >
                    <div className="MessageList"><MessageList messages={list} /></div>
                    <div className="SendMessForm"><SendMessageForm sendMessage={sendMessage} /></div>
                    <div></div>
                </div> : <div>loadingg</div>)}

        </div>
    )
}
const mapStateToProps = (state) => ({
    list: state.chatReducer.list,
    room: state.chatReducer.room,
    isLoading: state.chatReducer.isLoading,
    isExitsRoom: state.chatReducer.isExitsRoom,
});

const mapDispatchToProps = {
    loadMore,
    createRoom,
    updateData,
    addUser,
    checkExitsRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);