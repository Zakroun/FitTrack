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
    if (Email === "" || Password === "") {
      setError("Please fill in all fields");
    } else if (!emailRegex.test(Email)) {
      setError("Invalid Email");
    } else {
      setError("");
      alert("Login Successful");
      window.location.href = "/";
    }
  };
  return (
    <div className="login">
      <div className="logincontainer">
        <div className="logininfo">
          <h1>Login</h1>
          {error ? (
            <div class="error">
              <div class="error__icon">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
                    fill="#393a37"
                  ></path>
                </svg>
              </div>
              <div class="error__title">{error}</div>
              {/* <div class="error__close">
    <svg
    // onClick={setError('')
    // }
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
        fill="#393a37"
      ></path>
    </svg>
  </div> */}
            </div>
          ) : (
            ""
          )}
          <form>
            <input
              type="text"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <button id="loginbutton" onClick={handleSubmit}>
              Login
            </button>
          </form>
          <p id="loginp">
            Don't have an account?{" "}
            <Link to="/pages/signup" className="link">
              Sign Up
            </Link>
          </p>
          <p>
            <Link to="/pages/forgotpassword" className="link">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
