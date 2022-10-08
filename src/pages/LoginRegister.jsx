import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import { useUserAuth } from '../contexts/UserAuthContext'
import { auth } from '../firebase'
import { Navigate, useNavigate } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';

function LoginRegister() {

    useEffect(() => {
      if (auth.currentUser) {
        navigate('/account')
      }
      else {}
    })

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { signUp } = useUserAuth()
  
  if (auth.currentUser) {
    console.log(auth.currentUser.email)
  }
  else {
    console.log("NO one logged in now")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      let user = await signUp(email, password)
      console.log(auth.currentUser.email)
      console.log(user)
      document.getElementById("loginemail").focus()
      document.getElementById("emailregister").value = ""
      document.getElementById("passwordregister").value = ""
      alert("Successfully registered!!")
    }
    catch (err) {
      setError(err.message)
      alert(error)
    }
    if (error) {
      alert(error)
    }
  }

  // SIGN UP IS ABOVE
  // -------------------------------------------------------------------------------------------------------------
  // LOGIN IS BELOW

  const [emaillogin, setEmaillogin] = useState("")
  const [passwordlogin, setpasswordlogin] = useState("")
  const [errorlogin, setErrorlogin] = useState("")
  const { login } = useUserAuth()

  const handleSubmitLogin = async (e) => {
    console.log(document.getElementById("loginemail").value)
    console.log(document.getElementById("loginpassword").value)
    e.preventDefault()
    try {
      let user = await login(emaillogin, passwordlogin)
      console.log(user)
      alert("Successfully logged in!!")
      navigate('/')
    }
    catch (err) {
      setErrorlogin(err.message)
      console.log(errorlogin)
      alert(errorlogin)
    }
  }

  // console.log(auth)
  return (
    <div>
      <Navbar />
      <div className='mainmainlogreg'>
        <div className='headinglogreg'>
          <p className='myacc'>MY ACCOUNT</p>
        </div>
        <hr className='hrtag'/>
        <div className='mainlogreg'>
          <div className='loginLeft'>
            <form onSubmit={handleSubmitLogin}>
              <p className='headlog'>LOGIN</p>
              {/* <h5 className='opac'>USERNAME *</h5>
              <input type="text" name="username" className='username'></input> */}
              <h5 className='opac'>EMAIL ADDRESS *</h5>
              <input type="email" name='email' className='username' id='loginemail' onChange={(e) => setEmaillogin(e.target.value)} />
              <h5 className='opac'>PASSWORD *</h5>
              <input type={"password"} name="username" className='username password' onChange={(e) => setpasswordlogin(e.target.value)} id='loginpassword' />
              <br />
              <label htmlFor="remme" className='opac rem'>REMEMBER ME</label>
              <input type="checkbox" name="remme" className='cb'></input>
              <br />
              <button className='loginbutton' type="submit">LOGIN</button>
              <br />
              
              <a href="/" className='fp'>Forgot password?</a>
            </form>
          </div>

          <div className='registerRight'>
            <form onSubmit={handleSubmit}>
              <p className='headlog'>REGISTER</p>
              <h5 className='opac'>EMAIL ADDRESS *</h5>
              <input type="email" name="email"  onChange={(e) => setEmail(e.target.value)} className='username' id='emailregister' autoComplete="off"></input>
              <h5 className='opac'>PASSWORD *</h5>
              <input type={"password"} name="username" onChange={(e) => setPassword(e.target.value)} className='username password' id='passwordregister' autoComplete='off' />
              {/* <h5 className='opac'>CONFIRM PASSWORD *</h5>
              <input type={"password"} name="username" onChange={(e) => setConfpassword(e.target.value)} className='username password' /> */}
              <br />
              <p>By registering, you agree to our <a href="google.com" className='fp'>privacy policy</a> .</p>
              <button type="submit" className='loginbutton'>REGISTER</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <GoToTop />
    </div>
  )
}

export default LoginRegister