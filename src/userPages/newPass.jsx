import { useState } from "react";

export default function NewPassword() {
  document.title = "New Password - FitTrack";
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      alert("Update Password Successful");
      window.location.href = "/";
    }
  };
  return (
    <div className="login">
      <div className="logincontainer">
        <div className="logininfo">
          <h1>New Password</h1>
          {error ? <p id="loginerror">{error}</p> : ""}
          <form>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Confirm Your Password"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <button id="loginbutton" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
