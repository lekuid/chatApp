import './App.css';
import Firebase from './components/firebaseConfig';
import { getDatabase, ref, set, onDisconnect, onValue, push } from "firebase/database";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import Login from './components/Login';
import SetName from './components/SetName';
import Chat from './components/Chat'
import { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';



function App() {

  const [userId, setUserId] = useState("")
  const [userName, setUserName] = useState("")
  const [otherUserName, setOtherUserName] = useState("")
  const [loggedIn, setLogin] = useState(false)
  const [nameBool, nameBoolSet] = useState(false)
  const [otherId, setOtherId] = useState("")
  const [texts, setTexts] = useState({key:{text:"", time:""}})
  const[userList, setUserList] = useState(null)

  // useEffect(() => {
  //   getText()
  // }, [Math.round((Date.now()/100000)*100000)])

  var auth;
  const dataBase = getDatabase(Firebase)

  const authorize = (x) => {
    auth = x;
    signInAnonymously(auth)
    setLogin(true)
    onAuthStateChanged(auth, async (user) => {
      if(user) {
        setUserId(user.uid)
      }
    })
  }

  const allUserRef = ref(dataBase, 'user')
  const userRef = ref(dataBase, `user/${userId}`)
  //managing presence, setting userState to false as user goes offline
  onDisconnect(ref(dataBase, `user/${userId}/`)).update({userState : false})

  //once name has been set upload userData to db
  if(nameBool) {
    set(userRef, {
      userName: userName,
      userState: true
    })
  }


  //const setOther = (u) => { 
    //setOtherId(u)
    //setOtherUserName(userList[u].userName)
    //getText() //get texts once user clicks on new chatname
  //}

  const sendText = (message) => {
    const messageRef = ref(dataBase, `messages/${otherId}/${userId}`)
    push(messageRef, {
      sender: userId,
      text: message,
      time: Date.now()
    })
  }

  
  const GetText = () => {

    const textVar = []
    const sentRef = ref(dataBase, `messages/${userId}/${otherId}`)
    const recvRef = ref(dataBase, `messages/${otherId}/${userId}`)

    useFrame(()=> {
        onValue(recvRef, (m) => {
          if(m.exists()) {
            Object.keys(m.val()).map((mssg) => textVar.push(m.val()[mssg]))
          }
        })
        onValue(sentRef, (m) => {
          if(m.exists()) {
            Object.keys(m.val()).map((mssg) => textVar.push(m.val()[mssg]))
          }
        })
        onValue(allUserRef, (x) => {
          setUserList(x.val())
        })

      let sortMssg = textVar.sort((a, b) => (a.time > b.time ? 1 : -1));
      setTexts(sortMssg)
    })

    return (
      null
    )
  }

  return (
    <div className="App">
      {loggedIn
      ?
      <></>
      :
      <Login auth={(x) => authorize(x)}/>}
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
      users = {userList}
      userId={otherId}
      getText={texts}
      otherUserName={otherUserName}
      userSelect={(u) => {
        setOtherId(u)
        setOtherUserName(userList[u].userName)
      }}
      message={(message)=> sendText(message)}/>
      :
      <></>}
      <Canvas>
        <GetText/>
      </Canvas>
    </div>
  );

}


export default App;
