import React from 'react'
import "./login.css"

const Login = () => {
    console.log("stage1");
    const loginwithgoogle = () => {
        const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:5858";
        window.open(`${apiBaseUrl}/api/auth/google`, "_self");
      };
      

  return (
    <>
        <div className="login-page">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <div className="form">
                <form className='login-form'>
                    <input type="text" name="" id="" placeholder='username' />
                    <input type="password" name="" id="" placeholder='password'  />
                    <button>Login</button>
                    <p className='message'>Not Registerd? <a href="">Create an account</a></p>
                </form>
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    Sign In With Google
                </button>
            </div>
        </div>
    </>
  )
}

export default Login