import {useState} from 'react'
import SignIn from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'
import { SignalWifi0Bar } from '@mui/icons-material'

const App = () => {

  const[user, setUser] = useState("");
  const [hasAccount, setHasAccout] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = () => {
      localStorage.setItem("firstname", firstname)
      localStorage.setItem("lastname", lastname)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)

      console.log("sign up successful");
  }

  const handleSignin = () => {
   
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (( storedEmail === email) && (storedPassword === password))
    { setUser(email);}
  }

  return (
    <div>
      {
        user ? ( 
        <Home
          />) 
          : ( 
        <SignIn 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSignin={handleSignin}
          />)
      }
      
    </div>
  )
}

export default App
