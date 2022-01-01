import ChatBox from "./ChatBox"
import ChatLobby from "./ChatLobby"
import React from 'react'
import './styles/Chat.css'

const Chat = ({ userName, otherUserName, userSelect, message }) => {
    return (
        <div className="MainPage">
            <div className="ChatPage">
                <ChatBox userName={otherUserName} Message={message}/>
            </div>
            <div className="ChatList">
                <ChatLobby userName={userName} userSelect={userSelect}/>
            </div>
        </div>
    )
}

export default Chat
