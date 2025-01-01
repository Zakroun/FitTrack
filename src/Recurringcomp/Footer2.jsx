import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer2">
      <div className="containerfooter">
        <div className="footerinfo">
          <h1>FitTrack</h1>
          <p id="footerp">
            FitTrack is a fitness app that helps you achieve your fitness goals
            and track your progress. Get started with personalized workout plans
            and meal plans to help you reach your goals.
          </p>
        </div>
        <div className="footerlinks">
          <h1>Quick Links</h1>
          <div className="divlinks">
            <Link to="/pages/Programs" className="link">
              Programs
            </Link>
            <Link to="/pages/WorkoutVideos" className="link">
              Workout Videos
            </Link>
            <Link to="/pages/Recipes" className="link">
              Recipes
            </Link>
            <Link to="/pages/contact" className="link">
              Contact
            </Link>
            <Link to="/pages/About" className="link">
              About
            </Link>
          </div>
        </div>
        <div className="footercontact">
        <img src="../images/logo1.png" alt="logo" id="logofooter" />
        <div className="Socialmedia">
            <a href="https://www.facebook.com" className="sociallink">
                <img src="../images/facebook.png" alt="facebook" id="socialimg" />
            </a>
            <a href="https://www.instagram.com" className="sociallink">
                <img src="../images/instagram.png" alt="instagram" id="socialimg" />
            </a>
            <a href="https://www.twitter.com" className="sociallink">
                <img src="../images/tiktok.png" alt="twitter" id="socialimg" />
            </a>
        </div>
        </div>
      </div>
    </div>
  );
}
