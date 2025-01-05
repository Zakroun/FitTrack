import { useState } from "react";

export function Forgotpassword() {
  document.title = "Forgot Password - FitTrack";
  const [email, setEmail] = useState();
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^\w+@\w+\.\w+$/;
    if (email === "") {
      setError("Please fill in all fields");
    } else if (!emailRegex.test(email)) {
      setError("Invalid Email");
    } else {
      setError("");
      window.location.href = "/pages/verify2";
    }
  };
  return (
    <div className="login">
      <div className="logincontainer">
        <div className="logininfo">
          <h1>Your Email</h1>
          {error ? <p id="loginerror">{error}</p> : ""}
          <form>
            <input
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <button id="loginbutton" onClick={handleSubmit}>
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
