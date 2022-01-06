import ChatBox from "./ChatBox"
import ChatLobby from "./ChatLobby"
import React from 'react'
import './styles/Chat.css'

const Chat = ({ userName, userId, otherUserName, userSelect, message, user, getText }) => {
    return (
        <div className="MainPage">
            <div className="ChatPage">
                <ChatBox userName={otherUserName} Message={message} getText={getText} userId={userId}/>
            </div>
            <div className="ChatList">
                <ChatLobby userName={userName} userSelect={userSelect} user={user}/>
            </div>
        </div>
    )
}

export default Chat
