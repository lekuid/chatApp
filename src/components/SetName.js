import React from 'react'
import { useState } from 'react'
import './styles/SetName.css'

const SetName = ({ username, userNameSet }) => {

    const [name, setName] = useState("")
    const [placeHolder, setPlaceHolder] = useState("Enter a name!")

    const nameSet = () => {
        var regex = new RegExp("^[a-zA-Z]{5,10}$");

        if(regex.test(name)) {
            username(name)
            userNameSet(true)
            setName("")
        } else {
            setPlaceHolder("Enter 5-10 character name")
            setName("")
        }
    }

    return (
        <div className='SetNamePage Background'>
            <div className='SetName'>
                <input 
                className='SetNameInput'
                placeholder={placeHolder}
                onChange={(x) => setName(x.target.value)}
                value={name}>
                </input>
                <button 
                className='SetNameButton ConfigButton'
                onClick={nameSet}>
                    SetName
                </button>
            </div>
        </div>
    )
}

export default SetName
