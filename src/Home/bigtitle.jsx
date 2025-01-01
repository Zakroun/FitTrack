import { Link } from "react-router-dom";
export default function BigTitle() {
  document.title = "Home - FitTrack";
  return (
    <div className="bigtitle">
      <h1>
        Elevate your training <br />
        <span className="diffcolor">
          and push your limits with <br />
          FitTrack{" "}
        </span>
      </h1>
      <Link to="/login">
            <button id="login2">Get Started <img src="../images/right.png" alt="logo" id="icon" /></button>
          </Link>
    </div>
  );
}
