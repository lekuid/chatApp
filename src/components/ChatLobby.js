import React from 'react'
import './styles/ChatLobby.css'


const ChatLobby = ({ userSelect, user }) => {

    return (
        <div className='ChatLobby'>
            <div className='ChatLobbyHeader'>
                <h4 
                className='UserName'>
                    Users
                </h4>
            </div>
            <div className='UserList'>
                <ul>
                    {Object.keys(user).map((id) => (
                        <button
                        key={id}
                        className='User'
                        onClick={()=>{userSelect(id)}}>
                            <h4 
                            className='UserName'>
                                {user[id].userName}
                            </h4>
                            <h5 
                            className='UserStatus'>
                                {user[id].userState ? "Online" : "Offline"}
                            </h5>
                        </button>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ChatLobby
