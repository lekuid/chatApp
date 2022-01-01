import './App.css';
import Firebase from './components/firebase';
import Login from './components/Login';
import SetName from './components/SetName';
import Chat from './components/Chat'
import { useState } from 'react';



function App() {

  const [userId, setUserId] = useState("")
  const [userName, setUserName] = useState("")
  const [otherUserName, setOtherUserName] = useState("")
  const [loggedIn, setLogin] = useState(false)
  const [nameBool, nameBoolSet] = useState(false)

  return (
    <div className="App">
      {loggedIn
      ?
      <></>
      :
      <Login 
      user={(u) => setUserId(u)} 
      loginState={(l) => setLogin(l)}/>}
      {loggedIn & !nameBool
      ?
      <SetName 
      username={(u) => setUserName(u)}
      userNameSet={(b) => nameBoolSet(b)}/>
      :
      <></>}
      {nameBool
      ?
      //<ChatBox userName={userName} Message={(x) => console.log(x)}/>
      <Chat 
      userName={userName}
      otherUserName={otherUserName}
      userSelect={(u) => setOtherUserName(u)}
      message={(x)=>console.log(x)}/>
      :
      <></>}
    </div>
  );

}


export default App;
