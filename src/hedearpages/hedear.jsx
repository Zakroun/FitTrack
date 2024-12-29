import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="countainer">
        <div className="logo">
          <img src="../images/logo1.png" alt="logo" id="logo" />
        </div>
        <div className="Links">
          <Link to="/" className="link">Home</Link>
          <Link to="/Programs" className="link">Programs</Link>
          <Link to="/WorkoutVideos" className="link">Workout Videos</Link>
          <Link to="/Recipes" className="link">Recipes</Link>
          <Link to="/contact" className="link">Contact</Link>
          <Link to="/About" className="link">About</Link>
        </div>
        <div className="user">
          <Link to="/signup">
            <button id="Signup">Sign Up</button>
          </Link>
          <Link to="/login">
            <button id="login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
