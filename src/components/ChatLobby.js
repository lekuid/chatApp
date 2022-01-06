import React from 'react'
import './styles/ChatLobby.css'


const ChatLobby = ({ userName, userSelect, user }) => {

    return (
        <div className='ChatLobby'>
            <div className='ChatLobbyHeader'>
                <h4 
                className='UserName'>
                    {userName}
                </h4>
            </div>
            <div className='UserList'>
                <ul>
                    {Object.keys(user).map((entry) => (
                        <button
                        key={entry}
                        className='User'
                        onClick={(x)=>{userSelect(entry)}}>
                            <h4 
                            className='UserName'>
                                {user[entry].userName}
                            </h4>
                            <h5 
                            className='UserStatus'>
                                {user[entry].userState ? "Online" : "Offline"}
                            </h5>
                        </button>
                    ))}
                </ul>
            </div>
            <div className='SearchBox'>
                <button 
                className='SearchButton ConfigButton'>
                    Search
                </button>
            </div>
        </div>
    )
}

export default ChatLobby
