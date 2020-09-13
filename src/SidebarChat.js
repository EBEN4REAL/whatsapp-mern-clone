import React from 'react'
import "./SidebarChat.css"
import {Avatar, IconButton} from "@material-ui/core"


export default function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is the last mesage</p>
            </div>
        </div>
    )
}
