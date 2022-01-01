In the project directory, you can run:

### `npm start`

Before that under /src/components create a file name firebase.js and add your app config from the firebase website, and do the following

```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const Firebase = initializeApp(firebaseConfig);

export default Firebase
``` 
