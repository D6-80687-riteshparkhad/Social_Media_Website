import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">RPsocial</h3>
                <span className="loginDesc">
                    Friends are for life connect with RPsocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input type="password" placeholder="Password" className="loginInput" />
                    <input type="password" placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">Sign  Up</button>
                    
                    <button className="loginRegisterButton">Login into Account</button>
                </div>
            </div>
        </div>    
    </div>
  )
}
