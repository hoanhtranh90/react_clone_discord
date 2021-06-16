import { useState } from "react";
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { useEffect } from "react";
import SockJsClient from 'react-stomp';
import { useRef } from "react";
import axios from "axios";
import { Button } from '@material-ui/core';
import { createRoom, loadMore, updateData } from "./chat.Reducer";
import { connect } from 'react-redux';
import "./Main.css"

const Main = ({
    id, list, room,
    createRoom, updateData, isLoading
}) => {
    console.log("data: ", list)
    console.log("room: ", room)
    const url = "http://localhost:8080"
    const messageRef = useRef();
    var connected = false;
    var socket = '';
    var stompClient = '';
    let clientRef;
    const [mess, setMess] = useState([])
    // const [data,setData] = useState([])
    const send = (e) => {
        // if (stompClient && stompClient.connected) {
        //     const msg = { name: "You", content: e, type: 'CHAT' };
        //     stompClient.send(`${url}/chatapp/chat/${id}`, JSON.stringify(msg), {});
        // }
        let msg = {
            userName: "UserName",
            noidung: e,
        }
        clientRef.sendMessage('/app/send/message' + "/" + id, JSON.stringify(msg));
    }
    const sendMessage = (e) => {
        send(e);
        console.log(e)

    }
    useEffect(() => {
        async function promise() {
            await createRoom(id, "UserName");
            await console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>1")
            await console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>2")

        }
        promise()
        // loadMore(id);

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
                    // let dataAl = {
                    //     username:props.data.login.info.user != '' ? props.data.login.info.user.username : 'guest',
                    //     content:msg.body
                    // }
                    console.log("=>????>>>>", msg)

                    updateData(msg)

                }}
                ref={(client) => { clientRef = client }}

            />
                {!isLoading ?
                    <div className="main" >
                        <div className="MessageList"><MessageList messages={list} /></div>
                        <div className="SendMessForm"><SendMessageForm sendMessage={sendMessage} /></div>
                    </div> : <div>loading</div>}

        </div>
    )
}
const mapStateToProps = (state) => ({
    list: state.chatReducer.list,
    room: state.chatReducer.room,
    isLoading: state.chatReducer.isLoading,
});

const mapDispatchToProps = {
    loadMore,
    createRoom,
    updateData
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);