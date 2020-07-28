import React, { Component } from 'react';
import { createStore } from 'redux';
import Sidebar from "./components/Sidebar";
import HomeContent  from "./components/content/HomeContent.js";
import ExperienceContent from "./components/content/ExperienceContent";
import EducationContent from "./components/content/EducationContent";
import SkillsContent from "./components/content/SkillsContent";
import PortfolioContent from "./components/content/PortfolioContent";
import ContactContent from "./components/content/ContactContent";
import { useSelector } from 'react-redux';
import { selectPage } from './components/navigation'
import './App.css';

const App = ({ }) => {
  const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `#00363A`,
    topBarHeight: 40,
    footerMenuHeight: 50,
  };

  const page = useSelector(selectPage);

  return (
    <div
      style={{
        backgroundColor: styles.black(0.05),
        minHeight: "100vh",
        position: "relative"
      }}>
      <Sidebar />
      {page === 1 ? (
        <HomeContent styles={styles} />
      ) : page === 2 ? (
        <ExperienceContent styles={styles} />
      ) : page === 3 ? (
        <EducationContent styles={styles} />
      ) : page === 4 ? (
        <SkillsContent styles={styles} />
      ) : page === 5 ? (
        <PortfolioContent styles={styles} />
      ) : page === 6 ? (
        <ContactContent styles={styles} />
      ) : (
                    <HomeContent styles={styles} />
                  )}
    </div>
  );
}

export default App;
