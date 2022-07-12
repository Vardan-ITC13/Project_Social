import "./registration.css"

export default function Registration() {
  return (
    <div>
        <div className="registration">
            <div className="registrationWrapper">
                <div className="registrationLeft">
                    <h3 className="registrationLogo">KapOv</h3>
                    <span className="registrationDesc">
                        There must be some important description
                    </span>
                </div>
                <div className="registrationRight">
                    <div className="registrationBox">
                        <input  placeholder="Username" className="registrationInput" />
                        <input  placeholder="Email" className="registrationInput" />
                        <input  placeholder="Password" type="password" className="registrationInput" />
                        <input  placeholder="Password again" type="password" className="registrationInput" />
                        <button className="registrationButton">Sign Up</button>
                        <button className="registrationRegister">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
