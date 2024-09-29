import React, { useState } from 'react';
import './style.css';

const Dashboard = () => {
  const [userName] = useState("User");
  const [recentActivities] = useState([
    "Completed Quiz 1 on JavaScript",
    "Reviewed Study Material: HTML & CSS",
    "Attempted Mock Test 3",
  ]);
  
  // State to manage dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    alert("Logging out...");
  };

  return (
    <div className="Container">
      <header className="header">
        <h1>Welcome, <span id="userName">{userName}</span></h1>
        <button id="logoutBtn" onClick={handleLogout}>Logout</button>
      </header>

      <div className="dashboard">
        <aside className="sidebar">
          <ul>
            <li>
              {/* Profile with a dropdown */}
              <li><a href="#">Profile</a></li>  
              <a href="#" onClick={toggleDropdown}>
              My Courses
              </a>
              {isDropdownVisible && (
                <ul className="dropdown">
                  <li><a href="#">JEE</a></li>
                  <li><a href="#">NEET</a></li>
                  <li><a href="#">GATE</a></li>
                  <li><a href="#">UPSC</a></li>
                </ul>
              )}
            </li>
            
            <li><a href="/quiz">Quiz</a></li>
            <li><a href="#">Flashcards</a></li>
            <li><a href="#">Study Resources</a></li>
          </ul>
        </aside>

        <main className="main-content">
          <section className="metrics">
            <h2>Progress Overview</h2>
            <div id="progress">
              Course Completion: 75%
            </div>
          </section>

          <section className="recent-activities">
            <h2>Recent Activities</h2>
            <ul id="recentActivities">
              {recentActivities.length === 0 ? (
                <li>No recent activities</li>
              ) : (
                recentActivities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))
              )}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
