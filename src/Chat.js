import React, {useState} from 'react'
import "./Chat.css"
import {Avatar, IconButton} from "@material-ui/core"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios'


export default function Chat({messages}) {
    const [input, setInput] = useState("")
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/create', {
            message: input,
            name: "Segun",
            timestamp: new Date().toUTCString(),
            received: false
        })
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at Sun 14th, 2020</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                     <p className={`chat__message ${message.received && "chat__receiver" }`}>
                        <span className="chat_name">Eben</span><br></br>
                        {message.message}
                        <span className="chat_timestamp">
                            {new Date().toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
               <form>
                    <input 
                        className="messageInput"
                        placeholder="Type a message"
                        type="text"
                    />
                    <button className="sendButton" onClick={sendMessage} type="submit">
                        Send Message
                    </button>
               </form>
                <IconButton>
                    <MicIcon  />
                </IconButton>
            </div>
        </div>
    )
}
