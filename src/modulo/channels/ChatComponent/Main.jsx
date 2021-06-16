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
import { createRoom, loadMore } from "./chat.Reducer";
import { connect } from 'react-redux';


const Main = ({
    id, data, room,
    createRoom, loadMore, isLoading
}) => {
    console.log("data: ", data)
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
            username: "YOU",
            content: e,
            roomId: id
        }
        clientRef.sendMessage('/app/send/message' + "/" + id, JSON.stringify(msg));
        setMess([...mess, msg]);
    }
    const sendMessage = (e) => {
        send(e);
        console.log(e)

    }
    useEffect(() => {
        // axios.post("http://localhost:8080/saveRoom",{
        //     name:id
        // }).then(res => {
        //     axios.get("http://localhost:8080/history?roomId="+id).then(res => {
        //         console.log("=>>>",res)
        //         setMess(res.data)
        //     })
        // })
        async function promise() {
            await createRoom(id, "UserName");
            await console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>1")
            setMess(data)
            await console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>2")

        }
        promise()
        // loadMore(id);

    }, [id])


    // const connect = () => {
    //     socket = new SockJS("http://localhost:8080/ws");
    //     stompClient = Stomp.over(socket);
    //     stompClient.connect(
    //         {},
    //         frame => {
    //             connected = true;
    //             stompClient.subscribe(`${url}/room/${id}`, tick => {
    //                 console.log("=>>>>>>>>>>>>>>>>", tick)
    //                 console.log("=>>>>>>>>>>>>>>>>frame", frame)
    //             });
    //         },
    //         error => {
    //             console.log(error);
    //             connected = false;
    //         }
    //     );
    // }
    // const disconnect = () => {
    //     if (stompClient) {
    //         stompClient.disconnect();
    //     }
    //     connected = false;
    // }
    // const tickleConnection = () => {
    //     connected ? disconnect() : connect();
    // }
    if (isLoading) return <div>Loading</div>
    else
    return (
        <div style={{ height: 400, width: 600, backgroundColor: '#ebebeb' }} >
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
                    console.log("=>>", msg)
                    setMess([...mess, msg]);
                }}
                ref={(client) => { clientRef = client }}

            />
            <MessageList messages={mess&&mess.length>0 ? mess : data} />
            <div style={{ justifyContent: 'flex-end' }}>
                <SendMessageForm sendMessage={sendMessage} />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    data: state.chatReducer.data,
    room: state.chatReducer.room,
    isLoading: state.chatReducer.isLoading,
});

const mapDispatchToProps = {
    loadMore,
    createRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);