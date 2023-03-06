import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat(){
    return <div className="sidebarChat">
        <Avatar src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" />
        <div className="sidebarChat__info">
            <h2>Person's Name</h2>
            <p>This is the last message</p>
        </div>
    </div>;
}

export default SidebarChat;