import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    document.title = "Login - FitTrack";
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^\w+@\w+\.\w+$/;
        if(Email === "" || Password === ""){
            setError("Please fill in all fields");
        }else if(!emailRegex.test(Email)){
            setError("Invalid Email");
        }else{
            setError("");
            alert("Login Successful");
            window.location.href = "/";
        }
    }
    return (
        <div className="login">
        <div className="logincontainer">
            <div className="logininfo">
            <h1>Login</h1>
            {error ? <p id="loginerror">{error}</p> : ''}
            <form>
                <input type="text" placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} id="logininput" /> <br />
                <input type="password" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)} id="logininput" /> <br />
                <button id="loginbutton" onClick={handleSubmit}>Login</button>
            </form>
            <p id="loginp">
                Don't have an account? <Link to="/pages/signup" className="link">Sign Up</Link>
            </p>
            <p>
                <Link to="/pages/forgotpassword" className="link">Forgot Password?</Link>
            </p>
            </div>
        </div>
        </div>
    );
}