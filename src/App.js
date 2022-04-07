// import logo from './logo.svg';
import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log('Clicked');
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  }


  return (
    <div className="App">
        <button onClick={handleGoogleSignIn}>Google Sign In </button>
    </div>
  );
}

export default App;
