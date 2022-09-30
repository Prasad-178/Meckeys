import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const LoginRegister = () => {
  return (
    <div>
      <Navbar />
      <div className='mainmainlogreg'>
        <div className='headinglogreg'>
          <p className='myacc'>MY ACCOUNT</p>
        </div>
        <hr />
        <div className='mainlogreg'>
          <div className='loginLeft'>
            <p className='headlog'>LOGIN</p>
            <h5 className='opac'>USERNAME *</h5>
            <input type="text" name="username" className='username'></input>
            <h5 className='opac'>PASSWORD *</h5>
            <input type={"password"} name="username" className='username password' />
            <br />
            <label htmlFor="remme" className='opac rem'>REMEMBER ME</label>
            <input type="checkbox" name="remme" className='cb'></input>
            <br />
            <button className='loginbutton' type="submit">LOGIN</button>
            <br />
            <a href="/" className='fp'>Forgot password?</a>
          </div>

          <div className='registerRight'>
            <p className='headlog'>REGISTER</p>
            <h5 className='opac'>USERNAME *</h5>
            <input type="text" name="username" className='username'></input>
            <h5 className='opac'>EMAIL ADDRESS *</h5>
            <input type="email" name="email" className='username'></input>
            <h5 className='opac'>PASSWORD *</h5>
            <input type={"password"} name="username" className='username password' />
            <h5 className='opac'>CONFIRM PASSWORD *</h5>
            <input type={"password"} name="username" className='username password' />
            <br />
            <p>By registering, you agree to our <a href="" className='fp'>privacy policy</a> .</p>
            <button type="submit" className='loginbutton'>REGISTER</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginRegister