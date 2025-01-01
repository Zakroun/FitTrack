import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="countainer">
        <div className="logo">
        <Link to="/" className="link"><img src="../images/logo1.png" alt="logo" id="logo" /></Link>
        </div>
        <div className="Links">
          <Link to="/" className="link">Home</Link>
          <Link to="/pages/Programs" className="link">Programs</Link>
          <Link to="/pages/WorkoutVideos" className="link">Workout Videos</Link>
          <Link to="/pages/Recipes" className="link">Recipes</Link>
          <Link to="/pages/contact" className="link">Contact</Link>
          <Link to="/pages/About" className="link">About</Link>
        </div>
        <div className="user">
          <Link to="/pages/signup">
            <button id="Signup">Sign Up</button>
          </Link>
          <Link to="/pages/login">
            <button id="login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
