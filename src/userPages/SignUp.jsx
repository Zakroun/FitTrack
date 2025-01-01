import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  document.title = "Sign Up - FitTrack";
  const [Email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [sex, setSex] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^\w+@\w+\.\w+$/;
    if (Email === "" || Password === "" || fullName === "") {
      setError("Please fill in all fields");
    } else if (!emailRegex.test(Email)) {
      setError("Invalid Email");
    } else if (Password !== ConfirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      alert("Sign Up Successful");
      window.location.href = "/pages/verify";
    }
  };
  return (
    <div className="Signup">
      <div className="logincontainer">
        <div className="logininfo">
          <h1>Sign Up</h1>
          {error ? <p id="loginerror">{error}</p> : ""}
          <form>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <div className="sex">
              <div className="sexradio">
                <input
                  type="radio"
                  value={"Male"}
                  onChange={(e) => setSex(e.target.value)}
                  id="Male"
                  checked
                  name="sex"
                />{" "}
                <label htmlFor="Male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  value={"Female"}
                  onChange={(e) => setSex(e.target.value)}
                  id="Female"
                  name="sex"
                />{" "}
                <label htmlFor="Female">Female</label> <br />
              </div>
            </div>
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <button id="loginbutton" onClick={handleSubmit}>
              Sign Up
            </button>
          </form>
          <p id="loginp">
            Already have an account?{" "}
            <Link to="/pages/login" className="link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
