import React from 'react'
import { useState } from 'react'
import './styles/ChatBox.css'

const ChatBox = ({ userName, userId, Message, getText }) => {

    const [message, setMessage] = useState("")
    //const [texts, setTexts] = useState({})

    //setTexts(getText)

    

    const messageSend = () => {
        Message(message)
        setMessage("")
    }
    

    return (
    <div className='ChatBox'>
        <div className='ChatBoxHeader'>
            <h4 className='UserName'>{userName}</h4>
        </div>
        <div className='Chat'>
            <ul className='ChatMessages'>
                {Object.keys(getText).map((mssg) => (
                    <li key={mssg}>
                        {getText[mssg].sender === userId ? 
                        <div className='Sender'>
                        <p className='mssg'>{getText[mssg].text}</p>
                        <p className='time'>{
                            new Date(getText[mssg].time).getHours()+":"+
                            new Date(getText[mssg].time).getMinutes()}</p>
                        </div>
                        : 
                        <div className='Other'>
                        <p className='mssg'>{getText[mssg].text}</p>
                        <p className='time'>{
                            new Date(getText[mssg].time).getHours()+":"+
                            new Date(getText[mssg].time).getMinutes()}</p>
                        </div>}
                    </li>
                ))}
            </ul>
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
