import "./login.css"

export default function Login() {
  return (
    <div>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">KapOv</h3>
                    <span className="loginDesc">
                        There must be some important description
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input  placeholder="Email" className="loginInput" />
                        <input  placeholder="Password" type="password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className="loginRegister">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
