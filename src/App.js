import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Home from "./components/ProfilePage/Home";
import Settings from "./components/ProfilePage/NewsCards/SettingsIcon";
import "./App.css"; // Import your CSS file for styling

const App = () => {
  return (
    <Router>
      <div
        className="app"
        style={{
          backgroundImage: "linear-gradient(135deg, #000000 0%, #2A1B3D 100%)",
        }}
      >
        {/* Header */}
        <header>
          <h1>News App</h1>
        </header>

        {/* Main content */}
        <main>
          {/* Routing */}
          <Routes>
            {/* Use Routes instead of wrapping each Route individually */}
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>
            Developed by{" "}
            <a
              href="https://github.com/manishchandrakar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manish Chandrakar
            </a>{" "}
            -{" "}
            <a
              href="https://www.linkedin.com/in/manish-chandrakar-23392b183/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
