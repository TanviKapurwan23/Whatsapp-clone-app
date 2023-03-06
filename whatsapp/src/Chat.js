import React, { useState } from "react";
import "./Chat.css";
import { Avatar,IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";

function Chat({ messages }){

    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();

       
        await axios.post('/messages/new', {
            "message": input,
            "name":"Me",
            "timestamp":"Just now !",
            "received": true
        });

        setInput('');
    }
    return(
        <div className="chat">
            <div className="chat__header">
                <Avatar src="data:image/jpeg;base64,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" />

                <div className="chat__headerInfo">
                    <h3>Tanvi Kapurwan</h3>
                    <p>Online</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.received && "chat_receiver"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}
               

                {/* <p className="chat__message chat__reciever">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p> */}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat;