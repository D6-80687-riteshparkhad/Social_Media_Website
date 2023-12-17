import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                {/* <img src="asset/logo192.png" alt="" className="loginLogo1" /> */}
                <h3 className="loginLogo">RPsocial</h3>
                <span className="loginDesc">
                    Friends are for life connect with RPsocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input type="password" placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create a New account</button>
                </div>
            </div>
        </div>    
    </div>
  )
}
