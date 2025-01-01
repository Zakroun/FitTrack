import { useEffect } from "react";
export default function About() {
  document.title = "About Us - FitTrack";
  useEffect(() => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.background = "";
    };
  }, []);
  return (
    <div className="about-container">
      <div className="about-introduction">
        <h1 id="abouth1">About Us</h1>
        <p>
          FitTrack is a fitness tracking application that helps you keep track
          of your workouts, diet, and overall health. With FitTrack, you can
          easily monitor your progress and set new goals for yourself. FitTrack
          is designed to help you stay motivated and achieve your fitness goals.
        </p>
      </div>

      <div className="about-services">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Workout Tracking</h3>
          <p>Track your workouts and monitor your progress over time.</p>
        </div>
        <div className="service-item">
          <h3>Diet Management</h3>
          <p>
            Manage your meals and make sure you're eating right to meet your
            goals.
          </p>
        </div>
        <div className="service-item">
          <h3>Goal Setting</h3>
          <p>
            Set personalized fitness goals and track your progress towards them.
          </p>
        </div>
        <section className="about-statistics">
        <h2>Statistics</h2>
        <div className="stat-item">
          <h3>+10000</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h3>+10000</h3>
          <p>Workouts Completed</p>
        </div>
        <div className="stat-item">
          <h3>+1000</h3>
          <p>Programs</p>
        </div>
        <div className="stat-item">
          <h3>+100</h3>
          <p>Workout Videos</p>
        </div>
      </section>
      </div>
    </div>
  );
}
