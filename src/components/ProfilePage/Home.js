import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the News App!</h1>
      <p>Stay updated with the latest news and trends.</p>
      {/* Profile Button */}
      <Link to="/profile">
        <button className="profile-button">Profile</button>
      </Link>
    </div>
  );
};

export default Home;
