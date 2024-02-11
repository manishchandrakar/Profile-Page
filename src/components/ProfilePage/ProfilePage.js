import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import UserInformationSection from "./UserInformationSection";
import Tabs from "./Tabs";
import NewsCards from "./NewsCards/BookmarkedNewsCard";
import SettingsIcon from "./NewsCards/SettingsIcon";
import mockData from "../data/mockData.json";
import "./ProfilePage.css"; // Importing CSS file for styling

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="profile-page">
      <UserInformationSection
        avatar={mockData.user.avatar}
        name={mockData.user.name}
        bio={mockData.user.bio}
      />

      <Tabs tabs={["Posted", "Bookmarked"]} onTabChange={handleTabChange} />

      {activeTab === 0 ? (
        <NewsCards articles={mockData.postedArticles} />
      ) : (
        <NewsCards articles={mockData.bookmarkedArticles} />
      )}

      <SettingsIcon />

      {/* Back to home button */}
      <Link to="/" className="back-to-home-button">
        Back to Home
      </Link>
    </div>
  );
};

export default ProfilePage;
