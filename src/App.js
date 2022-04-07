// import logo from './logo.svg';
import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then( ()=>{
        setUser({});
      })

      .catch(error=>{
        setUser({});
      })
  } 


  return (
    <div className="App">
        {
          user.email?<button onClick={handleSignOut}>Sign Out </button>:
                     <button onClick={handleGoogleSignIn}>Google Sign In </button>
        }
        
        
        <h1>Name:{user.displayName}</h1>
        <h2>E-mail:{user.email}</h2>
        <h2>User ID:{user.uid}</h2>
        <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
