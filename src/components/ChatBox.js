import React from 'react'
import { useState } from 'react'
import './styles/ChatBox.css'

const ChatBox = ({ userName, Message }) => {

    const [message, setMessage] = useState("")

    const messageSend = () => {
        Message(message)
        setMessage("")
    }

    return (
    <div className='ChatBox'>
        <div className='ChatBoxHeader'>
            <button className='ChatBoxHeaderButton ConfigButton'>
                Back
            </button>
            <h4 className='UserName'>{userName}</h4>
            <button className='ChatBoxHeaderButton ConfigButton'>
                Options
            </button>
        </div>
        <div>
        </div>
        <div className='ChatBoxMessage'>
            <input
            className='MessageBox'
            placeholder='Enter a message'
            onChange={(x)=>setMessage(x.target.value)}
            value={message}>
            </input>
            <button 
            className='MessageSend ConfigButton'
            onClick={messageSend}>
                Send
            </button>
        </div>  
    </div>
    )
}

export default ChatBox
