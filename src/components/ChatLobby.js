import React from 'react'
import './styles/ChatLobby.css'

const ChatLobby = ({ userName, userSelect }) => {

    const users = [
        {name:"Ammy", status:"online"},
        {name:"Tim", status:"offline"},
        {name:"Armin", status:"offline"},
        {name:"George", status:"offline"},
        {name:"Alisha", status:"online"},
        {name:"Bruh", status:"offline"},
        {name:"Tim", status:"offline"},
        {name:"Armin", status:"offline"},
        {name:"George", status:"offline"},
        {name:"Alisha", status:"online"},
        {name:"Cat", status:"offline"},
    ]

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
                    {users.map((user)=> (
                        <button 
                        id={user.name}
                        className='User'
                        onClick={(x)=>{userSelect(x.target.id)}}>
                            <h4 
                            className='UserName'>
                                {user.name}
                            </h4>
                            <h5 
                            className='UserStatus'>
                                {user.status}
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
