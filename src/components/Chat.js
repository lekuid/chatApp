import ChatBox from "./ChatBox"
import ChatLobby from "./ChatLobby"
import React from 'react'
import './styles/Chat.css'

const Chat = ({ userId, otherUserName, userSelect, message, users, getText }) => {
    return (
        <div className="MainPage">
            <div className="ChatPage">
                <ChatBox userId={userId} userName={otherUserName} Message={message} getText={getText} />
            </div>
            <div className="ChatList">
                <ChatLobby user={users} userSelect={userSelect} />
            </div>
        </div>
    )
}

// Users : list of all users using app, on or off
// userId : Id of the currently selected user
// otherUserName : UserName of the currently selected user
// userSelect : Selector for user from Users
// message : Current typed message sent
// getText : All messages between current user and selected user

export default Chat
